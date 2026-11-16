/* ============================================================================
 * assets/learn.js: Utopoly Learn engine
 * ----------------------------------------------------------------------------
 * Renders one course from window.LEARN (set by assets/learn/<id>.js).
 * Two shapes of course:
 *   kind:'course'  lessons made of content blocks (text, tables, figures, quiz)
 *   kind:'lang'    the four language lessons: sounds, words, grammar, reading
 * Lessons are routed by the URL hash and built the first time they are opened,
 * so a page paints its shell at once and only renders what is being read.
 * Block reference: tools/README.md
 * ========================================================================== */
(function () {
  'use strict';
  var D = window.LEARN;
  if (!D) return;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function plain(s) { return String(s).replace(/<[^>]+>/g, ''); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var SPK = '<svg class="spk" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5L6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
  var CHEV = '<svg class="chev" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';

  /* ── speech (browser voices; nothing is downloaded) ───────────────────── */
  var voice = null, warned = false, canSpeak = 'speechSynthesis' in window;
  var wanted = D.voice ? D.voice.split('|') : [];
  function pickVoice() {
    if (!canSpeak || !wanted.length) return;
    var vs = speechSynthesis.getVoices();
    for (var w = 0; w < wanted.length; w++) {
      var re = new RegExp('^' + wanted[w], 'i');
      for (var i = 0; i < vs.length; i++) if (re.test(vs[i].lang)) { voice = vs[i]; return; }
    }
  }
  if (canSpeak && wanted.length) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

  function toast(msg) {
    var t = $('toast'); if (!t) return;
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('on'); }, 2800);
  }
  function hush() {
    if (canSpeak) speechSynthesis.cancel();
    document.querySelectorAll('.playing').forEach(function (c) { c.classList.remove('playing'); });
  }
  // Speaks one phrase or several in order. `el` glows while it plays; `each`
  // (optional) lines up with `texts` so every line glows during its own turn.
  function say(texts, el, rate, each) {
    if (!wanted.length) return;
    if (!canSpeak) { if (!warned) { warned = true; toast('Audio is not supported in this browser.'); } return; }
    if (!voice) pickVoice();
    if (!voice) { if (!warned) { warned = true; toast('No ' + (D.title || '') + ' voice is installed on this device.'); } return; }
    hush();
    [].concat(texts).forEach(function (text, i, all) {
      var u = new SpeechSynthesisUtterance(plain(text));
      u.voice = voice; u.lang = voice.lang; u.rate = rate || D.rate || .85;
      var own = each && each[i], last = el && i === all.length - 1;
      if (own) u.onstart = function () { own.classList.add('playing'); };
      if (own || last) u.onend = u.onerror = function () {
        if (own) own.classList.remove('playing');
        if (last) el.classList.remove('playing');
      };
      speechSynthesis.speak(u);
    });
    if (el) el.classList.add('playing');
  }

  /* ── Morse player (Web Audio; only used by the Morse course) ──────────── */
  var actx = null, mstop = null;
  function morseText(t) {
    return t.toUpperCase().split(' ').map(function (w) {
      return w.split('').map(function (c) { return (D.morse[c] || '').replace(/\./g, '·').replace(/-/g, '–'); }).join('  ');
    }).join('   /   ');
  }
  function morsePlay(box) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return toast('Audio is not supported in this browser.');
    actx = actx || new AC();
    if (actx.state === 'suspended') actx.resume();
    if (mstop) mstop();
    var u = 1.2 / (+box.dataset.wpm || 15), t = actx.currentTime + .05;
    var osc = actx.createOscillator(), g = actx.createGain();
    osc.frequency.value = 600; g.gain.value = 0; osc.connect(g); g.connect(actx.destination); osc.start();
    box.querySelector('input').value.toUpperCase().split('').forEach(function (ch) {
      if (ch === ' ') { t += u * 4; return; }          // 3 already added after the last letter: 7 in all
      var c = D.morse[ch]; if (!c) return;
      c.split('').forEach(function (sym) {
        var d = (sym === '.' ? 1 : 3) * u;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.25, t + .005);
        g.gain.setValueAtTime(.25, t + d - .005); g.gain.linearRampToValueAtTime(0, t + d);
        t += d + u;
      });
      t += u * 2;
    });
    osc.stop(t + .1);
    mstop = function () { try { osc.stop(); } catch (e) {} mstop = null; };
  }

  /* ── content blocks ───────────────────────────────────────────────────── */
  var ruleNo = 0;
  function list(tag, items) {
    return '<' + tag + '>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</' + tag + '>';
  }
  function block(b) {
    var k = b[0], r = b.slice(1);
    switch (k) {
      case 'ul': case 'ol': return list(k, r);
      case 'h': return '<h4>' + r[0] + '</h4>';
      case 'tb':
        return '<div class="tbl"><table class="gt"><tr>' + r[0].map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>' +
          r.slice(1).map(function (row) {
            return '<tr>' + row.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
          }).join('') + '</table></div>';
      case 'note': return '<div class="note"><b>' + r[0] + '</b>' + r[1] + '</div>';
      case 'warn': return '<div class="note warn"><b>' + r[0] + '</b>' + r[1] + '</div>';
      case 'tip': return '<div class="note tip2"><b>' + r[0] + '</b>' + r[1] + '</div>';
      case 'fig': return '<figure class="fig">' + r[0] + (r[1] ? '<figcaption>' + r[1] + '</figcaption>' : '') + '</figure>';
      case 'eq': return '<pre class="eq">' + esc(r[0]) + '</pre>';
      case 'code': return '<pre class="eq code">' + esc(r[0]) + '</pre>';
      case 'kv':
        return '<div class="tips">' + r.map(function (t) {
          return '<div class="tip"><b>' + t[0] + '</b><p>' + t[1] + '</p></div>';
        }).join('') + '</div>';
      case 'tl':
        return '<div class="timeline">' + r.map(function (t) {
          return '<div class="tl"><b>' + t[0] + '</b><span>' + t[1] + '</span></div>';
        }).join('') + '</div>';
      case 'x':
        return '<div class="gx-list">' + r.map(function (x) {
          return '<button type="button" class="gx" data-say="' + esc(plain(x[0])) + '"><b>' + x[0] + '</b>' +
            (x[1] ? '<i>' + x[1] + '</i>' : '') + (x[2] ? '<span>' + x[2] + '</span>' : '') + (wanted.length ? SPK : '') + '</button>';
        }).join('') + '</div>';
      case 'words':
        return '<div class="wgrid">' + r.map(function (w) {
          return '<article class="wcard"><button type="button" class="w-main" data-say="' + esc(w[0]) + '">' +
            '<div class="w-row"><span class="w-ru">' + w[0] + '</span><span style="display:flex;align-items:center">' +
            '<span class="w-tag">' + w[1] + '</span>' + (wanted.length ? SPK : '') + '</span></div>' +
            '<div class="w-pr mono">' + w[2] + '</div><div class="w-en">' + w[3] + '</div></button>' +
            (w[4] ? '<div class="w-ex"><div><span class="en" style="font-style:italic">' + w[4] + '</span>' +
              (w[5] ? '<span class="pr" style="font-family:inherit">' + w[5] + '</span>' : '') + '</div></div>' : '') +
            '</article>';
        }).join('') + '</div>';
      case 'morse':
        return '<div class="morse-box" data-wpm="15"><input class="w-search" style="width:100%;max-width:520px" value="SOS" maxlength="80" aria-label="Text to play as Morse"/>' +
          '<pre class="eq mcode" style="margin-top:10px">' + morseText('SOS') + '</pre>' +
          '<div class="xc-play" style="align-items:center"><button type="button" class="btn btn-white btn-sm" data-m="play">▶ Play</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-m="stop">■ Stop</button>' +
          '<div class="seg"><button type="button" data-wpm="8">8 WPM</button><button type="button" class="on" data-wpm="15">15 WPM</button>' +
          '<button type="button" data-wpm="20">20 WPM</button></div></div></div>';
      case 'rule':
        ruleNo++;
        return '<details class="rule"><summary><span class="r-num mono">' + pad(ruleNo) + '</span>' +
          '<span class="r-t"><b>' + r[0] + '</b>' + (r[3] ? '<i>' + r[3] + '</i>' : '') + '</span>' +
          '<span class="r-sum">' + r[1] + '</span>' + CHEV + '</summary>' +
          '<div class="r-body">' + inner(r[2]) + '</div></details>';
    }
    return '';
  }
  // Blocks with no panels: used inside collapsible rules.
  function inner(bs) {
    return bs.map(function (b) {
      if (typeof b !== 'string') return block(b);
      return b.slice(0, 3) === '## ' ? '<h4>' + b.slice(3) + '</h4>' : '<p>' + b + '</p>';
    }).join('');
  }
  // Top-level blocks: "## Title | subtitle" opens a new panel.
  function blocks(bs) {
    var h = '', open = false;
    function close() { if (open) { h += '</div></section>'; open = false; } }
    (bs || []).forEach(function (b) {
      if (typeof b === 'string' && b.slice(0, 3) === '## ') {
        close();
        var t = b.slice(3).split(' | ');
        h += '<section class="panel"><h3>' + t[0] + '</h3>' + (t[1] ? '<p>' + t[1] + '</p>' : '') + '<div class="prose">';
        open = true; return;
      }
      if (b[0] === 'rule') { close(); h += block(b); return; }
      if (!open) { h += '<section class="panel"><div class="prose" style="margin-top:0">'; open = true; }
      h += typeof b === 'string' ? '<p>' + b + '</p>' : block(b);
    });
    close();
    return h;
  }
  function hero(n, L) {
    return '<section class="hero"><div class="eyebrow">Lesson ' + n + (L.level ? ' · ' + L.level : '') + '</div>' +
      '<h2>' + L.h + '</h2>' + (L.intro || []).map(function (p) { return '<p>' + p + '</p>'; }).join('') +
      (L.facts ? '<div class="facts">' + L.facts.map(function (f, i) {
        return '<span class="pill">' + (i ? '' : '<span class="dot" style="color:var(--accent)"></span>') + f + '</span>';
      }).join('') + '</div>' : '') + '</section>';
  }
  function sources(extra) {
    var all = (extra || []).concat(D.sources || []);
    if (!all.length) return '';
    return '<section class="panel src"><h3>Sources</h3>' +
      '<p>Where the facts on this page come from, and where to go deeper.</p><ol>' +
      all.map(function (s) {
        return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + s[0] + '</a>' +
          (s[2] ? ' <span>· ' + s[2] + '</span>' : '') + '</li>';
      }).join('') + '</ol></section>';
  }

  /* ── multiple-choice quiz. items: [question, [options], correctIndex, why] ─ */
  function quiz(root, items, title, sub) {
    if (!items || !items.length) return;
    var box = document.createElement('section');
    box.className = 'panel';
    box.innerHTML = '<h3>' + (title || 'Quick check') + '</h3><p>' + (sub || 'See what stuck. Wrong answers show the reason.') + '</p>' +
      '<div class="q-wrap"><div class="q-prompt"></div><div class="q-text"></div><div class="q-opts"></div>' +
      '<div class="q-foot"><span class="q-feedback"></span><span class="q-score"></span></div></div>';
    root.appendChild(box);
    var qs = function (c) { return box.querySelector(c); };
    var deck, qi, score;
    function start() { deck = shuffle(items.slice()).slice(0, 10); qi = 0; score = 0; ask(); }
    function ask() {
      var q = deck[qi], order = shuffle(q[1].map(function (_, i) { return i; }));
      qs('.q-prompt').textContent = 'Question ' + (qi + 1) + ' of ' + deck.length;
      qs('.q-text').innerHTML = q[0];
      qs('.q-opts').innerHTML = order.map(function (i) {
        return '<button type="button" class="q-opt" data-ok="' + (i === q[2] ? 1 : 0) + '">' + q[1][i] + '</button>';
      }).join('');
      qs('.q-feedback').textContent = '';
      qs('.q-score').innerHTML = 'Score <b>' + score + '</b> / ' + qi;
    }
    qs('.q-opts').addEventListener('click', function (e) {
      var b = e.target.closest('.q-opt'); if (!b || b.disabled) return;
      var q = deck[qi], ok = b.dataset.ok === '1';
      if (ok) score++;
      box.querySelectorAll('.q-opt').forEach(function (o) {
        o.disabled = true;
        if (o.dataset.ok === '1') o.classList.add('right'); else if (o === b) o.classList.add('wrong');
      });
      qi++;
      var done = qi >= deck.length;
      qs('.q-score').innerHTML = 'Score <b>' + score + '</b> / ' + qi;
      qs('.q-feedback').innerHTML = (ok ? 'Correct. ' : 'Not quite. ') + (q[3] || '') +
        ' <button type="button" class="btn btn-ghost btn-sm" style="margin-left:6px">' + (done ? 'Try again' : 'Next') + '</button>';
      qs('.q-feedback button').addEventListener('click', function () { done ? start() : ask(); });
    });
    start();
  }

  /* ── course lessons ───────────────────────────────────────────────────── */
  function buildCourse(root, L, n) {
    ruleNo = 0;
    root.innerHTML = hero(n, L) + blocks(L.b);
    quiz(root, L.quiz);
    root.insertAdjacentHTML('beforeend', pager(n) + sources(L.sources));
  }
  function pager(n) {
    var prev = LESSONS[n - 2], next = LESSONS[n];
    return '<div class="lesson-nav">' +
      (prev ? '<a class="btn btn-ghost btn-sm" href="#' + prev.id + '">← ' + prev.tab + '</a>' : '<span></span>') +
      (next ? '<a class="btn btn-white btn-sm" href="#' + next.id + '">' + next.tab + ' →</a>' : '<a class="btn btn-ghost btn-sm" href="learn.html">All courses</a>') +
      '</div>';
  }

  /* ── language lesson 1: letters / sounds ──────────────────────────────── */
  // card: [glyph, small, tag, sounds-like, sample word, its pronunciation, meaning, group, name, name said]
  function buildSounds(root, S, n) {
    var cards = S.cards, groups = S.groups || [];
    function card(c) {
      return '<button type="button" class="card g-' + c[7] + '" data-i="' + cards.indexOf(c) + '">' +
        '<div class="top"><div class="glyph">' + c[0] + (c[1] ? '<small>' + c[1] + '</small>' : '') + '</div>' +
        '<div class="right"><span class="tr mono">' + esc(c[2]) + '</span></div></div>' +
        (c[8] ? '<div class="name">Name: <b>' + c[8] + '</b>' + (c[9] ? ' · ' + esc(c[9]) : '') + '</div>' : '') +
        '<div class="like">' + c[3] + '</div>' +
        (c[4] ? '<div class="ex"><b>' + c[4] + '</b><span><i class="mono">' + esc(c[5]) + '</i> · ' + esc(c[6]) + '</span></div>' : '') +
        (wanted.length ? SPK : '') + '</button>';
    }
    var h = hero(n, S) + (S.hint ? '<div class="bar"><span class="hint">' + S.hint + '</span></div>' : '');
    var colors = ['familiar', 'false', 'shapes', 'new', 'signs'];
    groups.forEach(function (g, i) {
      var ls = cards.filter(function (c) { return c[7] === g[0]; });
      h += '<section class="group g-' + colors[i % 5] + '"><div class="group-head"><span class="idx mono">' + pad(i + 1) + '</span>' +
        '<h3>' + g[1] + '</h3><span class="n">' + ls.length + '</span></div><p>' + g[2] + '</p>' +
        '<div class="grid">' + ls.map(card).join('') + '</div></section>';
    });
    if (S.tips) {
      h += '<section class="panel"><h3>' + (S.tipsTitle || 'Rules that make it click') + '</h3><div class="tips">' +
        S.tips.map(function (t) { return '<div class="tip"><b>' + t[0] + '</b><p>' + t[1] + '</p></div>'; }).join('') + '</div></section>';
    }
    if (S.practice) {
      h += '<section class="panel"><h3>Reading practice</h3><p>' + (S.practiceNote || 'Sound each one out, then tap to check.') + '</p><div class="words">' +
        S.practice.map(function (w, i) {
          return '<button type="button" class="word" data-i="' + i + '"><b>' + w[0] + '</b><span>Tap to reveal</span></button>';
        }).join('') + '</div></section>';
    }
    h += blocks(S.b);
    root.innerHTML = h;
    root.addEventListener('click', function (e) {
      var c = e.target.closest('.card'), w;
      if (c) { var x = cards[+c.dataset.i]; say(x[4] ? (x[8] ? [x[8], x[4]] : [x[4]]) : [x[8] || x[0]], c); return; }
      if ((w = e.target.closest('.word'))) {
        var p = S.practice[+w.dataset.i];
        w.classList.add('shown'); w.querySelector('span').textContent = p[1] + ' · ' + p[2]; say(p[0]);
      }
    });
    var pool = cards.filter(function (c) { return !c[11]; });
    quiz(root, pool.map(function (c) {
      var seen = {}, lab = function (o) { return o[2] + (o[3] ? ' · ' + plain(o[3]) : ''); }, opts = [lab(c)];
      seen[c[2]] = 1;
      shuffle(pool.slice()).forEach(function (o) {
        if (opts.length < 4 && !seen[o[2]]) { seen[o[2]] = 1; opts.push(lab(o)); }
      });
      return ['<span style="font-size:44px;line-height:1.2">' + c[0] + '</span>', opts, 0,
        c[4] ? esc(c[4]) + ' = ' + esc(c[6]) + '.' : ''];
    }), 'Quick check', S.quizNote || 'What sound does this make?');
    root.insertAdjacentHTML('beforeend', pager(n) + sources());
  }

  /* ── language lesson 2: core words ────────────────────────────────────── */
  // word: [word, part of speech, pronunciation, English, example, its pronunciation, its English, category]
  function buildWords(root, W, n) {
    var list = W.list, cat = 'all';
    root.innerHTML = hero(n, { h: W.h, intro: W.intro, level: W.level,
        facts: [list.length + ' words', W.cats.length + ' topics', 'An example sentence for every word'] }) +
      '<div class="w-tools"><input class="w-search" type="search" placeholder="Search ' + esc(D.title) + ' or English…" autocomplete="off"/>' +
      '<label class="w-toggle"><input type="checkbox"/> Hide English (tap a card to reveal)</label></div>' +
      '<div class="cats"><button type="button" class="cat on" data-cat="all">All<i>' + list.length + '</i></button>' +
      W.cats.map(function (c) {
        return '<button type="button" class="cat" data-cat="' + c[0] + '">' + esc(c[1]) + '<i>' +
          list.filter(function (w) { return w[7] === c[0]; }).length + '</i></button>';
      }).join('') + '</div><div class="w-count"></div><div class="wgrid"></div>';
    var grid = root.querySelector('.wgrid'), search = root.querySelector('.w-search');
    function wcard(w) {
      return '<article class="wcard" data-i="' + list.indexOf(w) + '">' +
        '<button type="button" class="w-main" data-s="0"><div class="w-row"><span class="w-ru">' + w[0] + '</span>' +
        '<span style="display:flex;align-items:center"><span class="w-tag">' + esc(w[1]) + '</span>' + SPK + '</span></div>' +
        '<div class="w-pr mono">' + esc(w[2]) + '</div><div class="w-en">' + esc(w[3]) + '</div></button>' +
        '<button type="button" class="w-ex" data-s="4"><div><span class="ru">' + w[4] + '</span>' +
        '<span class="pr mono">' + esc(w[5]) + '</span><span class="en">' + esc(w[6]) + '</span></div>' + SPK + '</button></article>';
    }
    function render() {
      var q = search.value.trim().toLowerCase();
      var out = list.filter(function (w) {
        if (cat !== 'all' && w[7] !== cat) return false;
        return !q || (w[0] + '|' + w[2] + '|' + w[3]).toLowerCase().indexOf(q) >= 0;
      });
      root.querySelector('.w-count').textContent = out.length === list.length ? 'Showing all ' + out.length + ' words' :
        'Showing ' + out.length + ' of ' + list.length + ' words';
      grid.innerHTML = out.length ? out.map(wcard).join('') :
        '<div class="w-empty" style="grid-column:1/-1">No words match "' + esc(search.value) + '".</div>';
    }
    root.querySelector('.cats').addEventListener('click', function (e) {
      var b = e.target.closest('.cat'); if (!b) return;
      cat = b.dataset.cat;
      root.querySelectorAll('.cat').forEach(function (x) { x.classList.toggle('on', x === b); });
      render();
    });
    search.addEventListener('input', render);
    root.querySelector('.w-toggle input').addEventListener('change', function () {
      grid.classList.toggle('hide-en', this.checked);
      grid.querySelectorAll('.revealed').forEach(function (c) { c.classList.remove('revealed'); });
    });
    grid.addEventListener('click', function (e) {
      var b = e.target.closest('[data-s]'); if (!b) return;
      var c = b.closest('.wcard');
      c.classList.add('revealed'); say(list[+c.dataset.i][+b.dataset.s], c);
    });
    render();
    quiz(root, list.map(function (w) {
      var opts = [esc(w[3])];
      shuffle(list.slice()).forEach(function (o) { if (opts.length < 4 && o[3] !== w[3]) opts.push(esc(o[3])); });
      return ['<span style="font-size:26px">' + w[0] + '</span>', opts, 0, esc(w[2]) + '.'];
    }), 'Word quiz', 'Ten random words. Pick the meaning.');
    root.insertAdjacentHTML('beforeend', pager(n) + sources());
  }

  /* ── language lesson 3: grammar ───────────────────────────────────────── */
  // unit: { t, p, rules:[ [title, native title, summary, [blocks]] ] }
  function buildGrammar(root, G, n) {
    ruleNo = 0;
    var count = 0, h = '';
    G.units.forEach(function (u, i) {
      h += '<div class="unit"><span>Unit ' + (i + 1) + '</span><h3>' + u.t + '</h3>' + (u.p ? '<p>' + u.p + '</p>' : '') + '</div>';
      u.rules.forEach(function (r) { count++; h += block(['rule', r[0], r[2], r[3], r[1]]); });
    });
    root.innerHTML = hero(n, { h: G.h, intro: G.intro, level: G.level,
        facts: [count + ' rules', G.units.length + ' units', 'Tap any example to hear it'] }) +
      '<div class="g-tools"><span class="hint">Open a rule to read it. Each one stands on its own.</span>' +
      '<div class="btns"><button type="button" class="btn btn-ghost btn-sm" data-all="1">Expand all</button>' +
      '<button type="button" class="btn btn-ghost btn-sm" data-all="0">Collapse all</button></div></div>' + h;
    root.querySelector('.g-tools').addEventListener('click', function (e) {
      var b = e.target.closest('[data-all]'); if (!b) return;
      root.querySelectorAll('.rule').forEach(function (r) { r.open = b.dataset.all === '1'; });
    });
    root.insertAdjacentHTML('beforeend', pager(n) + sources());
  }

  /* ── language lesson 4: reading and pronunciation ─────────────────────── */
  // excerpt: { ref, title, lvl, ctx, lines:[[text, pronunciation, English]], traps:[], vocab:[[word, pron, meaning]] }
  var LVL = { 1: 'Gentle', 2: 'Moderate', 3: 'Challenging' };
  function buildReading(root, R, n) {
    var rate = D.rate || .85, X = R.excerpts;
    var h = hero(n, { h: R.h, intro: R.intro, level: R.level,
      facts: [X.length + ' texts', 'Pronunciation and translation on every line', 'Tap a line to hear it'] });
    if (R.rules) {
      h += '<section class="panel"><h3>' + (R.rulesTitle || 'How it is really pronounced') + '</h3><div class="pr-rules">' +
        R.rules.map(function (r, i) {
          return '<div class="pr-rule"><b><i class="mono">' + pad(i + 1) + '</i>' + r[0] + '</b><p>' + r[1] + '</p>' +
            (r[2] ? '<div class="pair">' + r[2].map(function (p) {
              return '<button type="button" data-say="' + esc(p[0]) + '">' + p[0] + '<em>' + esc(p[1]) + '</em></button>';
            }).join('') + '</div>' : '') + '</div>';
        }).join('') + '</div></section>';
    }
    h += '<div class="r-tools"><div class="seg">' +
      '<button type="button" data-rate=".6">Slow</button><button type="button" class="on" data-rate="' + rate + '">Normal</button>' +
      '<button type="button" data-rate="1">Native</button></div>' +
      '<label class="w-toggle"><input type="checkbox" data-t="no-pr" checked/> Pronunciation</label>' +
      '<label class="w-toggle"><input type="checkbox" data-t="no-en" checked/> English</label></div><div class="x-list">' +
      X.map(function (x, i) {
        return '<details class="rule xc" data-x="' + i + '"><summary><span class="r-num mono">' + pad(i + 1) + '</span>' +
          '<span class="r-t"><b>' + esc(x.title) + '</b><i>' + esc(x.ref) + '</i></span>' +
          '<span class="r-sum">' + esc(plain(x.lines[0][0]).slice(0, 90)) + '…</span>' +
          '<span class="xc-badges"><span class="lvl lvl-' + x.lvl + '">' + LVL[x.lvl] + '</span></span>' + CHEV + '</summary>' +
          '<div class="xc-body"><p class="xc-ctx">' + x.ctx + '</p>' +
          '<div class="xc-text">' + x.lines.map(function (l) { return l[0]; }).join(D.join === '' ? '' : ' ') + '</div>' +
          '<div class="xc-play"><button type="button" class="btn btn-white btn-sm" data-play="all">▶ Listen to the passage</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-play="stop">■ Stop</button></div>' +
          '<h5>Line by line · tap to hear</h5><div class="lines">' + x.lines.map(function (l, j) {
            return '<button type="button" class="line" data-l="' + j + '"><span class="ru">' + l[0] + '</span>' +
              '<span class="pr">' + esc(l[1]) + '</span><span class="en">' + esc(l[2]) + '</span>' + SPK + '</button>';
          }).join('') + '</div>' +
          (x.traps ? '<h5>Watch out for</h5><ul class="traps">' + x.traps.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' : '') +
          (x.vocab ? '<h5>Key vocabulary</h5><div class="vocab">' + x.vocab.map(function (v) {
            return '<button type="button" class="voc" data-say="' + esc(v[0]) + '"><b>' + v[0] + '</b><i>' + esc(v[1]) + '</i><span>' + esc(v[2]) + '</span></button>';
          }).join('') + '</div>' : '') + '</div></details>';
      }).join('') + '</div>';
    root.innerHTML = h;
    var xl = root.querySelector('.x-list');
    xl.addEventListener('click', function (e) {
      var d = e.target.closest('.xc'), b; if (!d) return;
      var x = X[+d.dataset.x];
      if ((b = e.target.closest('[data-play]'))) {
        if (b.dataset.play === 'stop') return hush();
        say(x.lines.map(function (l) { return l[0]; }), null, rate, [].slice.call(d.querySelectorAll('.line')));
      } else if ((b = e.target.closest('.line'))) say(x.lines[+b.dataset.l][0], b, rate);
    });
    root.querySelector('.r-tools').addEventListener('click', function (e) {
      var b = e.target.closest('[data-rate]'); if (!b) return;
      rate = +b.dataset.rate;
      root.querySelectorAll('[data-rate]').forEach(function (o) { o.classList.toggle('on', o === b); });
    });
    root.querySelectorAll('[data-t]').forEach(function (c) {
      c.addEventListener('change', function () { xl.classList.toggle(c.dataset.t, !c.checked); });
    });
    root.insertAdjacentHTML('beforeend', pager(n) + sources());
  }

  /* ── shell: tabs, hash routing, lazy build ────────────────────────────── */
  var LESSONS = D.kind === 'lang'
    ? [{ id: 'sounds', tab: D.sounds.tab, build: function (r, n) { buildSounds(r, D.sounds, n); } },
       { id: 'words', tab: D.words.tab, build: function (r, n) { buildWords(r, D.words, n); } },
       { id: 'grammar', tab: D.grammar.tab, build: function (r, n) { buildGrammar(r, D.grammar, n); } },
       { id: 'reading', tab: D.reading.tab, build: function (r, n) { buildReading(r, D.reading, n); } }]
    : D.lessons.map(function (L) { return { id: L.id, tab: L.tab, build: function (r, n) { buildCourse(r, L, n); } }; });

  var wrap = $('wrap'), built = {};
  wrap.innerHTML = '<nav class="lessons" aria-label="Lessons">' + LESSONS.map(function (L, i) {
    return '<button type="button" class="ls" data-lesson="' + L.id + '">Lesson ' + (i + 1) + ' · ' + L.tab + '</button>';
  }).join('') + '</nav>' + LESSONS.map(function (L) { return '<div id="lesson-' + L.id + '" hidden></div>'; }).join('');

  function show() {
    var id = location.hash.slice(1), n = 0;
    LESSONS.forEach(function (L, i) { if (L.id === id) n = i; });
    var L = LESSONS[n];
    if (!built[L.id]) { built[L.id] = 1; L.build($('lesson-' + L.id), n + 1); }
    LESSONS.forEach(function (o) { $('lesson-' + o.id).hidden = o !== L; });
    wrap.querySelectorAll('.ls').forEach(function (b) {
      var on = b.dataset.lesson === L.id;
      b.classList.toggle('on', on); b.setAttribute('aria-current', on ? 'page' : 'false');
    });
    hush();
    document.title = 'Learn ' + D.title + ' · ' + L.tab;
    $('scroll').scrollTop = 0;
  }
  wrap.addEventListener('click', function (e) {
    var b = e.target.closest('.ls'), s;
    if (b) { location.hash = b.dataset.lesson; return; }
    var m = e.target.closest('.morse-box');
    if (m) {
      var mb = e.target.closest('[data-m],.seg [data-wpm]'); if (!mb) return;
      if (mb.dataset.wpm) {
        m.dataset.wpm = mb.dataset.wpm;
        m.querySelectorAll('.seg button').forEach(function (o) { o.classList.toggle('on', o === mb); });
      } else if (mb.dataset.m === 'play') morsePlay(m); else if (mstop) mstop();
      return;
    }
    // any tappable example outside the lesson-specific handlers
    if ((s = e.target.closest('.gx,.voc,.pair button,.wgrid .w-main[data-say]')) && s.dataset.say) say(s.dataset.say, s.closest('.wcard') || s);
  });
  wrap.addEventListener('input', function (e) {
    var m = e.target.closest('.morse-box');
    if (m) m.querySelector('.mcode').textContent = morseText(e.target.value);
  });
  addEventListener('hashchange', show);
  var burger = $('burger');
  if (burger) burger.addEventListener('click', function () { window.auraSidebar && window.auraSidebar.toggleMobile(); });
  show();
})();
