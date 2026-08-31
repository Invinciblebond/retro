/* ============================================================================
 * assets/sidebar.js — Utopoly shared sidebar
 * ----------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH. Edit the NAV array and every page updates.
 * Drop `<script src="assets/sidebar.js"></script>` where the rail should sit —
 * a plain src tag, no defer/async: it injects itself at its own position while
 * the page is still parsing, so there is no layout shift or flash.
 * ========================================================================== */
(function () {
  'use strict';
  var thisScript = document.currentScript;

  var NAV = [
    { label:'Dashboard', href:'Log.html', match:['Log.html'],
      icon:'<path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Main Boards', href:'Progress.html', match:['Progress.html'],
      icon:'<path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v8a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Calorie Tracker', href:'calorie_tracker.html', match:['calorie_tracker.html'],
      icon:'<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Caloric History', href:'History.html', match:['History.html'],
      icon:'<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'CycleManager', href:'cycletracker.html', match:['cycletracker.html'],
      icon:'<path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Body Composition', href:'Body.html', match:['Body.html'],
      icon:'<path d="M12 3a2 2 0 100 4 2 2 0 000-4zM7 21v-5l-2-3 1.5-4A2 2 0 018.4 7.6L12 8l3.6-.4a2 2 0 011.9 1.4L19 13l-2 3v5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Scheduler', href:'Scheduler.html', match:['Scheduler.html'],
      icon:'<path d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Planning Boards', href:'CainTracker.html', match:['CainTracker.html'],
      icon:'<path d="M9 4H5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1zM19 14h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM10 7h4a2 2 0 012 2v5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Memory Visualizer', href:'claudethink.html', match:['claudethink.html'],
      icon:'<path d="M12 3a4 4 0 00-4 4v1a3 3 0 000 6v1a4 4 0 008 0v-1a3 3 0 000-6V7a4 4 0 00-4-4z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>' },
    { label:'Others',
      match:[],
      icon:'<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
      children:[
        { label:'Cain Finance', href:'https://cain.finance/MarketInfo', external:true },
        { label:'Urlsify', href:'https://urlsify.com', external:true }
      ] }
  ];

  var ROW_ACTIVE = 'sb-row active';
  var ROW_IDLE   = 'sb-row';

  function here() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }
  function isActive(item) {
    if (!item.match) return false;
    var cur = here();
    for (var i = 0; i < item.match.length; i++) if (item.match[i] === cur) return true;
    return false;
  }
  function svg(inner, cls) {
    return '<svg class="' + cls + '" fill="none" stroke="currentColor" viewBox="0 0 24 24">' + inner + '</svg>';
  }

  var CHEVRON = '<svg class="sb-caret" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
    '<path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';

  function renderRow(item) {
    var active = isActive(item);
    var body = svg(item.icon, 'sb-ico') + '<span class="sb-label">' + item.label + '</span>';

    if (item.children && item.children.length) {
      var links = item.children.map(function (c) {
        return '<a class="sb-sublink" href="' + c.href + '"' +
               (c.external ? ' target="_blank" rel="noopener"' : '') + '>' + c.label +
               (c.external ? '<svg class="sb-ext" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' : '') +
               '</a>';
      }).join('');
      return '<div class="sb-group">' +
               '<button type="button" class="sb-row sb-grouphead" aria-expanded="false">' + body + CHEVRON + '</button>' +
               '<div class="sb-submenu">' + links + '</div>' +
             '</div>';
    }
    return '<a class="' + (active ? ROW_ACTIVE : ROW_IDLE) + '" href="' + item.href + '">' + body + '</a>';
  }

  function markup() {
    var rows = NAV.map(renderRow).join('');
    return '' +
    '<aside id="aura-sidebar">' +
      '<div class="sb-top">' +
        '<a class="sb-brand" href="Log.html">' +
          '<span class="sb-mark">' +
            '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill="#060606"/></svg>' +
          '</span>' +
          '<span class="sb-wordmark">' +
            '<b>Utopoly</b>' +
          '</span>' +
        '</a>' +
        '<nav class="sb-nav">' + rows + '</nav>' +
      '</div>' +
      '<div class="sb-foot">' +
        '<a class="' + (here() === 'Settings.html' ? ROW_ACTIVE : ROW_IDLE) + '" href="Settings.html">' +
          '<svg class="sb-ico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2"/></svg>' +
          '<span class="sb-label">Settings</span>' +
        '</a>' +
        '<button type="button" class="sb-row" id="sb-logout" data-logout>' +
          '<svg class="sb-ico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17l5-5-5-5M20 12H9M12 3H5v18h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' +
          '<span class="sb-label">Log out</span>' +
        '</button>' +
        '<button type="button" class="sb-row" id="aura-sidebar-toggle" aria-label="Collapse sidebar">' +
          '<svg class="sb-ico" id="collapse-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7M18 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' +
          '<span class="sb-label">Collapse</span>' +
        '</button>' +
      '</div>' +
    '</aside>';
  }

  var CSS = [
    '#aura-sidebar{width:220px;background:#0a0a0a;border-right:1px solid rgba(255,255,255,0.1);',
      'display:flex;flex-direction:column;flex-shrink:0;transition:width .25s ease;overflow:hidden;height:100%}',
    '#aura-sidebar.collapsed{width:56px}',
    '#aura-sidebar .sb-top{padding:16px}',
    '#aura-sidebar .sb-brand{display:flex;align-items:center;gap:9px;margin-bottom:34px;min-height:32px}',
    '#aura-sidebar .sb-mark{width:32px;height:32px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;',
      'justify-content:center;background:linear-gradient(145deg,#00ffa3,#00c281)}',
    '#aura-sidebar .sb-mark svg{width:17px;height:17px;transition:transform .6s cubic-bezier(.4,0,.2,1)}',
    '#aura-sidebar .sb-brand:hover .sb-mark svg{transform:rotate(180deg)}',
    '#aura-sidebar .sb-wordmark b{display:block;font-size:14px;font-weight:700;letter-spacing:-.01em;line-height:1.1;color:#fff}',
    '#aura-sidebar .sb-wordmark i{display:block;font-size:9px;font-style:normal;color:#888;text-transform:uppercase;letter-spacing:.13em;margin-top:2px}',
    '#aura-sidebar .sb-label,#aura-sidebar .sb-wordmark{transition:opacity .18s ease,max-width .25s ease;opacity:1;max-width:160px;overflow:hidden;white-space:nowrap}',
    '#aura-sidebar.collapsed .sb-label,#aura-sidebar.collapsed .sb-wordmark{opacity:0;max-width:0;pointer-events:none}',
    '#aura-sidebar .sb-nav{display:flex;flex-direction:column;gap:2px}',
    '#aura-sidebar a,#aura-sidebar a:hover{text-decoration:none}',
    '#aura-sidebar .sb-row{display:flex;align-items:center;gap:11px;width:100%;padding:8px 11px;border-radius:9px;',
      'font-family:inherit;font-size:13px;font-weight:400;color:#888;background:transparent;border:none;',
      'cursor:pointer;text-align:left;white-space:nowrap;transition:color .15s,background-color .15s}',
    '#aura-sidebar .sb-row:hover{color:#fff;background:rgba(255,255,255,0.04)}',
    '#aura-sidebar .sb-row.active{background:rgba(0,255,163,0.10);color:#fff;font-weight:600;position:relative}',
    '#aura-sidebar .sb-row.active .sb-ico{color:#00ffa3}',
    '#aura-sidebar .sb-row.active::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);\
      width:3px;height:17px;border-radius:0 3px 3px 0;background:#00ffa3}',
    '#aura-sidebar .sb-ico{width:19px;height:19px;flex-shrink:0}',
    '#aura-sidebar .sb-caret{width:13px;height:13px;margin-left:auto;flex-shrink:0;opacity:.6;transition:transform .2s ease}',
    '#aura-sidebar .sb-group.open .sb-caret{transform:rotate(180deg)}',
    '#aura-sidebar .sb-submenu{display:none;margin:2px 0 4px}',
    '#aura-sidebar .sb-group.open .sb-submenu{display:block}',
    '#aura-sidebar .sb-sublink{display:flex;align-items:center;gap:6px;padding:7px 12px 7px 41px;font-size:12px;color:#888;',
      'border-radius:8px;white-space:nowrap;overflow:hidden;transition:background .12s,color .12s}',
    '#aura-sidebar .sb-sublink:hover{background:rgba(255,255,255,0.04);color:#fff}',
    '#aura-sidebar .sb-ext{width:11px;height:11px;opacity:.5;flex-shrink:0}',
    '#aura-sidebar .sb-foot{margin-top:auto;padding:16px;border-top:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;gap:2px}',
    '#aura-sidebar #sb-logout:hover{color:#f87171;background:rgba(248,113,113,0.08)}',
    '#collapse-icon{transition:transform .25s ease}',
    '#aura-sidebar.collapsed #collapse-icon{transform:rotate(180deg)}',
    '#aura-sidebar.collapsed .sb-top,#aura-sidebar.collapsed .sb-foot{padding-left:0;padding-right:0}',
    '#aura-sidebar.collapsed .sb-row,#aura-sidebar.collapsed .sb-brand{justify-content:center;gap:0;padding-left:0;padding-right:0}',
    '#aura-sidebar.collapsed .sb-caret{display:none}',
    '#aura-sidebar .sb-group{position:relative}',
    '#aura-sidebar.collapsed .sb-group.open .sb-submenu{display:block;position:absolute;left:calc(100% + 6px);top:0;',
      'min-width:190px;padding:6px;background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:12px;',
      'box-shadow:0 12px 40px rgba(0,0,0,0.7);z-index:300}',
    '#aura-sidebar.collapsed .sb-sublink{padding-left:12px}',
    '#aura-sidebar.submenu-open{overflow:visible}',
    /* Floating rail: pages that are not a flex shell get a fixed rail and
       matching body padding instead of a flex sibling. */
    '#aura-sidebar.floating{position:fixed;left:0;top:0;bottom:0;height:100vh;z-index:150}',
    'body.aura-rail{padding-left:220px;transition:padding-left .25s ease}',
    'body.aura-rail-collapsed{padding-left:56px}',
    '@media(max-width:820px){#aura-sidebar{position:fixed;z-index:200;left:0;top:0;bottom:0;height:100vh;',
      'transform:translateX(-100%);transition:transform .25s ease,width .25s ease}',
      '#aura-sidebar.open{transform:none}',
      'body.aura-rail,body.aura-rail-collapsed{padding-left:0}',
      '#aura-rail-btn{display:flex!important}}',
    /* Floating pages have no header of their own to hang a menu button on. */
    '#aura-rail-btn{display:none;position:fixed;left:12px;bottom:12px;z-index:210;width:40px;height:40px;',
      'align-items:center;justify-content:center;border-radius:12px;cursor:pointer;',
      'background:rgba(17,17,17,.92);border:1px solid rgba(255,255,255,.12);color:#888;',
      'backdrop-filter:blur(10px);box-shadow:0 8px 26px rgba(0,0,0,.5)}',
    '#aura-rail-btn svg{width:18px;height:18px}'
  ].join('');

  function injectCSS() {
    if (document.getElementById('aura-sidebar-css')) return;
    var s = document.createElement('style');
    s.id = 'aura-sidebar-css';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  injectCSS();

  var holder = document.createElement('div');
  holder.innerHTML = markup();
  var aside = holder.firstChild;
  if (thisScript && thisScript.parentNode) thisScript.parentNode.insertBefore(aside, thisScript);
  else document.body.insertBefore(aside, document.body.firstChild);

  // Pages that aren't a flex shell get a fixed rail plus body padding.
  var floating = !(aside.parentNode && aside.parentNode.classList &&
                   aside.parentNode.classList.contains('shell'));
  if (floating) aside.classList.add('floating');

  function syncBody() {
    if (!floating || !document.body) return;
    document.body.classList.add('aura-rail');
    document.body.classList.toggle('aura-rail-collapsed', aside.classList.contains('collapsed'));
  }

  // collapse, remembered per browser
  var KEY = 'aura.sidebar.collapsed';
  try { if (localStorage.getItem(KEY) === '1') aside.classList.add('collapsed'); } catch (e) {}

  aside.querySelector('#aura-sidebar-toggle').addEventListener('click', function () {
    var on = aside.classList.toggle('collapsed');
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    syncBody();
  });

  if (floating) {
    if (document.body) syncBody();
    else addEventListener('DOMContentLoaded', syncBody);

    // small floating button so the rail is reachable on narrow screens
    addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('aura-rail-btn')) return;
      var b = document.createElement('button');
      b.id = 'aura-rail-btn';
      b.type = 'button';
      b.setAttribute('aria-label', 'Menu');
      b.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-width="2"/></svg>';
      b.addEventListener('click', function () { aside.classList.toggle('open'); });
      // Pages with their own fixed bottom bar would otherwise cover this button.
      if (document.querySelector('nav[class*="bottom-0"]')) b.style.bottom = '88px';
      document.body.appendChild(b);
    });
  }

  aside.querySelectorAll('.sb-grouphead').forEach(function (head) {
    head.addEventListener('click', function () {
      var group = head.parentNode;
      var open = group.classList.toggle('open');
      head.setAttribute('aria-expanded', open ? 'true' : 'false');
      aside.classList.toggle('submenu-open', !!aside.querySelector('.sb-group.open'));
    });
  });

  window.auraSidebar = {
    el: aside,
    toggleMobile: function () { aside.classList.toggle('open'); }
  };
})();
