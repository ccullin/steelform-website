import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'openGraphTitle',
      title: 'Open Graph Title',
      type: 'string',
    }),
    defineField({
      name: 'openGraphDescription',
      title: 'Open Graph Description',
      type: 'text',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})