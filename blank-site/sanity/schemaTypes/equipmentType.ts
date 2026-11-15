import { defineField, defineType } from 'sanity'

export const equipmentType = defineType({
  name: 'equipmentType',
  title: 'Equipment Type',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
})