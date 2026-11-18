import { type SchemaTypeDefinition } from 'sanity'
import { generalPageSchema } from './generalPageSchema'
import { seoSchema } from './seoSchema'
import { imageWithAltSchema } from './imageWithAltSchema'
import { solutionSchema } from './solutionSchema'
import { projectSchema } from './projectSchema'
import { articleSchema } from './articleSchema'
import { industrySchema } from './industrySchema'
import { equipmentTypeSchema } from './equipmentTypeSchema'
import { globalSettingsSchema } from './globalSettingsSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    generalPageSchema,
    seoSchema,
    imageWithAltSchema,
    solutionSchema,
    projectSchema,
    articleSchema,
    industrySchema,
    equipmentTypeSchema,
    globalSettingsSchema,
  ],
}
