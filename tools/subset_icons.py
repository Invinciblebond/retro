#!/usr/bin/env python3
"""Rebuilds assets/fonts/material-symbols-subset.woff2.

The pages used to download the full Material Symbols font (about 4 MB). This
keeps only the icons the site uses. Run it after adding an icon name that is
not in ICONS below:

    npm install material-symbols          # provides the full font
    pip install fonttools brotli
    python3 tools/subset_icons.py
"""
import os, subprocess, sys
from fontTools.ttLib import TTFont
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "node_modules", "material-symbols", "material-symbols-outlined.woff2")
OUT = os.path.join(ROOT, "assets", "fonts", "material-symbols-subset.woff2")
ICONS = """2d account_balance_wallet account_circle add add_box add_circle arrow_back arrow_downward
arrow_forward arrow_selector_tool arrow_upward article attach_file biotech block bookmark
calendar_today cancel check check_box check_box_outline_blank check_circle chevron_left
chevron_right circle clear_all close cloud_off colorize content_copy dashboard database delete
description device_hub done download drag_indicator edit edit_note error event_note expand_less
expand_more eyebrow favorite filter_list fit_screen flag flip_to_front function grid_view height
help history home image info input insights iron key keyboard_arrow_down keyboard_arrow_up label
language lightbulb linear_scale link list local_fire_department lock login logout menu menu_book
monitor_weight monitoring more_horiz more_vert move notes notifications nutrition open_in_new
palette pan_tool password person priority priority_high progress_activity push_pin
radio_button_unchecked redo refresh remove replay restaurant restaurant_menu route save schedule
science search search_off select settings show_chart sort star star_border sticky_note_2 straight
style sync task_alt timeline title toolbar trending_up tune undo upload verified view_agenda
view_column visibility visibility_off warning zoom_in zoom_out""".split()

font = TTFont(SRC)
rev = {g: chr(c) for c, g in font.getBestCmap().items() if c < 128}
ligs = {}
for lookup in font["GSUB"].table.LookupList.Lookup:
    for st in lookup.SubTable:
        if st.LookupType == 7: st = st.ExtSubTable
        if st.LookupType != 4: continue
        for first, ls in st.ligatures.items():
            for l in ls:
                try: ligs[rev[first] + "".join(rev[c] for c in l.Component)] = l.LigGlyph
                except KeyError: pass
missing = [i for i in ICONS if i not in ligs]
if missing: sys.exit("Unknown icon names: " + ", ".join(missing))
glyphs = sorted({ligs[i] for i in ICONS})
subprocess.check_call(["pyftsubset", SRC, "--unicodes=U+0030-0039,U+0061-007A,U+005F",
    "--glyphs=" + ",".join(glyphs), "--no-layout-closure", "--layout-features=*",
    "--flavor=woff2", "--output-file=" + OUT])
print(len(ICONS), "icons,", os.path.getsize(OUT), "bytes ->", OUT)
