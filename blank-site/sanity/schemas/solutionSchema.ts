import { defineField, defineType } from 'sanity'

export const solutionSchema = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solutionType',
      title: 'Solution Type',
      type: 'string',
      options: {
        list: [
          { title: 'Parent Solution', value: 'parent' },
          { title: 'Child Solution', value: 'child' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Parent Solution',
      type: 'reference',
      to: [{ type: 'solution' }],

      hidden: ({ parent }) => parent?.solutionType !== 'child',

      validation: (Rule) =>
        Rule.custom((value, context) => {
          const solutionType = (
            context.document as {
              solutionType?: 'parent' | 'child'
            }
          )?.solutionType

          if (solutionType === 'child' && !value) {
            return 'Child solutions must have a parent solution'
          }

          return true
        }),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
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