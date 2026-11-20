import { client } from '../client'

export async function getPageBySlug(slug: string) {
  'use cache'
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      slug,
      heroImage,
      seo,
      summary,
      mainContent
    }`,
    { slug }
  )
}