/**
 * GROQ queries for solution pages
 */

/**
 * Fetch a single solution page with related content
 */
export const fetchSolutionPageData = (slug: string) => `
  *[_type == "solution" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    heroImage,
    summary,
    mainContent,
    "relatedProjects": *[
      _type == "project" && 
      references(^._id)
    ] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    },
    "relatedArticles": *[
      _type == "article" && 
      references(^._id)
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
 * Fetch related solutions for cross-linking
 */
export const fetchRelatedSolutions = (solutionId: string) => `
  *[_type == "solution" && references(^._id) && _id != ^._id][0..3]{
    _id,
    title,
    slug,
    heroImage,
    summary
  }
`

/**
 * Fetch projects related to the same industries as this solution
 */
export const fetchProjectsBySolutionIndustries = (solutionId: string) => `
  *[_type == "project" && 
    references(^._id) && 
    !references(^._id)] | order(_createdAt desc)[0..3] {
      _id,
      title,
      slug,
      heroImage,
      summary
    }
`