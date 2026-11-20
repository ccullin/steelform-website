import { defineField, defineType } from 'sanity'

export const generalPageSchema = defineType({
  name: 'page',
  title: 'General Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainContent',
      title: 'Main Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
})
