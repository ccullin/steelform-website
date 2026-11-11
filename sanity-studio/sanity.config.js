// Sanity Studio Configuration for SteelForm Engineering

export default {
  // Project information
  name: 'steelform-cms',
  title: 'SteelForm Engineering CMS',
  
  // Project ID (this would come from your actual Sanity dashboard)
  projectId: 'YOUR_SANITY_PROJECT_ID', // Replace with your actual project ID
  
  // Dataset configuration
  dataset: 'production',
  
  // API version
  apiVersion: '2021-03-25',
  
  // Schema definitions (using our new schema structure)
  schema: {
    types: [
      // Homepage content
      {
        name: 'homePage',
        title: 'Homepage', 
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'heroBanner',
            title: 'Hero Banner',
            type: 'object',
            fields: [
              {
                name: 'images', 
                title: 'Banner Images',
                type: 'array',
                of: [{type: 'image'}]
              },
              {
                name: 'callToActionText',
                title: 'Call to Action Text',
                type: 'string'
              }
            ]
          },
          {
            name: 'aboutSection',
            title: 'About Section', 
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'content',
                title: 'Content',
                type: 'array',
                of: [{type: 'block'}]
              },
              {
                name: 'certificationLogo',
                title: 'Certification Logo', 
                type: 'image'
              }
            ]
          },
          {
            name: 'productsSection',
            title: 'Products Section',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'products',
                title: 'Products', 
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Product Name',
                      type: 'string'
                    },
                    {
                      name: 'image',
                      title: 'Product Image',
                      type: 'image' 
                    },
                    {
                      name: 'link',
                      title: 'Link to Product Page',
                      type: 'url'
                    }
                  ]
                }]
              }
            ]
          },
          {
            name: 'contactSection',
            title: 'Contact Section',
            type: 'object',  
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string' 
              },
              {
                name: 'email',
                title: 'Email',
                type: 'string'
              },
              {
                name: 'phone',
                title: 'Phone Number', 
                type: 'string'
              },
              {
                name: 'address',
                title: 'Address',
                type: 'text'  
              }
            ]
          },
          {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
              {
                name: 'metaTitle', 
                title: 'Meta Title',
                type: 'string'
              },
              {
                name: 'metaDescription',
                title: 'Meta Description',
                type: 'text'  
              }
            ]
          }
        ],
        preview: {
          select: {
            title: 'title'
          }
        }
      },

      // Generic page
      {
        name: 'page', 
        title: 'Page',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
          },
          {
            name: 'description', 
            title: 'Description',
            type: 'text'
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image'}
            ]
          }
        ],
        preview: {
          select: {
            title: 'title' 
          }
        }
      },

      // Service offerings
      {
        name: 'service',
        title: 'Service', 
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title', 
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text' 
          },
          {
            name: 'content', 
            title: 'Content',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image'}
            ]
          }
        ],
        preview: {
          select: {
            title: 'title'
          }
        }
      },

      // Product categories
      {
        name: 'productCategory',
        title: 'Product Category', 
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title', 
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text' 
          },
          {
            name: 'content', 
            title: 'Content',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image'}
            ]
          }
        ],
        preview: {
          select: {
            title: 'title'
          }
        }
      },

      // Individual products
      {
        name: 'product', 
        title: 'Product',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title', 
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
          },
          {
            name: 'category',
            title: 'Category',
            type: 'reference', 
            to: [{type: 'productCategory'}]
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text' 
          },
          {
            name: 'content', 
            title: 'Content',
            type: 'array',
            of: [
              {type: 'block'},
              {type: 'image'}
            ]
          }
        ],
        preview: {
          select: {
            title: 'title'
          }
        }
      },

      // Brand information
      {
        name: 'brand', 
        title: 'Brand',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Brand Name', 
            type: 'string'
          },
          {
            name: 'logo',
            title: 'Logo',
            type: 'image' 
          },
          {
            name: 'favicon',
            title: 'Favicon',
            type: 'image'
          },
          {
            name: 'contactInfo',
            title: 'Contact Information', 
            type: 'object',
            fields: [
              {
                name: 'email',
                title: 'Email',
                type: 'string'
              },
              {
                name: 'phone', 
                title: 'Phone Number',
                type: 'string'
              },
              {
                name: 'address',
                title: 'Address',
                type: 'text'  
              }
            ]
          },
          {
            name: 'socialMedia',
            title: 'Social Media Links', 
            type: 'object',
            fields: [
              {
                name: 'facebook',
                title: 'Facebook URL', 
                type: 'url'
              },
              {
                name: 'instagram', 
                title: 'Instagram URL',
                type: 'url'  
              },
              {
                name: 'linkedin',
                title: 'LinkedIn URL',
                type: 'url' 
              }
            ]
          },
          {
            name: 'certificationLogos', 
            title: 'Certification Logos',
            type: 'array',
            of: [{type: 'image'}]
          }
        ],
        preview: {
          select: {
            title: 'name'
          }
        }
      }

    ]
  },

  // Studio configuration
  studio: {
    name: "steelform-cms",
    title: "SteelForm Engineering CMS"
  },

  // Plugins and features 
  plugins: [
    // Add any required plugins here
  ],

  // Document actions (optional)
  document: {
    newDocumentOptions: (prev, { selection }) => {
      return prev.filter(template => template.id !== 'homepage')
    }
  }
}