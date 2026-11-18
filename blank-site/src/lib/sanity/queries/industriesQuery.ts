import { client } from '../client'

export const getIndustryBySlug = async (slug: string) => {
  const query = `
    *[_type == 'industry' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      summary
    }
  `

  return client.fetch(query, { slug })
}

export const getProjectsByIndustry = async (slug: string) => {
  const query = `
    *[_type == 'project' && 'industries' in references($industryId)]{
      _id,
      title,
      slug,
      heroImage,
      summary
    }
  `

  return client.fetch(query, { industryId: `industry.${slug}` })
}

export const getArticlesByIndustry = async (slug: string) => {
  const query = `
    *[_type == 'article' && 'industries' in references($industryId)]{
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
  `

  return client.fetch(query, { industryId: `industry.${slug}` })
}