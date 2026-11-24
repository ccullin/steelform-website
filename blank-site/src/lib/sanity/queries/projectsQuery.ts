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

      solutions[]->{
        _id,
        title,
        slug,
        solutionType,
        parent->{
          _id,
          title,
          slug
        }
      },

      industries,
      equipmentTypes
    }
  `

  return client.fetch(query, { slug })
}

export const getProjectSlugs = async () => {
  const query = `
    *[_type == 'project' && defined(slug.current)]{
      "slug": slug.current
    }
  `

  return client.fetch(query)
}

export const getProjectsForLandingPage = async () => {
  const query = `
    *[_type == 'project'] | order(publishDate desc){
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