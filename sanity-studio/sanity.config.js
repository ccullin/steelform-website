// Sanity Studio Configuration for SteelForm Engineering

export default {
  // Project information
  name: 'steelform-cms',
  title: 'SteelForm Engineering CMS',
  
  // Project ID (this would come from your actual Sanity dashboard)
  projectId: 'pf2xnwzy', // Your actual project ID goes here
  
  // Dataset configuration
  dataset: 'production',
  
  // API version
  apiVersion: '2021-03-25',
  
  // Schema definitions (using the schema we already created)
  schema: {
    types: [
      // Homepage content
      {
        name: 'homepage',
        title: 'Homepage',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Page Title',
            type: 'string'
          },
          {
            name: 'tagline',
            title: 'Tagline',
            type: 'text'
          },
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'heroText',
            title: 'Hero Text',
            type: 'text'
          },
          {
            name: 'services',
            title: 'Services Section',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Service Title',
                    type: 'string'
                  },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text'
                  },
                  {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                      hotspot: true
                    }
                  }
                ]
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
                name: 'description',
                title: 'Description',
                type: 'text'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                }
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
                name: 'address',
                title: 'Address',
                type: 'text'
              },
              {
                name: 'phone',
                title: 'Phone Number',
                type: 'string'
              },
              {
                name: 'email',
                title: 'Email Address',
                type: 'string'
              }
            ]
          }
        ]
      },

      // Service pages
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
              source: 'title'
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
        ]
      },

      // Team members
      {
        name: 'teamMember',
        title: 'Team Member',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'position',
            title: 'Position',
            type: 'string'
          },
          {
            name: 'bio',
            title: 'Biography',
            type: 'text'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ]
      },

      // Project portfolio
      {
        name: 'project',
        title: 'Project',
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
              source: 'title'
            }
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          },
          {
            name: 'year',
            title: 'Year',
            type: 'number'
          }
        ]
      },

      // Blog posts
      {
        name: 'blogPost',
        title: 'Blog Post',
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
              source: 'title'
            }
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
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
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'teamMember'}]
          }
        ]
      },

      // Settings
      {
        name: 'settings',
        title: 'Settings',
        type: 'document',
        fields: [
          {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string'
          },
          {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text'
          },
          {
            name: 'logo',
            title: 'Logo',
            type: 'image'
          },
          {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'platform',
                    title: 'Platform',
                    type: 'string'
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url'
                  }
                ]
              }
            ]
          },
          {
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
              {
                name: 'address',
                title: 'Address',
                type: 'text'
              },
              {
                name: 'phone',
                title: 'Phone Number',
                type: 'string'
              },
              {
                name: 'email',
                title: 'Email Address',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
  },

  // Studio configuration
  studio: {
    name: "steelform-cms",
    title: "SteelForm Engineering CMS"
  },

  // Authentication and API settings
  token: process.env.SANITY_TOKEN || null,
  
  // Environment variables for different deployment stages
  environments: {
    development: {
      projectId: "dev-project-id",
      dataset: "development"
    },
    production: {
      projectId: "pf2xnwzy", 
      dataset: "production"
    }
  }
};