import { client } from '../client'

export const getEquipmentTypeBySlug = async (slug: string) => {
  const query = `
    *[_type == 'equipmentType' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      heroImage
    }
  `

  return client.fetch(query, { slug })
}

export const getProjectsByEquipmentType = async (slug: string) => {
  const query = `
    *[_type == 'project' && 'equipmentTypes' in references($equipmentId)]{
      _id,
      title,
      slug,
      heroImage,
      summary
    }
  `

  return client.fetch(query, { equipmentId: `equipmentType.${slug}` })
}

export const getArticlesByEquipmentType = async (slug: string) => {
  const query = `
    *[_type == 'article' && 'equipmentTypes' in references($equipmentId)]{
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
  `

  return client.fetch(query, { equipmentId: `equipmentType.${slug}` })
}