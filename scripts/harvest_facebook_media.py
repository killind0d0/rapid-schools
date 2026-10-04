#!/usr/bin/env python3
"""
Facebook Media Harvester for Rapid Shakuntalayan School
Downloads photos and videos while strictly monitoring disk storage limits (600MB - 800MB limit).
"""

import os
import sys
import json
import urllib.request
import subprocess
from playwright.sync_api import sync_playwright

GALLERY_DIR = "/home/killindodo/Projects/rapid-schools/public/gallery"
PHOTOS_DIR = os.path.join(GALLERY_DIR, "photos")
VIDEOS_DIR = os.path.join(GALLERY_DIR, "videos")
MANIFEST_PATH = os.path.join(GALLERY_DIR, "manifest.json")

MAX_MB = 650.0  # Safe threshold well within 600MB - 800MB range
MAX_BYTES = int(MAX_MB * 1024 * 1024)

os.makedirs(PHOTOS_DIR, exist_ok=True)
os.makedirs(VIDEOS_DIR, exist_ok=True)

def get_dir_size(path):
    total = 0
    for root, _, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
    return total

print(f"=== Starting Rapid Schools Media Harvester ===")
print(f"Destination: {GALLERY_DIR}")
print(f"Size limit: {MAX_MB} MB ({MAX_BYTES} bytes)")

# 1. Collect all media URLs via Playwright
photo_urls = set()
video_urls = set()

