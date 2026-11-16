/**
 * GROQ queries for project pages
 */

/**
 * Fetch a single project page with related content
 */
export const fetchProjectPageData = (slug: string) => `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    heroImage,
    gallery,
    summary,
    industries,
    equipmentTypes,
    "relatedProjects": *[
      _type == "project" && 
      references(^._id) && 
      _id != ^._id
    ] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    },
    "relatedArticles": *[
      _type == "article" && 
      (references(^.industries[]._ref) || references(^.equipmentTypes[]._ref))
    ] | order(_createdAt desc)[0..3] {
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
 * Fetch projects in the same industries
 */
export const fetchProjectsByIndustries = (industryRefs: string[]) => `
  *[_type == "project" && 
    references(^.industries[]._ref) && 
    _id != ^._id] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    }
`

/**
 * Fetch projects with the same equipment types
 */
export const fetchProjectsByEquipmentTypes = (equipmentTypeRefs: string[]) => `
  *[_type == "project" && 
    references(^.equipmentTypes[]._ref) && 
    _id != ^._id] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    }
`