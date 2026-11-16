# Utopoly build notes

Nothing here is needed to run the site. These are the scripts that produced the
generated files, kept so they can be re-run. Before and after load times are in
`tools/PERFORMANCE.md`.

## Tailwind (assets/tw.css)

`calorie_tracker.html`, `cycletracker.html` and `History.html` used to load the
Tailwind compiler from a CDN and build their CSS in the browser on every visit.
They now load `assets/tw.css`, compiled once from the same config.

**If you add a Tailwind class to one of those three pages that was not used
before, rebuild the file or the class will have no effect:**

    npm install tailwindcss@3.4.17 @tailwindcss/forms @tailwindcss/container-queries
    echo '@tailwind base;@tailwind components;@tailwind utilities;' > tw.in.css
    npx tailwindcss -c tools/tailwind.config.js -i tw.in.css -o assets/tw.css --minify

`assets/tw.css` must stay the last stylesheet in `<head>`, which is where the
CDN version injected its styles.

## Icons (assets/fonts/material-symbols-subset.woff2)

The icon font is cut down from 4 MB to under 100 KB by keeping only the icons
in use. To use a new icon, add its name to `ICONS` in `tools/subset_icons.py`
and run the script (instructions at the top of the file).

## Learn pages

- `assets/learn.js` renders a course from `window.LEARN`.
- `assets/learn.css` styles the generated pages. It began as a copy of the styles
  inside `learn-russian.html`; a visual change to one should be made in both.
- `assets/learn/<id>.js` holds one course.
- `tools/build_pages.py` writes `learn.html`, every `learn-<id>.html` shell and
  the Learn links in `assets/sidebar.js`. A course is only published when its
  data file exists. `learn-russian.html` is hand-written and left alone.

To add a course: write `assets/learn/<id>.js`, add a row to `COURSES` in
`tools/build_pages.py`, run `python3 tools/build_pages.py`.

### Content blocks (kind: 'course')

A lesson's `b` array is a list of blocks. A plain string is a paragraph; a
string starting with `## ` opens a new panel (`## Title | subtitle`).

| Block | Renders |
| --- | --- |
| `['ul', ...items]`, `['ol', ...items]` | list |
| `['tb', [headings], [row], ...]` | table |
| `['kv', [term, text], ...]` | grid of small cards |
| `['tl', [label, text], ...]` | timeline |
| `['note' \| 'warn' \| 'tip', label, html]` | callout |
| `['eq', text]`, `['code', text]` | formula or code, monospaced |
| `['fig', svg, caption]` | figure |
| `['x', [text, pronunciation, meaning], ...]` | tappable examples |
| `['words', [word, part of speech, pronunciation, meaning, example], ...]` | vocabulary cards |
| `['rule', title, summary, [blocks]]` | collapsible section |

`quiz` is a list of `[question, [options], indexOfCorrect, explanation]`.
`sources` is a list of `[title, url, note]`, shown under every lesson.
Language courses (`kind: 'lang'`) use four fixed lessons; see
`assets/learn/spanish.js` for the shape.
