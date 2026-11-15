import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      description: 'Recommended 50-60 characters. If left blank, the page title will be used.',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('SEO titles should ideally be under 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      description: 'Recommended 120-160 characters. If left blank, the summary will be used.',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(160).warning(
          'SEO descriptions should ideally be under 160 characters'
        ),
    }),
  ],
})