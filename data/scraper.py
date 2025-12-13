import requests
from bs4 import BeautifulSoup
import os
import re
from urllib.parse import urlparse
import time
import json
from markdownify import markdownify as md

# --- CONFIGURATION ---
BASE_URL = "https://badarbawani.blogspot.com/"
OUTPUT_DIR = "data"
# ---------------------

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def get_soup(url):
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def get_all_post_urls(base_url):
    post_urls = set()
    current_url = base_url
    print("--- Phase 1: Mapping all routes ---")

    while current_url:
        print(f"Scanning page: {current_url}")
        soup = get_soup(current_url)
        if not soup:
            break

        # Find post links
        for link in soup.find_all('a', href=True):
            href = link['href']
            # Blogspot pattern: /YYYY/MM/post-name.html
            if base_url in href and re.search(r'/\d{4}/\d{2}/', href):
                post_urls.add(href)

        # Pagination: Find 'Older Posts' link
        next_page_link = soup.find('a', class_='blog-pager-older-link')
        current_url = next_page_link['href'] if next_page_link else None
        time.sleep(0.5)

    unique_urls = list(post_urls)
    print(f"Found {len(unique_urls)} unique posts.")
    return unique_urls

def sanitize_slug(url):
    parsed = urlparse(url)
    slug = parsed.path.strip('/').split('/')[-1].replace('.html', '')
    return re.sub(r'[\\/*?:"<>|]', "", slug) or "home"

def download_image(img_url, post_slug):
    try:
        if img_url.startswith('//'):
            img_url = 'https:' + img_url
            
        response = requests.get(img_url, stream=True)
        if response.status_code == 200:
            ext = os.path.splitext(urlparse(img_url).path)[1] or ".jpg"
            # Naming: post-slug_img_timestamp.jpg
            filename = f"{post_slug}_img_{int(time.time()*10000)}{ext}"
            filepath = os.path.join(OUTPUT_DIR, filename)
            
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return filename
    except Exception:
        pass # Ignore download errors
    return None

def scrape_post(url):
    soup = get_soup(url)
    if not soup: return

    # 1. Scrape Metadata
    title = soup.find('h3', class_='post-title').get_text(strip=True) if soup.find('h3', class_='post-title') else "No Title"
    date_str = soup.find('h2', class_='date-header').get_text(strip=True) if soup.find('h2', class_='date-header') else ""
    
    # 2. Locate Content Container
    # Blogspot standard is 'post-body'
    content_div = soup.find('div', class_='post-body')
    if not content_div:
        print(f"Skipping {url} (No content body found)")
        return

    slug = sanitize_slug(url)
    print(f"Extracting: {title}...")

    # 3. Process Images (Download & Replace Links)
    local_images = []
    # Work on a copy so we don't mess up the original soup if needed elsewhere
    # But here we want to modify content_div directly for the saved HTML
    
    for img in content_div.find_all('img'):
        src = img.get('src')
        if src:
            local_filename = download_image(src, slug)
            if local_filename:
                local_images.append(local_filename)
                # update src to point to local file
                img['src'] = local_filename
                # Clean up lazy loading attributes that might break local viewing
                if img.has_attr('srcset'): del img['srcset']
                if img.has_attr('sizes'): del img['sizes']

    # 4. Get Data Formats
    # RAW HTML (with updated image links) - Best for fidelity
    raw_html = str(content_div)
    
    # MARKDOWN - Best for reading/LLMs
    markdown_text = md(raw_html, heading_style="ATX")

    # PLAIN TEXT - Best for searching
    plain_text = content_div.get_text(separator='\n', strip=True)

    # 5. Build JSON Structure
    post_data = {
        "title": title,
        "url": url,
        "date": date_str,
        "slug": slug,
        "images_downloaded": local_images,
        "content": {
            "html": raw_html,       # Full styling, tables, layout
            "markdown": markdown_text, # Clean readable format
            "text": plain_text      # Pure text content
        }
    }

    # 6. Save to JSON File
    json_filename = os.path.join(OUTPUT_DIR, f"{slug}.json")
    with open(json_filename, 'w', encoding='utf-8') as f:
        json.dump(post_data, f, indent=2, ensure_ascii=False)

def main():
    urls = get_all_post_urls(BASE_URL)
    
    print(f"--- Phase 2: Scraping {len(urls)} posts ---")
    for i, url in enumerate(urls):
        scrape_post(url)
        print(f"[{i+1}/{len(urls)}] Saved {sanitize_slug(url)}.json")
        time.sleep(0.5)

    print(f"\nDone! All data saved in '{OUTPUT_DIR}' directory.")

if __name__ == "__main__":
    main()