import { client } from '../client'

export const getProjectBySlug = async (slug: string) => {
  'use cache'
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
  'use cache'
  const query = `
    *[_type == 'project' && defined(slug.current)]{
      "slug": slug.current
    }
  `

  return client.fetch(query)
}