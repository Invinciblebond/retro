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

// Default framing ~3x further out than the old tight crop.
function frameObject(obj, camera, zoom = 3.75) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const dist = (maxDim / (2 * Math.tan((camera.fov * Math.PI / 180) / 2))) * zoom;
  camera.position.set(center.x, center.y, center.z + dist); // front view
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

// Front-facing PNG of the model. Resolves to Blob, or null if the GLB is missing/broken.
export async function snapshotPNG({ width = 640, height = 800, url = MODEL_URL } = {}) {
  let gltf;
  try { gltf = await loadModel(url); } catch { return null; }
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(width, height);
  const scene = makeScene();
  // SkeletonUtils.clone — plain .clone() breaks SkinnedMesh skeleton bindings (collapsed mesh)
  const model = SkeletonUtils.clone(gltf.scene);
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
export async function mountViewer(container, { url = MODEL_URL } = {}) {
  const gltf = await loadModel(url);
  const w = container.clientWidth || 320;
  const h = container.clientHeight || 400;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  const scene = makeScene();
  const model = SkeletonUtils.clone(gltf.scene); // skeleton-safe clone
  scene.add(model);
  const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 100);
  const center = frameObject(model, camera);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(center);
  controls.enableDamping = true;
  controls.enableZoom = true; // scroll / pinch to zoom
  controls.minDistance = camera.position.z * 0.15; // allow zooming in close
  controls.maxDistance = camera.position.z * 4;    // and far out
  let raf;
  (function loop() {
    raf = requestAnimationFrame(loop);
    controls.update();
    renderer.render(scene, camera);
  })();
  return {
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
