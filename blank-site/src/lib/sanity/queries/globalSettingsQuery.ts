import { client } from '../client'

export const getGlobalSettings = async () => {
  'use cache'
  const query = `
    *[_type == 'globalSettings'][0]{
      _id,
      businessName,
      phoneNumber,
      emailAddress,
      businessAddress,
      ABN,
      socialLinks,
      primaryCtaLabel,
      secondaryCtaLabel,
      logoForLightBackground,
      logoForDarkBackground,
      faviconForLightBackground,
      faviconForDarkBackground
    }
  `

  return client.fetch(query)
}