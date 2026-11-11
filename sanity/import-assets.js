// Utility for preparing assets for Sanity CMS import

const fs = require('fs');
const path = require('path');

// Function to create a manifest of all scraped assets
function generateAssetManifest() {
  const assetDirs = [
    'scraped-content/steelformengineering.com.au/images',
    'scraped-content/steelformengineering.com.au/css',
    'scraped-content/steelformengineering.com.au/js'
  ];
  
  const manifest = {
    assets: [],
    pages: []
  };
  
  // Process images
  try {
    const imageDir = 'scraped-content/steelformengineering.com.au/images';
    if (fs.existsSync(imageDir)) {
      const files = fs.readdirSync(imageDir);
      files.forEach(file => {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.ico')) {
          manifest.assets.push({
            name: file,
            path: `images/${file}`,
            type: 'image'
          });
        }
      });
    }
  } catch (error) {
    console.error('Error processing images:', error);
  }
  
  // Process HTML pages
  try {
    const pageDir = 'scraped-content/steelformengineering.com.au/pages';
    if (fs.existsSync(pageDir)) {
      const files = fs.readdirSync(pageDir);
      files.forEach(file => {
        if (file.endsWith('.html')) {
          manifest.pages.push({
            name: file,
            path: `pages/${file}`,
            type: 'html'
          });
        }
      });
    }
  } catch (error) {
    console.error('Error processing pages:', error);
  }
  
  // Save manifest
  fs.writeFileSync(
    'sanity/asset-manifest.json',
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('Asset manifest generated successfully');
  return manifest;
}

// Function to generate Sanity asset documents for the scraped images
function createSanityAssets() {
  const manifest = generateAssetManifest();
  const assets = [];
  
  // Create asset objects compatible with Sanity's structure
  manifest.assets.forEach(asset => {
    assets.push({
      _id: `image-${asset.name.replace(/\./g, '-')}`,
      _type: 'sanity.imageAsset',
      originalFilename: asset.name,
      path: asset.path,
      url: `/images/${asset.name}`, // This would be the actual CDN URL in production
      assetId: asset.name.split('.')[0],
      mimeType: asset.name.endsWith('.png') ? 'image/png' : 
                asset.name.endsWith('.jpg') || asset.name.endsWith('.jpeg') ? 'image/jpeg' : 'image/x-icon'
    });
  });
  
  // Save the asset objects to a JSON file
  fs.writeFileSync(
    'sanity/sanity-assets.json',
    JSON.stringify(assets, null, 2)
  );
  
  console.log(`Generated ${assets.length} Sanity asset documents`);
}

// Function to prepare content for Sanity import
function prepareContentForImport() {
  // This function would typically parse the HTML files and convert them into 
  // a format compatible with Sanity's document structure
  
  const pages = [
    'index.html',
    'services.html', 
    'fabrication-1.html',
    'cnc-machining-7.html',
    'excavator-buckets.html'
  ];
  
  const contentDocuments = [];
  
  // Process each page to extract relevant content
  pages.forEach(pageName => {
    try {
      const filePath = `scraped-content/steelformengineering.com.au/pages/${pageName}`;
      
      if (fs.existsSync(filePath)) {
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        
        // Extract title from HTML
        let titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
        let title = pageName.replace('.html', '').replace('-', ' ');
        if (titleMatch) {
          title = titleMatch[1];
        }
        
        const contentDocument = {
          _id: `page-${pageName.replace('.html', '')}`,
          _type: 'page',
          title: title,
          slug: {current: pageName.replace('.html', '')},
          content: htmlContent.slice(0, 500) + "...", // Simplified - in reality we'd parse the HTML properly
          seo: {
            metaTitle: title,
            metaDescription: "Extracted from scraped content"
          }
        };
        
        contentDocuments.push(contentDocument);
      }
    } catch (error) {
      console.error(`Error processing ${pageName}:`, error);
    }
  });
  
  fs.writeFileSync(
    'sanity/content-documents.json',
    JSON.stringify(contentDocuments, null, 2)
  );
  
  console.log(`Generated ${contentDocuments.length} content documents`);
}

// Main function to run all import preparation tasks
function prepareForImport() {
  try {
    // Generate asset manifest
    generateAssetManifest();
    
    // Create Sanity asset objects
    createSanityAssets();
    
    // Prepare content for import  
    prepareContentForImport();
    
    console.log('All import preparation completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Upload assets to Sanity Media Library');
    console.log('2. Import the generated documents using Sanity CLI or API');
    console.log('3. Configure your Vercel site with these content types');
    
  } catch (error) {
    console.error('Error in preparation:', error);
  }
}

// Run the preparation
prepareForImport();