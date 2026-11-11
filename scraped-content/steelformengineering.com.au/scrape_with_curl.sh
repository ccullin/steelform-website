#!/bin/bash

# Simple scraping script using curl to download pages from steelformengineering.com.au

BASE_URL="https://www.steelformengineering.com.au"
OUTPUT_DIR="scraped-content/steelformengineering.com.au"

echo "Starting web scraping for $BASE_URL"

# Create necessary directories
mkdir -p "$OUTPUT_DIR/pages"
mkdir -p "$OUTPUT_DIR/assets"
mkdir -p "$OUTPUT_DIR/images" 
mkdir -p "$OUTPUT_DIR/css"
mkdir -p "$OUTPUT_DIR/js"

# Get the list of URLs to scrape
URLS_FILE="$OUTPUT_DIR/page-list.txt"

if [ ! -f "$URLS_FILE" ]; then
    echo "Error: Page list file not found at $URLS_FILE"
    exit 1
fi

echo "Found $(wc -l < "$URLS_FILE") pages to download"

# Function to download a single page with its resources
download_page() {
    local url="$1"
    local output_dir="$2"
    
    echo "Downloading: $url"
    
    # Get the filename from URL path
    if [[ "$url" == */ ]]; then
        filename="index.html"
    else
        filename=$(basename "$url")
        if [[ -z "$filename" ]] || [[ "$filename" == "/" ]]; then
            filename="index.html"
        fi
    fi
    
    # Ensure it's an HTML file
    if [[ ! "$filename" =~ \.html$ ]]; then
        if [[ "$filename" != *.* ]]; then
            filename="${filename}.html"
        else
            echo "Skipping non-HTML file: $filename"
            return 1
        fi
    fi
    
    # Create the full path for saving the page
    output_file="$output_dir/pages/$filename"
    
    # Download the HTML content  
    curl -s -L "$url" -o "$output_file"
    
    if [ $? -eq 0 ]; then
        echo "Saved: $output_file"
        
        # Extract and download resources (simple approach)
        # We'll try to extract links from the page
        
        # For now, just save a basic version of the content
        return 0
    else
        echo "Failed to download: $url"
        return 1
    fi
}

# Download each page
count=0
while IFS= read -r url; do
    if [ ! -z "$url" ] && [[ "$url" =~ ^https://www.steelformengineering.com.au ]]; then
        count=$((count + 1))
        echo "[$count] Processing: $url"
        download_page "$url" "$OUTPUT_DIR"
        
        # Add a small delay to be respectful to the server
        sleep 0.5
    fi
done < "$URLS_FILE"

echo "Scraping completed! Downloaded pages saved in $OUTPUT_DIR/pages"