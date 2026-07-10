// UTOPOLY — 3D avatar viewer + PNG snapshot (three.js, GLB)
// Model file: assets/models/avatar.glb (same base model for every user).
// ES module — loaded with <script type="module"> + importmap (see avatar.html).
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

export const MODEL_URL = "assets/models/avatar.glb";

function makeScene() {
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const dir = new THREE.DirectionalLight(0xffffff, 1.6);
  dir.position.set(2, 4, 3);
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5);
  fill.position.set(-2, 1, -2);
  scene.add(fill);
  return scene;
}

// Framing derived entirely from model bounds — no magic offsets.
// Skinned-mesh-accurate bounds: precise=true where supported, else union of
// each mesh's computed bounding box transformed to world space.
function computeBounds(obj) {
  obj.updateMatrixWorld(true);
  try {
    const box = new THREE.Box3().setFromObject(obj, true); // precise: applies skinning
    if (!box.isEmpty()) return box;
  } catch {}
  const box = new THREE.Box3();
  obj.traverse((child) => {
    if (!child.isMesh || !child.geometry) return;
    child.geometry.computeBoundingBox();
    box.union(child.geometry.boundingBox.clone().applyMatrix4(child.matrixWorld));
  });
  return box;
}

// Default zoom 3.75 ≈ 3x further out than a tight crop; full body + padding.
function frameObject(obj, camera, zoom = 3.75) {
  const box = computeBounds(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3()); // orbit/look target = true box center (Y included)
  const maxDim = Math.max(size.x, size.y, size.z);
  const dist = (maxDim / 2) / Math.tan((camera.fov * Math.PI / 180) / 2) * zoom;
  camera.position.set(center.x, center.y, center.z + dist); // front view, level with center
  camera.near = dist / 100;
  camera.far = dist * 100;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
  return center;
}

let modelPromise = null;
export function loadModel(url = MODEL_URL) {
  if (!modelPromise) modelPromise = new GLTFLoader().loadAsync(url);
  return modelPromise;
}

/* ================= Clothing & accessories =================
   The body meshes keep classic 585×559 clothing-template UV layouts, so a
   standard template PNG maps straight onto the rig:
   - shirt template → torso + arms, pants template → legs,
   - t-shirt → single decal on the front-torso UV region.
   Templates are composited on an offscreen canvas over the body-color fill,
   then applied as a CanvasTexture by MUTATING the existing material (skinned
   meshes keep their material object; body color stays as material.color tint). */

const TEMPLATE_W = 585, TEMPLATE_H = 559;
// front-torso decal region in classic template space
const TSHIRT_REGION = { x: 231, y: 74, w: 128, h: 128 };

function loadImage(url) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = url;
  });
}

