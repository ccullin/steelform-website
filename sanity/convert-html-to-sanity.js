// Script to convert scraped HTML pages to Sanity document format

const fs = require('fs');
const path = require('path');

// Function to extract content from a page and structure it for Sanity
function processHomePage() {
  const htmlContent = fs.readFileSync(
    'scraped-content/steelformengineering.com.au/pages/index.html', 
    'utf8'
  );
  
  // Extract key elements from the homepage
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const metaDescMatch = htmlContent.match(/<meta name="description" content="(.*?)" \/>/);
  
  const data = {
    _type: 'homePage',
    title: titleMatch ? titleMatch[1] : 'SteelForm Engineering Home Page',
    seo: {
      metaTitle: titleMatch ? titleMatch[1] : '',
      metaDescription: metaDescMatch ? metaDescMatch[1] : ''
    },
    heroBanner: {
      callToActionText: "Get a Free Quote"
    },
    aboutSection: {
      title: 'About Us',
      content: [
        {
          _key: 'about-content-1',
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equiped fabrication business. A family owned & operated company with over 25 years experience in the steel fabrication / welding industry.'
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ]
    },
    productsSection: {
      title: "Our Products Range"
    },
    contactSection: {
      title: "Quick Contact",
      email: "kevin@steelformengineering.com.au",
      phone: "(03) 9580 8009",
      address: "Steelform Engineering Pty Ltd\nABN: 55354624093"
    }
  };
  
  return data;
}

// Function to process service pages
function processServicePage(pageName, title, description) {
  const data = {
    _type: 'service',
    title: title,
    slug: {current: pageName},
    description: description,
    content: [
      {
        _key: 'intro-content-1',
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: `This is a sample service page for ${title}.`
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    seo: {
      metaTitle: title,
      metaDescription: description
    }
  };
  
  return data;
}

// Function to process product category pages
function processProductCategory(pageName, title, description) {
  const data = {
    _type: 'productCategory',
    title: title,
    slug: {current: pageName},
    description: description,
    content: [
      {
        _key: 'intro-content-1',
        _type: 'block',
        children: [
          {
            _type: 'span', 
            text: `This is a sample product category page for ${title}.`
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    seo: {
      metaTitle: title,
      metaDescription: description
    }
  };
  
  return data;
}

// Main function to generate all documents
function generateSanityDocuments() {
  const documents = [];
  
  // Home page
  documents.push(processHomePage());
  
  // Sample service pages based on sitemap
  const services = [
    {name: 'services', title: 'Services', description: 'Our range of fabrication and machining services'},
    {name: 'fabrication-1', title: 'Fabrication', description: 'Steel fabrication services'},
    {name: 'cnc-machining-7', title: 'CNC Machining', description: 'Precision CNC machining services'},
  ];
  
  services.forEach(service => {
    documents.push(processServicePage(service.name, service.title, service.description));
  });
  
  // Sample product categories based on sitemap
  const productCategories = [
    {name: 'excavator-buckets', title: 'Excavator Buckets', description: 'Range of excavator buckets'},
    {name: 'gp-buckets-8', title: 'GP Buckets', description: 'General purpose excavator buckets'},
    {name: 'mud-buckets-9', title: 'Mud Buckets', description: 'Specialized mud buckets'},
    {name: 'rock-buckets-10', title: 'Rock Buckets', description: 'Heavy-duty rock buckets'},
  ];
  
  productCategories.forEach(category => {
    documents.push(processProductCategory(category.name, category.title, category.description));
  });
  
  // Write to a JSON file
  fs.writeFileSync(
    'sanity/sanity-documents.json',
    JSON.stringify(documents, null, 2)
  );
  
  console.log(`Generated ${documents.length} Sanity documents`);
}

// Run the conversion
generateSanityDocuments();

console.log('HTML to Sanity conversion completed!');