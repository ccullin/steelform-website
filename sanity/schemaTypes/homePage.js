// Home page schema
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
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
}