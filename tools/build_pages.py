#!/usr/bin/env python3
"""Generates the Learn page shells (learn-<id>.html) and the catalog (learn.html).

The lesson content itself lives in assets/learn/<id>.js and is rendered in the
browser by assets/learn.js, so adding a course is: write the data file, add a
row to COURSES below, run `python3 tools/build_pages.py`, and add the link to
the NAV array in assets/sidebar.js.
"""
import os, html
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SUPA = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.119.0/dist/umd/supabase.min.js"

# (id, title, header note, group, lessons, colour, one-line description)
COURSES = [
 ("russian",  "Russian",  "Русский язык", "lang", 4, "#00ffa3", "Cyrillic, core words, 36 grammar rules, and Crime and Punishment in the original."),
 ("spanish",  "Spanish",  "Español",      "lang", 4, "#f5a623", "Sounds and spelling, core words, grammar, and Don Quixote line by line."),
 ("french",   "French",   "Français",     "lang", 4, "#38bdf8", "Silent letters and nasal vowels, core words, grammar, and Voltaire and La Fontaine."),
 ("german",   "German",   "Deutsch",      "lang", 4, "#a78bfa", "Umlauts and long words, core words, cases and word order, and Kafka and Goethe."),
 ("japanese", "Japanese", "日本語",        "lang", 4, "#f472b6", "Hiragana and katakana, core words, particles and verbs, and Soseki and Basho."),
 ("mandarin", "Mandarin", "普通话",        "lang", 4, "#f87171", "Pinyin and the four tones, core words, sentence patterns, and classical lines."),
 ("english",  "Advanced English", "Rare words worth knowing", "lang", 4, "#c9b87a", "How to decode long words from their roots, then 120 uncommon words that earn their place."),
 ("algebra",      "Advanced Algebra", "From equations to matrices", "know", 4, "#38bdf8", "Functions, polynomials, exponentials and logs, complex numbers, matrices."),
 ("cryptography", "Cryptography",     "Codes, keys and proofs",     "know", 4, "#00ffa3", "From Caesar shifts to AES, public keys, hashes and what quantum computers change."),
 ("morse",        "Morse Code",       "Dots and dashes",            "know", 4, "#f5a623", "The full code, the rhythm rules, the fastest way to learn it, and real procedure."),
 ("physics",      "Physics",          "Basics to advanced",         "know", 5, "#a78bfa", "Motion and forces, energy, waves and heat, electromagnetism, relativity."),
 ("quantum",      "Quantum Mechanics","The rules of the very small","know", 4, "#f472b6", "Quanta, wave functions, uncertainty, spin, entanglement and the Schrödinger equation."),
 ("biology",      "Biology",          "Cells to medicines",         "know", 5, "#00ffa3", "Cells, DNA, energy, evolution, and the fundamentals of how drugs act."),
 ("pharmacology", "Advanced Pharmacology", "Pharmacokinetics in depth", "know", 4, "#38bdf8", "Absorption to excretion, half-life maths, receptors and dose-response, and drug interactions."),
 ("studies",      "How to Read Studies", "Evidence without the spin", "know", 5, "#f5a623", "Study types, p-values and F-values, what makes research reliable, and how numbers get dressed up."),
 ("anatomy",      "Anatomy & Physiology", "How the body is built and run", "know", 4, "#f472b6", "Body systems, muscle and bone, heart and lungs, nerves and hormones."),
 ("chemistry",    "Chemistry",        "Atoms to reactions",         "know", 4, "#a78bfa", "Atoms and the periodic table, bonding, reactions and moles, acids and organic basics."),
 ("nutrition",    "Nutrition Science","What food does",             "know", 4, "#c9b87a", "Energy balance, protein, carbs and fat, micronutrients, and reading nutrition claims."),
 ("cs",           "Computer Science", "How computers think",        "know", 4, "#38bdf8", "Binary and logic, algorithms and Big O, data structures, networks and the web."),
 ("economics",    "Economics & Money","Markets and your wallet",    "know", 4, "#00ffa3", "Supply and demand, inflation and interest, compounding, and how investing works."),
 ("signs",        "Signs & Symbols",  "Other fields",               "other", 5, "#c9b87a", "Numerology and gematria, sacred geometry, alchemy, Gnosticism and metaphysics, Freemasonry."),
]
GROUPS = [
 ("lang",  "Part 1", "Languages", "Each language runs in four lessons: sounds, core words, grammar, then real texts read line by line."),
 ("know",  "Part 2", "Knowledge", "Short courses that start from zero and climb. Four or five lessons each, a quick check at the end of every lesson, sources at the bottom."),
 ("other", "Part 3", "Other fields", "Symbolic and esoteric traditions, taught as history: what each one claims, where it came from, and how to recognise its signs."),
]
BURGER = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-width="2"/></svg>'

