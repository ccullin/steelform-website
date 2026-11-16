/**
 * GROQ queries for article pages
 */

/**
 * Fetch a single article page with related content
 */
export const fetchArticlePageData = (slug: string) => `
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    heroImage,
    summary,
    body,
    industries,
    equipmentTypes,
    "relatedArticles": *[
      _type == "article" && 
      (references(^.industries[]._ref) || references(^.equipmentTypes[]._ref)) &&
      _id != ^._id
    ] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    },
    "relatedProjects": *[
      _type == "project" && 
      (references(^.industries[]._ref) || references(^.equipmentTypes[]._ref))
    ] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    }
  }
`

/**
 * Fetch articles in the same industries
 */
export const fetchArticlesByIndustries = (industryRefs: string[]) => `
  *[_type == "article" && 
    references(^.industries[]._ref) && 
    _id != ^._id] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
`

/**
 * Fetch articles with the same equipment types
 */
export const fetchArticlesByEquipmentTypes = (equipmentTypeRefs: string[]) => `
  *[_type == "article" && 
    references(^.equipmentTypes[]._ref) && 
    _id != ^._id] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary
    }
`