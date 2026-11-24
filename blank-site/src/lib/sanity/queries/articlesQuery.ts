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

export const getArticleSlugs = async () => {
  const query = `
    *[_type == 'article' && defined(slug.current)]{
      "slug": slug.current
    }
  `

  return client.fetch(query)
}

export const getArticlesForLandingPage = async () => {
  const query = `
    *[_type == 'article'] | order(publishDate desc){
      _id,
      title,
      slug,
      publishDate,
      heroImage,
      summary
    }
  `

  return client.fetch(query)
}