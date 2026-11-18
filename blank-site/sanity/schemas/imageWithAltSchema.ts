import { defineField, defineType } from 'sanity'

export const imageWithAltSchema = defineType({
  name: 'imageWithAlt',
  title: 'Image with Alt Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    }),
  ],
})