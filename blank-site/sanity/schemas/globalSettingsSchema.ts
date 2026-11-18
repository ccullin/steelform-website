import { defineField, defineType } from 'sanity'

export const globalSettingsSchema = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'businessAddress',
      title: 'Business Address',
      type: 'text',
    }),
    defineField({
      name: 'ABN',
      title: 'Australian Business Number (ABN)',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                ],
                layout: 'dropdown',
              },
              validation: (rule) => rule.required(),
            })
          ],
        },
      ],
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logoForLightBackground',
      title: 'Logo (Light Background)',
      type: 'image',
    }),
    defineField({
      name: 'logoForDarkBackground',
      title: 'Logo (Dark Background)',
      type: 'image',
    }),
    defineField({
      name: 'faviconForLightBackground',
      title: 'Favicon (Light Background)',
      type: 'image',
    }),
    defineField({
      name: 'faviconForDarkBackground',
      title: 'Favicon (Dark Background)',
      type: 'image',
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      }
    },
  },
})