def head(title, desc, file, extra=""):
    t, d = html.escape(title), html.escape(desc, quote=True)
    return f'''<!DOCTYPE html>
<html class="h-full" lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="preload" href="{SUPA}" as="script"/>
<link rel="preconnect" href="https://iowxqmkgnmhrccuaqson.supabase.co" crossorigin/>
<title>{t}</title>
<meta name="description" content="{d}"/>
<meta name="robots" content="noindex, nofollow"/>
<meta name="theme-color" content="#060606"/>
<link rel="canonical" href="https://utopoly.com/{file}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Utopoly"/>
<meta property="og:url" content="https://utopoly.com/{file}"/>
<meta property="og:title" content="{t} · Utopoly"/>
<meta property="og:description" content="{d}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="{t} · Utopoly"/>
<meta name="twitter:description" content="{d}"/>
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg"/>
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png"/>
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="assets/aura-ui.css" rel="stylesheet"/>
<link href="assets/learn.css" rel="stylesheet"/>
{extra}</head>
<body class="dot-grid" data-page="app">

<div class="shell">
<script src="assets/sidebar.js"></script>

<main>
'''
TAIL = f'''<script src="{SUPA}"></script>
<script src="assets/env.js"></script>
<script src="assets/supabaseClient.js"></script>
<script src="assets/auth.js"></script>
</body>
</html>
'''
def header(h1, note, back=True):
    return f'''  <header class="hdr">
    <div style="display:flex;align-items:center;gap:8px;min-width:0">
      <button class="burger" id="burger" aria-label="Menu">{BURGER}</button>
      <h1>{h1}</h1>
      <span class="when">{note}</span>
    </div>
    {'<a class="back" href="learn.html">All courses</a>' if back else ''}
  </header>
'''
def course_page(c):
    cid, title, note, group, n, colour, desc = c
    file = f"learn-{cid}.html"
    s = head(f"Learn {title}", f"Learn {title}: {desc}", file)
    s += header(f"Learn · {html.escape(title)}", html.escape(note))
    s += f'''  <div class="scroll" id="scroll"><div class="wrap" id="wrap"></div></div>
</main>
</div>

<div class="toast" id="toast" role="status"></div>

<script src="assets/learn/{cid}.js"></script>
<script src="assets/learn.js"></script>
'''
    return file, s + TAIL

def hub():
    s = head("Learn", "Every Utopoly course in one place: six languages, advanced English, a knowledge catalog and other fields.", "learn.html")
    s += header("Learn", f"{len(COURSES)} courses", back=False)
    s += '  <div class="scroll" id="scroll"><div class="wrap">\n'
    s += '''    <section class="hero" style="margin-top:6px">
      <div class="eyebrow">Catalog</div>
      <h2>Pick something and <span>start at lesson one</span></h2>
      <p>Every course begins at an introductory level and gets harder as it goes. Plain English, short lessons,
        a quick check at the end of each one, and the sources listed at the bottom of the page.</p>
    </section>
'''
    arrow = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
    for gid, part, name, blurb in GROUPS:
        s += f'    <div class="cat-sec"><span>{part}</span><h3>{name}</h3><p>{blurb}</p></div>\n    <div class="cat-grid">\n'
        for cid, title, note, group, n, colour, desc in COURSES:
            if group != gid: continue
            s += (f'      <a class="tile" href="learn-{cid}.html" style="--c:{colour}"><h3>{html.escape(title)}</h3>'
                  f'<p>{html.escape(desc)}</p><span class="n">{n} lessons</span><span class="go">Open {arrow}</span></a>\n')
        s += '    </div>\n'
    s += '''  </div></div>
</main>
</div>
<script>document.getElementById('burger').addEventListener('click',function(){window.auraSidebar&&window.auraSidebar.toggleMobile()});</script>
'''
    return "learn.html", s + TAIL

def sidebar():
    """Rewrites the Learn links in assets/sidebar.js between its two markers."""
    p = os.path.join(ROOT, "assets", "sidebar.js")
    js = open(p, encoding="utf8").read()
    a, b = js.index("/*LEARN-NAV-START*/"), js.index("/*LEARN-NAV-END*/")
    rows = ["        { label:'All courses', href:'learn.html' }"]
    for gid, part, name, blurb in GROUPS:
        mine = [c for c in COURSES if c[3] == gid]
        if not mine: continue
        rows.append("        { head:'%s' }" % name)
        rows += ["        { label:'%s', href:'learn-%s.html' }" % (c[1].replace("'", "\\'"), c[0]) for c in mine]
    js = js[:a] + "/*LEARN-NAV-START*/\n" + ",\n".join(rows) + "\n        " + js[b:]
    open(p, "w", encoding="utf8").write(js)

if __name__ == "__main__":
    # Only courses whose data file exists are published (Russian is hand-written).
    have = lambda c: c[0] == "russian" or os.path.exists(os.path.join(ROOT, "assets", "learn", c[0] + ".js"))
    skipped = [c[0] for c in COURSES if not have(c)]
    COURSES[:] = [c for c in COURSES if have(c)]
    out = [hub()] + [course_page(c) for c in COURSES if c[0] != "russian"]
    for file, s in out:
        open(os.path.join(ROOT, file), "w", encoding="utf8").write(s)
    sidebar()
    print("wrote", len(out), "pages;", "no data file yet for:", ", ".join(skipped) or "none")
