import { client } from '../client'

export const getProjectBySlug = async (slug: string) => {
  const query = `
    *[_type == 'project' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      heroImage,
      gallery,
      summary,
      solutions,
      industries,
      equipmentTypes
    }
  `

  return client.fetch(query, { slug })
}