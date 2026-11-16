/**
 * GROQ queries for industry pages
 */

/**
 * Fetch a single industry page with related content
 */
export const fetchIndustryPageData = (slug: string) => `
  *[_type == "industry" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    heroImage,
    summary,
    description,
    "relatedIndustries": *[
      _type == "industry" && 
      _id != ^._id
    ] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    },
    "projects": *[
      _type == "project" && 
      references(^._id)
    ] | order(_createdAt desc)[0..6] {
      _id,
      title,
      slug,
      heroImage,
      summary
    },
    "articles": *[
      _type == "article" && 
      references(^._id)
    ] | order(_createdAt desc)[0..6] {
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
  }
`

/**
 * Fetch projects related to this industry
 */
export const fetchProjectsByIndustry = (industryId: string) => `
  *[_type == "project" && 
    references(^._id)] | order(_createdAt desc)[0..6] {
      _id,
      title,
      slug,
      heroImage,
      summary
    }
`

/**
 * Fetch articles related to this industry
 */
export const fetchArticlesByIndustry = (industryId: string) => `
  *[_type == "article" && 
    references(^._id)] | order(_createdAt desc)[0..6] {
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
`