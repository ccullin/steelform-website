# SteelForm Engineering Website Scraping Guide

This guide documents how to convert the scraped website content for use in your Sanity/Vercel project.

## Scraped Content Overview

### Pages Downloaded
- 38 pages from the sitemap including:
  - Homepage (`index.html`)
  - Service pages (`services`, `fabrication-1.html`, `cnc-machining-7.html`)
  - Product category pages (`excavator-buckets`, `gp-buckets-8.html`, etc.)
  - Contact and blog pages
  - All main navigation items

### Assets Collected 
- **CSS files**: `bootstrap.min.css`, `steel.css`
- **Images**: 
  - `favicon.ico` - Website icon
  - `steelform-logo.png` - Primary logo 
  - `banner.jpg` - Header banner image
  - `logo.png` - Alternative logo
  - `Australian_Made-logo.png` - Certification badge
  - `img1_2.jpg`, `img2_2.jpg` - Featured banners

## Sanity Schema Structure

We've created comprehensive schemas to support the content structure:

### Core Documents:
1. **HomePage** - For main homepage content
2. **Page** - Generic page content 
3. **Service** - Service offerings and descriptions
4. **ProductCategory** - Product categories (e.g., excavator buckets)
5. **Product** - Individual products with detailed information
6. **Brand** - Brand information including contact details and social media

## Conversion Process

### 1. Asset Import Preparation:
- All images are organized in `scraped-content/steelformengineering.com.au/images/`
- CSS files are available in `scraped-content/steelformengineering.com.au/css/`

### 2. Content Migration Steps:

#### Step A: Upload Assets to Sanity
1. Navigate to your Sanity Studio 
2. Go to Media Library
3. Upload all collected images:
   - `favicon.ico`
   - `steelform-logo.png`
   - `banner.jpg`  
   - `logo.png`
   - `Australian_Made-logo.png`
   - `img1_2.jpg`, `img2_2.jpg`

#### Step B: Create Content Documents
Use the generated schemas to create content in Sanity Studio:

```javascript
// Example homepage document structure:
{
  _type: 'homePage',
  title: "SteelForm Engineering - Mining & Earthmoving Equipment Manufacturers",
  heroBanner: {
    images: [/* image references */],
    callToActionText: "Get a Free Quote"
  },
  aboutSection: {
    title: "About Us", 
    content: [/* rich text blocks */]
  },
  productsSection: {
    title: "Our Products Range",
    products: [
      {name: "GP Buckets"},
      {name: "Mud Buckets"}, 
      // etc.
    ]
  },
  contactSection: {
    email: "kevin@steelformengineering.com.au",
    phone: "(03) 9580 8009"
  }
}
```

### 3. Vercel Integration

The scraped content can now be used to populate your Next.js/Vercel site:

1. Use the Sanity content in your components
2. Implement responsive design using the existing CSS (`steel.css`)
3. Create page routes based on your sitemap URLs:
   - `/` (homepage)
   - `/services`
   - `/fabrication-1` 
   - etc.

## Next Steps

1. **Import Assets**: Upload all images to Sanity's Media Library
2. **Create Documents**: Use the schemas to create content documents in Sanity Studio
3. **Connect Vercel**: Configure your Next.js app to fetch content from Sanity  
4. **Test Site**: Verify that pages render correctly with your new content

## File Structure Reference

```
scraped-content/
└── steelformengineering.com.au/
    ├── images/               # Collected assets
    │   ├── favicon.ico
    │   ├── steelform-logo.png
    │   └── banner.jpg
    ├── css/                  # CSS files  
    │   ├── bootstrap.min.css
    │   └── steel.css
    ├── pages/                # HTML pages
    │   ├── index.html
    │   ├── services.html
    │   └── ... (all other pages)
    └── page-list.txt         # List of all URLs scraped

sanity/
├── schemaTypes/          # Sanity document schemas 
│   ├── homePage.js
│   ├── service.js  
│   ├── productCategory.js
│   └── ...
└── sample-home-page.json # Sample data for reference
```

This setup provides a solid foundation for migrating the SteelForm Engineering website content into your new Vercel/Sanity project.