#!/usr/bin/env python3
"""One-off image pre-sizing for the static export.

With next.config `images.unoptimized: true`, every source pixel ships to the
browser verbatim — so oversized sources translate 1:1 into wasted bytes.
Idempotent: files already at/below target are skipped.
"""
import os
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (path, max_width_px)
TARGETS = [
    ("assets/badges/nmsdc-badge.png", 320),   # rendered 160px → 2x retina
    ("clients/atr-international.png", 300),
    ("clients/cec-experts.jpg", 300),
    ("clients/tenth-revolution.png", 300),
    ("clients/mouri-tech.png", 300),
    ("clients/interrait.png", 300),
    ("clients/ascii-group.png", 300),
    ("clients/radiant-systems.png", 300),
    ("clients/enavate.png", 300),
]

# derived variant: (source, dest, max_width)
DERIVED = [
    ("vibrant-logo-full.png", "vibrant-logo-header.png", 240),
]


def resize(path: str, max_w: int, dest: str | None = None) -> None:
    src = os.path.join(ROOT, path)
    out = os.path.join(ROOT, dest) if dest else src
    if not os.path.exists(src):
        print(f"skip (missing): {path}")
        return
    im = Image.open(src)
    w, h = im.size
    if w <= max_w and dest is None:
        print(f"skip (already ≤{max_w}px): {path} ({w}x{h})")
        return
    if w > max_w:
        im = im.resize((max_w, round(h * max_w / w)), Image.LANCZOS)
    before = os.path.getsize(src)
    if out.lower().endswith((".jpg", ".jpeg")):
        im.convert("RGB").save(out, "JPEG", quality=82, optimize=True, progressive=True)
    else:
        im.save(out, "PNG", optimize=True)
    after = os.path.getsize(out)
    print(f"{path} -> {dest or 'in place'}: {w}x{h} -> {im.size[0]}x{im.size[1]}, "
          f"{before // 1024}KB -> {after // 1024}KB")


def main() -> int:
    for path, max_w in TARGETS:
        resize(path, max_w)
    for src, dest, max_w in DERIVED:
        resize(src, max_w, dest)
    return 0


if __name__ == "__main__":
    sys.exit(main())
