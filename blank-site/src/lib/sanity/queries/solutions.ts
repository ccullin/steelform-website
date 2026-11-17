import { client } from '../client'

export const getSolutionBySlug = async (slug: string) => {
  const query = `
    *[_type == 'solution' && slug.current == $slug][0]{
      _id,
      title,
      solutionType,
      parent->{
        _id,
        title,
        slug
      },
      slug,
      seo,
      heroImage,
      summary,
      mainContent
    }
  `

  return client.fetch(query, { slug })
}

export const getParentSolutionBySlug = async (slug: string) => {
  const query = `
    *[_type == 'solution' && solutionType == 'parent' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seo,
      heroImage,
      summary,
      mainContent
    }
  `

  return client.fetch(query, { slug })
}

export const getChildSolutions = async (parentId: string) => {
  const query = `
    *[_type == 'solution' && solutionType == 'child' && references($parentId)]{
      _id,
      title,
      slug,
      summary
    }
  `

  return client.fetch(query, { parentId })
}

export const getChildSolutionWithParent = async (parentSlug: string, childSlug: string) => {
  const query = `
    *[_type == 'solution' && solutionType == 'child' && slug.current == $childSlug][0]{
      _id,
      title,
      solutionType,
      parent->{
        _id,
        title,
        slug
      },
      slug,
      seo,
      heroImage,
      summary,
      mainContent
    }
  `

  return client.fetch(query, { childSlug })
}