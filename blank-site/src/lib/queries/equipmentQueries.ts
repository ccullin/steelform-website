/**
 * GROQ queries for equipment pages
 */

/**
 * Fetch a single equipment page with related content
 */
export const fetchEquipmentPageData = (slug: string) => `
  *[_type == "equipmentType" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    heroImage,
    summary,
    description,
    "relatedEquipment": *[
      _type == "equipmentType" && 
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
 * Fetch projects related to this equipment type
 */
export const fetchProjectsByEquipment = (equipmentTypeId: string) => `
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
 * Fetch articles related to this equipment type
 */
export const fetchArticlesByEquipment = (equipmentTypeId: string) => `
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