#!/usr/bin/env python3
"""
Script to scrape SteelForm Engineering website for content and assets.
This script downloads pages, images, CSS, JS, and other resources.
"""

import os
import re
import requests
from urllib.parse import urljoin, urlparse
from pathlib import Path
import time

# Configuration
BASE_URL = "https://www.steelformengineering.com.au"
OUTPUT_DIR = "scraped-content/steelformengineering.com.au"
PAGE_LIST_FILE = f"{OUTPUT_DIR}/page-list.txt"

def create_directories():
    """Create necessary directories for scraping."""
    dirs_to_create = [
        OUTPUT_DIR,
        f"{OUTPUT_DIR}/pages",
        f"{OUTPUT_DIR}/assets",
        f"{OUTPUT_DIR}/images",
        f"{OUTPUT_DIR}/css",
        f"{OUTPUT_DIR}/js"
    ]
    
    for directory in dirs_to_create:
        os.makedirs(directory, exist_ok=True)

def get_page_urls():
    """Read page URLs from the sitemap file."""
    urls = []
    try:
        with open(PAGE_LIST_FILE, 'r') as f:
            urls = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print(f"Page list file not found: {PAGE_LIST_FILE}")
        return []
    
    # Remove duplicates and filter out non-page URLs
    unique_urls = list(set(urls))
    return [url for url in unique_urls if url.startswith(BASE_URL)]

def download_page(url, output_dir):
    """Download a single page with its assets."""
    try:
        print(f"Downloading: {url}")
        
        # Get the page content
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Parse URL to get filename
        parsed_url = urlparse(url)
        path = parsed_url.path
        
        if not path or path == '/':
            filename = "index.html"
        elif path.endswith('/'):
            filename = "index.html" 
        else:
            filename = os.path.basename(path) if '/' in path else path
            
        # Ensure it's a .html file
        if not filename.endswith('.html'):
            if '.' not in filename:
                filename += '.html'
        
        filepath = os.path.join(output_dir, 'pages', filename)
        
        # Save the HTML content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(response.text)
            
        print(f"Saved: {filepath}")
        
        return True
        
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")
        return False

def extract_and_download_assets(html_content, base_url, output_dir):
    """Extract and download CSS, JS, images from HTML."""
    
    # Extract assets using regex
    asset_urls = []
    
    # Find all href attributes (CSS, JS)
    href_pattern = r'href=["\']([^"\']*?\.css|[^"\']*?\.js)["\']'
    for match in re.finditer(href_pattern, html_content):
        asset_url = match.group(1)
        if not asset_url.startswith('http'):
            full_url = urljoin(base_url, asset_url)
            asset_urls.append(full_url)
    
    # Find all src attributes (images, JS files) 
    src_pattern = r'src=["\']([^"\']*?\.png|[^"\']*?\.jpg|[^"\']*?\.jpeg|[^"\']*?\.gif|[^"\']*?\.svg|[^"\']*?\.js)["\']'
    for match in re.finditer(src_pattern, html_content):
        asset_url = match.group(1)
        if not asset_url.startswith('http'):
            full_url = urljoin(base_url, asset_url)
            asset_urls.append(full_url)
            
    # Download each asset
    for asset_url in set(asset_urls):  # Remove duplicates
        download_asset(asset_url, output_dir)

def download_asset(url, output_dir):
    """Download a single asset (CSS, JS, image)."""
    try:
        print(f"Downloading asset: {url}")
        
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Parse URL to get filename and path
        parsed_url = urlparse(url)
        path = parsed_url.path
        
        if not path or path == '/':
            return
            
        # Determine output directory based on extension  
        if '.css' in path:
            dir_name = 'css'
        elif '.js' in path:
            dir_name = 'js'
        else:
            dir_name = 'images'
            
        filename = os.path.basename(path)
        if not filename or '.' not in filename:  # Handle case where there's no extension
            return
            
        filepath = os.path.join(output_dir, dir_name, filename)
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
            
        print(f"Saved asset: {filepath}")
        
    except Exception as e:
        print(f"Error downloading asset {url}: {str(e)}")

def main():
    """Main scraping function."""
    print("Starting website scraping...")
    
    # Create directories
    create_directories()
    
    # Get URLs to scrape
    urls = get_page_urls()
    if not urls:
        print("No URLs found to scrape")
        return
    
    print(f"Found {len(urls)} pages to download")
    
    # Download each page with its assets
    for i, url in enumerate(urls):
        print(f"\n[{i+1}/{len(urls)}] Processing: {url}")
        
        success = download_page(url, OUTPUT_DIR)
        if success:
            # In a real implementation, we would parse the downloaded HTML 
            # and extract additional links to assets. For now, let's just 
            # download one page with its content.
            pass
            
        time.sleep(0.5)  # Be respectful to the server
    
    print("\nScraping completed!")

if __name__ == "__main__":
    main()