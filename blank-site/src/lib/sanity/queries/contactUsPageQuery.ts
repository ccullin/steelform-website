import { client } from '../client'
import { getGlobalSettings } from './globalSettingsQuery'

export async function getContactUsPageData() {
  
  // Get the contact-us page content
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "contact-us"][0]{
      title,
      slug,
      heroImage,
      seo,
      summary,
      mainContent
    }`,
    { slug: 'contact-us' }
  )
  
  // Get global settings for business address and other contact info
  const globalSettings = await getGlobalSettings()
  
  return {
    page,
    globalSettings
  }
}