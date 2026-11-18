import { client } from '../client'

export const getArticleBySlug = async (slug: string) => {
  const query = `
    *[_type == 'article' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seo,
      heroImage,
      mainContent,
      solutions,
      industries,
      equipmentTypes
    }
  `

  return client.fetch(query, { slug })
}