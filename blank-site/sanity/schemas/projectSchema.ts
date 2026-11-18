import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'solution' } }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'industry' } }],
    }),
    defineField({
      name: 'equipmentTypes',
      title: 'Equipment Types',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'equipmentType' } }],
    }),
  ],
})