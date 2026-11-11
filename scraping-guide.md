# Web Scraping Guide for SteelForm Engineering

## Overview
This document explains how to scrape the existing www.steelformengineering.com.au website to collect all pages, assets, and content for your new implementation.

## Prerequisites (To Run Locally)
1. Install wget on your local machine:
   ```bash
   # macOS
   brew install wget
   
   # Ubuntu/Debian  
   sudo apt-get install wget
   
   # Windows (using chocolatey)
   choco install wget
   ```

2. Install bun if you haven't already:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

## Scraping Commands

### Complete Website Download
```bash
# This command will download the entire website locally
wget --mirror \
     --convert-links \
     --adjust-extension \
     --page-requisites \
     --no-parent \
     --restrict-file-names=windows \
     --domains=www.steelformengineering.com.au \
     --no-clobber \
     https://www.steelformengineering.com.au/
```

### Alternative with More Options
```bash
# Download with comprehensive options to preserve structure
wget --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --domains=www.steelformengineering.com.au \
     --no-parent \
     --user-agent="Mozilla/5.0 (compatible; Web Scraper)" \
     https://www.steelformengineering.com.au/
```

### For Just Images and Assets
```bash
# Download only images and assets
wget --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --domains=www.steelformengineering.com.au \
     --no-parent \
     --accept="jpg,jpeg,png,gif,svg" \
     https://www.steelformengineering.com.au/images/
```

## What This Would Collect

### HTML Pages:
- index.html (homepage)
- services.html  
- about.html
- contact.html
- portfolio.html

### Assets:
- Images: logo.png, about-image.jpg, etc.
- CSS files: css/bootstrap.min.css, css/steel.css
- JavaScript: js/jquery-1.11.3.min.js, etc.
- Fonts: Google fonts and font files
- Icons: favicon.ico, instagram.ico  

## Post-Scraping Process

### 1. Organize Files Structure
After scraping, you'd have a folder structure like:
```
steelformengineering.com.au/
├── index.html
├── services.html
├── about.html
├── contact.html
├── portfolio.html
├── images/
│   ├── logo.png
│   ├── about-image.jpg
│   └── other-images...
└── css/
    ├── bootstrap.min.css
    └── steel.css
```

### 2. Convert HTML to Next.js Pages
You'd convert the scraped HTML files:
```bash
# Example: Convert index.html to src/pages/index.js
# Remove old content and add new structure with React components
```

### 3. Migrate Content to Sanity
Create a script or manually copy content into your Sanity CMS:

**Example content from homepage (scraped):**
```html
<title>Steelform Engineering - Mining & Earthmoving Equipment Manufacturers</title>
<meta name="description" content="Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne." />
<div class="col-md-6 no-padding top-logo">
    <a href="https://www.steelformengineering.com.au">
        <img src="images/logo.png" alt="logo" class="res-img">
    </a>
</div>
```

### 4. Import Assets to Your Project
```bash
# Copy scraped images to your project's public directory  
cp -r steelformengineering.com.au/images/* public/images/
```

## Important Considerations

### Legal and Ethical:
1. **Check robots.txt**: 
   ```bash
   curl https://www.steelformengineering.com.au/robots.txt
   ```

2. **Respect rate limits** - Don't overwhelm the server with requests

3. **Copyright notice**: Be aware that scraping may involve copyright issues

### Technical Limitations:
1. **Dynamic content**: JavaScript-rendered content won't be captured by wget
2. **Authentication**: Login-protected pages can't be scraped this way  
3. **Anti-bot measures**: Some sites block scraping tools

## Recommended Alternative Approach

Instead of full scraping, consider:

1. **Manual Content Migration**:
   - Extract key text and structure manually 
   - Maintain control over content quality
   - Ensure proper semantic HTML for SEO

2. **Content Audit First**:
   ```bash
   # Identify all pages to be migrated  
   curl https://www.steelformengineering.com.au/ | grep -o 'href="[^"]*"' | head -20
   ```

## Implementation Steps After Scraping

1. **Copy assets to public folder**:
   ```bash
   cp steelformengineering.com.au/images/* public/images/
   ```

2. **Convert HTML pages to Next.js components**

3. **Create Sanity content documents from scraped content**

4. **Test all links and functionality**

## Limitations of This Approach

1. **No automatic conversion** - You'll need manual work to convert HTML/CSS/JS to React
2. **Styling differences** - Bootstrap CSS may not translate perfectly  
3. **JavaScript functionality** - Interactive elements won't work without reimplementation
4. **SEO considerations** - Old URLs might be lost in migration

## Final Recommendation  

For your implementation, I recommend:
1. Create a simple copy of the existing content structure manually 
2. Use this as a foundation for your new Next.js + Sanity approach
3. Enhance and improve upon the original while maintaining key information
4. Focus on responsive design rather than exact replication

This gives you better control over modern web standards and user experience.

Would you like me to provide more specific help with any part of this process?