/* Composite body color + clothing template PNGs into one texture. */
export async function composeClothingTexture({ bodyColor = "#f5d29a", shirtUrl = null, pantsUrl = null, tshirtUrl = null } = {}) {
  const c = document.createElement("canvas");
  c.width = TEMPLATE_W; c.height = TEMPLATE_H;
  const ctx = c.getContext("2d");
  // Bake the body color in as the base fill; material.color stays white on
  // textured meshes so clothing pixels render true (tint would multiply them).
  ctx.fillStyle = bodyColor;
  ctx.fillRect(0, 0, TEMPLATE_W, TEMPLATE_H);
  for (const url of [shirtUrl, pantsUrl]) {
    if (!url) continue;
    try { ctx.drawImage(await loadImage(url), 0, 0, TEMPLATE_W, TEMPLATE_H); } catch {}
  }
  if (tshirtUrl) {
    try {
      const img = await loadImage(tshirtUrl);
      ctx.drawImage(img, TSHIRT_REGION.x, TSHIRT_REGION.y, TSHIRT_REGION.w, TSHIRT_REGION.h);
    } catch {}
  }
  const tex = new THREE.CanvasTexture(c);
  tex.flipY = false;             // glTF UV convention
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* The GLB's embedded head texture has a GREY background (~rgb 126/162), so the
   bodyColor tint made the head darker than the torso. Normalize it once:
   bright pixels (background) -> white, dark pixels (eyes/mouth) kept.
   Tint then yields head skin == torso skin. */
function whitenFaceMap(srcTex) {
  const img = srcTex.image;
  if (!img) return srcTex;
  const c = document.createElement("canvas");
  c.width = img.width; c.height = img.height;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const px = id.data;
  for (let i = 0; i < px.length; i += 4) {
    const lum = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
    if (lum > 100) { px[i] = px[i + 1] = px[i + 2] = 255; } // background -> white
  }
  ctx.putImageData(id, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.flipY = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* Face texture: body color base + face PNG composited full-frame.
   Face PNGs are authored to the head UV layout (transparent background),
   so skin shows through wherever the PNG is transparent. */
export async function composeFaceTexture({ bodyColor = "#f5d29a", faceUrl } = {}) {
  const img = await loadImage(faceUrl);
  const c = document.createElement("canvas");
  c.width = img.naturalWidth || 512;
  c.height = img.naturalHeight || 512;
  const ctx = c.getContext("2d");
  ctx.fillStyle = bodyColor;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(img, 0, 0, c.width, c.height);
  const tex = new THREE.CanvasTexture(c);
  tex.flipY = false; // glTF UV convention
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* Resolve equipped item ids -> catalog item rows. */
function equippedItem(cfg, items, slot) {
  const id = cfg?.equipped?.[slot];
  return id ? (items || []).find((i) => i.id === id) : null;
}

const accessoryLoader = new GLTFLoader();
const accessoryCache = new Map();
async function loadAccessory(url) {
  if (!accessoryCache.has(url)) accessoryCache.set(url, accessoryLoader.loadAsync(url));
  const gltf = await accessoryCache.get(url);
  return SkeletonUtils.clone(gltf.scene);
}

/* Apply an avatar config to a cloned model instance:
   body-color tint, clothing textures, and hat/gear/accessory meshes on bones.
   Children of the rig are picked up automatically by the snapshot pipeline. */
export async function applyAvatarConfig(model, cfg = {}, items = []) {
  // remove accessories from a previous apply (live re-config)
  const stale = [];
  model.traverse((ch) => { if (ch.userData?.avatarSlot) stale.push(ch); });
  stale.forEach((ch) => ch.parent?.remove(ch));

  const bodyColor = cfg.body_color || "#f5d29a";
  const shirt = equippedItem(cfg, items, "shirt");
  const pants = equippedItem(cfg, items, "pants");
  const tshirt = equippedItem(cfg, items, "tshirt");
  const face = equippedItem(cfg, items, "face");

  let faceTex = null;
  if (face?.image_url) {
    try { faceTex = await composeFaceTexture({ bodyColor, faceUrl: face.image_url }); } catch {}
  }

  const tex = (shirt?.image_url || pants?.image_url || tshirt?.image_url)
    ? await composeClothingTexture({
        bodyColor,
        shirtUrl: shirt?.image_url || null,
        pantsUrl: pants?.image_url || null,
        tshirtUrl: tshirt?.image_url || null,
      })
    : null;

  model.traverse((child) => {
    if (!child.isMesh || !child.material) return;
    // keep the SAME material object — replacing it breaks skinned meshes
    if (/head/i.test(child.material.name || child.name)) {
      // remember the GLB's default face (background whitened so the skin
      // tint matches the torso exactly) so unequipping restores it live
      if (child.material.userData.defaultFaceMap === undefined)
        child.material.userData.defaultFaceMap = child.material.map ? whitenFaceMap(child.material.map) : null;
      if (faceTex) {
        child.material.map = faceTex;
        child.material.color = new THREE.Color("#ffffff"); // skin baked into texture
      } else {
        child.material.map = child.material.userData.defaultFaceMap;
        child.material.color = new THREE.Color(bodyColor); // default face tinted, as before
      }
      child.material.needsUpdate = true;
    } else if (tex && /torso|body/i.test(child.material.name || child.name)) {
      child.material.map = tex;
      child.material.color = new THREE.Color("#ffffff"); // body color baked into texture
      child.material.needsUpdate = true;
    } else {
      // only clear maps WE set (CanvasTexture) — never the GLB's own textures (face, etc.)
      if (child.material.map?.isCanvasTexture) child.material.map = null;
      child.material.color = new THREE.Color(bodyColor);
      child.material.needsUpdate = true;
    }
  });

  // hats / gear / accessories: separate .glb attached to a bone (default Head_01)
  let skeleton = null;
  model.traverse((ch) => { if (!skeleton && ch.isSkinnedMesh) skeleton = ch.skeleton; });
  for (const slot of ["hat", "gear", "accessory"]) {
    const it = equippedItem(cfg, items, slot);
    if (!it?.mesh_url || !skeleton) continue;
    try {
      const acc = await loadAccessory(it.mesh_url);
      const a = it.attach || {};
      const bone = skeleton.getBoneByName(a.bone || "Head_01");
      if (!bone) continue;
      if (a.position) acc.position.fromArray(a.position);
      if (a.rotation) acc.rotation.fromArray(a.rotation);
      if (a.scale) acc.scale.fromArray(a.scale);
      acc.userData.avatarSlot = slot;
      bone.add(acc);
    } catch {}
  }
  return model;
}

// Front-facing PNG of the model. Resolves to Blob, or null if the GLB is missing/broken.
export async function snapshotPNG({ width = 640, height = 800, url = MODEL_URL, cfg = null, items = [] } = {}) {
  let gltf;
  try { gltf = await loadModel(url); } catch { return null; }
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(width, height);
  const scene = makeScene();
  // SkeletonUtils.clone — plain .clone() breaks SkinnedMesh skeleton bindings (collapsed mesh)
  const model = SkeletonUtils.clone(gltf.scene);
  // clones share materials with the source — give this instance its own so
  // clothing/texture mutations never leak between renders
  model.traverse((ch) => { if (ch.isMesh && ch.material) ch.material = ch.material.clone(); });
  if (cfg) await applyAvatarConfig(model, cfg, items);
  scene.add(model);
  const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
  frameObject(model, camera);
  renderer.render(scene, camera);
  const blob = await new Promise((res) => renderer.domElement.toBlob(res, "image/png"));
  renderer.dispose();
  return blob;
}

// Interactive rotatable viewer inside `container`. Throws if GLB missing.
// Returns { dispose } — call dispose() when switching back to 2D.
export async function mountViewer(container, { url = MODEL_URL, cfg = null, items = [], autoRotate = false } = {}) {
  const gltf = await loadModel(url);
  const w = container.clientWidth || 320;
  const h = container.clientHeight || 400;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  const scene = makeScene();
  const model = SkeletonUtils.clone(gltf.scene); // skeleton-safe clone
  model.traverse((ch) => { if (ch.isMesh && ch.material) ch.material = ch.material.clone(); });
  if (cfg) await applyAvatarConfig(model, cfg, items);
  scene.add(model);
  const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 100);
  const center = frameObject(model, camera);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(center);
  controls.enableDamping = true;
  controls.enableZoom = true; // scroll / pinch to zoom
  if (autoRotate) { controls.autoRotate = true; controls.autoRotateSpeed = 3; }
  const dist = camera.position.distanceTo(center);
  controls.minDistance = dist * 0.15; // allow zooming in close
  controls.maxDistance = dist * 4;    // and far out
  let raf;
  (function loop() {
    raf = requestAnimationFrame(loop);
    controls.update();
    renderer.render(scene, camera);
  })();
  return {
    // live re-apply config (color/clothing/accessories) without remount —
    // keeps camera angle and orbit state
    async update(newCfg, newItems) {
      await applyAvatarConfig(model, newCfg || cfg, newItems || items);
    },
    dispose() {
      cancelAnimationFrame(raf);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

// Fallback: rasterize the legacy SVG avatar to a PNG blob (used until the GLB exists).
export async function svgToPNG(svgString, width = 640, height = 800) {
  const img = new Image();
  const u = URL.createObjectURL(new Blob([svgString], { type: "image/svg+xml" }));
  try {
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = u; });
    const c = document.createElement("canvas");
    c.width = width; c.height = height;
    c.getContext("2d").drawImage(img, 0, 0, width, height);
    return await new Promise((r) => c.toBlob(r, "image/png"));
  } finally { URL.revokeObjectURL(u); }
}

// Upload snapshot to Supabase storage, update profile, return public URL (cache-busted).
export async function publishSnapshot(sb, userId, blob) {
  const path = `${userId}/snapshot.png`;
  const { error: upErr } = await sb.storage.from("avatars").upload(path, blob, { upsert: true, contentType: "image/png" });
  if (upErr) throw upErr;
  const { data } = sb.storage.from("avatars").getPublicUrl(path);
  const url = `${data.publicUrl}?t=${Date.now()}`;
  const { error } = await sb.from("profiles").update({ avatar_snapshot_url: url, updated_at: new Date().toISOString() }).eq("id", userId);
  if (error) throw error;
  return url;
}