print("\n--- Phase 1: Discovering media URLs ---")
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        viewport={"width": 1280, "height": 800}
    )

    # Scrape Photos Tab & Sub-tabs
    for tab in ["photos", "photos_by"]:
        url = f"https://www.facebook.com/rapid.shakuntalayan.school.gaya/{tab}"
        print(f"Loading {url}...")
        try:
            page.goto(url, wait_until="networkidle", timeout=30000)
            page.wait_for_timeout(2000)
            for _ in range(8):
                page.evaluate("window.scrollBy(0, 1500)")
                page.wait_for_timeout(800)

            imgs = page.evaluate('''() => {
                const s = new Set();
                document.querySelectorAll('img').forEach(i => {
                    if (i.src && i.src.includes('fbcdn.net') && !i.src.includes('rsrc.php')) {
                        s.add(i.src);
                    }
                });
                return Array.from(s);
            }''')
            for img in imgs:
                photo_urls.add(img)
        except Exception as e:
            print(f"Error crawling {tab}: {e}")

    # Scrape Videos Tab
    print("Loading videos tab...")
    try:
        page.goto("https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos", wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(2000)
        for _ in range(8):
            page.evaluate("window.scrollBy(0, 1500)")
            page.wait_for_timeout(800)

        vids = page.evaluate('''() => {
            const s = new Set();
            document.querySelectorAll('a[href*="/videos/"], a[href*="/reel/"]').forEach(a => {
                s.add(a.href.split('?')[0]);
            });
            return Array.from(s);
        }''')
        for v in vids:
            video_urls.add(v)
    except Exception as e:
        print(f"Error crawling videos: {e}")

    # Scrape Reels Tab
    print("Loading reels tab...")
    try:
        page.goto("https://www.facebook.com/rapid.shakuntalayan.school.gaya/reels", wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(2000)
        for _ in range(8):
            page.evaluate("window.scrollBy(0, 1500)")
            page.wait_for_timeout(800)

        reels = page.evaluate('''() => {
            const s = new Set();
            document.querySelectorAll('a[href*="/reel/"]').forEach(a => {
                s.add(a.href.split('?')[0]);
            });
            return Array.from(s);
        }''')
        for r in reels:
            video_urls.add(r)
    except Exception as e:
        print(f"Error crawling reels: {e}")

    browser.close()

# Also include known high-priority videos
priority_videos = [
    "https://www.facebook.com/reel/1084680567729794/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/919466247147412/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/920614683788172/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/857001857365218/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/798529716599286/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/1476739274464624/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/1519727795795889/",
    "https://www.facebook.com/rapid.shakuntalayan.school.gaya/videos/907139858568404/"
]
for pv in priority_videos:
    video_urls.add(pv)

print(f"\nDiscovered {len(photo_urls)} unique photo URLs and {len(video_urls)} unique video/reel URLs.")

# 2. Download Photos
downloaded_photos = []
print("\n--- Phase 2: Downloading Photos ---")
req_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

for idx, p_url in enumerate(photo_urls, 1):
    current_size = get_dir_size(GALLERY_DIR)
    if current_size >= MAX_BYTES:
        print(f"⚠️ STORAGE LIMIT REACHED ({current_size / (1024*1024):.2f} MB >= {MAX_MB} MB). Stopping downloads.")
        break

    # Strip query parameters for a clean filename
    file_id = f"photo_{idx:03d}"
    dest_path = os.path.join(PHOTOS_DIR, f"{file_id}.jpg")

    try:
        req = urllib.request.Request(p_url, headers=req_headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            # Only save meaningful images (> 10KB)
            if len(data) > 10240:
                with open(dest_path, "wb") as f:
                    f.write(data)
                f_size_kb = len(data) / 1024
                total_mb = get_dir_size(GALLERY_DIR) / (1024 * 1024)
                downloaded_photos.append({
                    "id": file_id,
                    "filename": f"{file_id}.jpg",
                    "type": "photo",
                    "size_bytes": len(data),
                    "size_display": f"{f_size_kb:.1f} KB",
                    "url": f"/rapid-schools/gallery/photos/{file_id}.jpg",
                    "source_url": p_url
                })
                print(f"  [Photo {idx}] Saved {file_id}.jpg ({f_size_kb:.1f} KB) - Total storage: {total_mb:.2f} MB")
    except Exception as e:
        print(f"  [Photo {idx}] Failed to download: {e}")

# 3. Download Videos
downloaded_videos = []
print("\n--- Phase 3: Downloading Videos & Reels ---")

for idx, v_url in enumerate(video_urls, 1):
    current_size = get_dir_size(GALLERY_DIR)
    if current_size >= MAX_BYTES:
        print(f"⚠️ STORAGE LIMIT REACHED ({current_size / (1024*1024):.2f} MB >= {MAX_MB} MB). Halting video download.")
        break

    # Extract ID from URL
    clean_v_url = v_url.rstrip("/")
    vid_id = clean_v_url.split("/")[-1]
    if not vid_id.isdigit():
        vid_id = f"vid_{idx:02d}"

    out_pattern = os.path.join(VIDEOS_DIR, f"{vid_id}.%(ext)s")
    target_mp4 = os.path.join(VIDEOS_DIR, f"{vid_id}.mp4")

    # If already downloaded, record it
    if os.path.exists(target_mp4):
        f_size = os.path.getsize(target_mp4)
        downloaded_videos.append({
            "id": vid_id,
            "filename": f"{vid_id}.mp4",
            "type": "video",
            "size_bytes": f_size,
            "size_display": f"{f_size / (1024*1024):.2f} MB",
            "url": f"/rapid-schools/gallery/videos/{vid_id}.mp4",
            "source_url": v_url
        })
        print(f"  [Video {idx}] Already downloaded: {vid_id}.mp4 ({f_size / (1024*1024):.2f} MB)")
        continue

    print(f"  [Video {idx}] Downloading {v_url}...")
    try:
        # Download best mp4 format under 100MB per video to conserve storage
        cmd = [
            "yt-dlp",
            "--max-filesize", "100M",
            "-f", "best[ext=mp4]/best",
            "-o", out_pattern,
            v_url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        
        # Check if file was produced
        actual_file = None
        for cand in [f"{vid_id}.mp4", f"{vid_id}.mkv", f"{vid_id}.webm"]:
            cp = os.path.join(VIDEOS_DIR, cand)
            if os.path.exists(cp):
                actual_file = cp
                break

        if actual_file:
            f_size = os.path.getsize(actual_file)
            total_mb = get_dir_size(GALLERY_DIR) / (1024 * 1024)
            fn = os.path.basename(actual_file)
            downloaded_videos.append({
                "id": vid_id,
                "filename": fn,
                "type": "video",
                "size_bytes": f_size,
                "size_display": f"{f_size / (1024*1024):.2f} MB",
                "url": f"/rapid-schools/gallery/videos/{fn}",
                "source_url": v_url
            })
            print(f"  [Video {idx}] Successfully downloaded: {fn} ({f_size / (1024*1024):.2f} MB) - Total storage: {total_mb:.2f} MB")
        else:
            print(f"  [Video {idx}] No video output produced or format restricted.")
    except Exception as e:
        print(f"  [Video {idx}] Download error: {e}")

# 4. Generate Manifest
final_size = get_dir_size(GALLERY_DIR)
final_mb = final_size / (1024 * 1024)

manifest = {
    "school": "Rapid Shakuntalayan School Gaya",
    "facebook_source": "https://www.facebook.com/rapid.shakuntalayan.school.gaya/",
    "storage_limit_mb": MAX_MB,
    "total_storage_used_bytes": final_size,
    "total_storage_used_mb": round(final_mb, 2),
    "limit_bypassed": final_mb >= MAX_MB,
    "photos_count": len(downloaded_photos),
    "videos_count": len(downloaded_videos),
    "photos": downloaded_photos,
    "videos": downloaded_videos
}

with open(MANIFEST_PATH, "w") as f:
    json.dump(manifest, f, indent=2)

print("\n=== Harvester Run Complete ===")
print(f"Total Photos: {len(downloaded_photos)}")
print(f"Total Videos: {len(downloaded_videos)}")
print(f"Total Storage Used: {final_mb:.2f} MB of {MAX_MB} MB limit")
print(f"Bypassed Limit: {final_mb >= MAX_MB}")
print(f"Manifest written to: {MANIFEST_PATH}")
