import { type SchemaTypeDefinition } from 'sanity'
import { generalPage } from './generalPage'
import { seo } from './seo'
import { imageWithAlt } from './imageWithAlt'
import { solution } from './solution'
import { project } from './project'
import { article } from './article'
import { industry } from './industry'
import { equipmentType } from './equipmentType'
import { globalSettings } from './globalSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    generalPage,
    seo,
    imageWithAlt,
    solution,
    project,
    article,
    industry,
    equipmentType,
    globalSettings,
  ],
}
