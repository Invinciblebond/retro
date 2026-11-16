# Load-time check, before and after

Measured on 16 November 2026 in headless Chrome, cold cache, logged-in session
stubbed. Both versions were served by the same local server with a bandwidth cap
and per-request delay, and with every third-party file (fonts, Supabase, sql.js,
Chart.js) served from that server, so the only difference between the two runs is
the site itself. Figures are medians of 2 to 5 runs, in milliseconds.

- **First paint** is first-contentful-paint: when something first appears.
- **Loaded** is the window load event: page, styles, scripts and fonts all in.

## Slow mobile connection (1.6 Mbps, 150 ms delay)

| Page | First paint | Loaded | Downloaded |
| --- | --- | --- | --- |
| calorie_tracker.html | 2,288 → 814 | 10,009 → 2,281 | 1,810 KB → 651 KB |
| cycletracker.html | 2,132 → 758 | 9,878 → 2,226 | 1,796 KB → 637 KB |
| History.html | 1,878 → 750 | 9,652 → 2,005 | 1,724 KB → 565 KB |
| Progress.html | 1,008 → 682 | 23,329 → 1,950 | 4,431 KB → 584 KB |
| CainTracker.html | 722 → 626 | 23,087 → 1,888 | 4,410 KB → 564 KB |
| Body.html | 1,150 → 668 | 1,517 → 1,366 | 210 KB → 210 KB |
| learn-russian.html | 456 → 472 | 1,280 → 1,183 | 202 KB → 203 KB |
| Log.html | 542 → 550 | 1,003 → 1,006 | 139 KB → 140 KB |
| index.html | 544 → 524 | 1,022 → 1,042 | 276 KB → 276 KB |

## Fast connection (10 Mbps, 40 ms delay)

| Page | First paint | Loaded |
| --- | --- | --- |
| calorie_tracker.html | 536 → 400 | 1,813 → 468 |
| cycletracker.html | 480 → 404 | 1,778 → 501 |
| History.html | 456 → 360 | 1,761 → 448 |
| Progress.html | 316 → 284 | 4,059 → 391 |
| CainTracker.html | 304 → 304 | 4,023 → 395 |
| Body.html | 276 → 220 | 332 → 305 |
| learn-russian.html | 180 → 184 | 321 → 283 |
| Log.html | 284 → 280 | 280 → 281 |
| index.html | 312 → 284 | 294 → 292 |

New Learn pages on the slow connection: first paint about 480 ms, loaded in about
1.1 s, about 150 KB.

## Where the gain comes from

- The icon font was 4.0 MB (Progress, Planning Boards) or 1.1 MB (calorie, cycle,
  history pages). It is now 88 KB.
- The three Tailwind pages no longer download and run the Tailwind compiler.
- sql.js and Chart.js no longer block the first paint.

Log.html, index.html and learn-russian.html had none of those problems, so they
are unchanged within measurement noise (about ±40 ms).

## Limits of this test

- The real Tailwind CDN script could not be downloaded in the test environment. A
  stand-in file of the same size was used. It is downloaded but does no work, so
  the real "before" pages were slower than shown: the real script also compiled
  the CSS in the browser, and the page stayed unstyled until it finished.
- Everything came from one server over HTTP/1.1. The live site talks to five
  outside hosts, each needing its own connection, and four of those requests are
  now gone or deferred. That saving is not captured here.
- These are lab numbers. For field numbers, run Lighthouse or WebPageTest against
  the deployed site before and after pushing.
