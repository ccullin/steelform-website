// src/lib/sanity.js

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pf2xnwzy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2021-03-25',
  useCdn: false, // Set to true for production
  token: 'skwOAlmkAxIt0jmB29M3GFTstIP3H8b3LGQvF9fkD5GwcDFQc5fh5ZieJ6VE0jNPZ4wG80tNjajJWpp5TZue86Rlysyo0TTXvYSTpUNtGmtSfeVeIgPUMRVLwh4XZxgb4x2s7BAk1nWRgQd8Yz0yYri2s6PmcRBcLn8tguHVLUvOBjLmrCzH'
})

// Helper function to fetch homepage data
export async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    title,
    heroBanner,
    aboutSection,
    productsSection,
    contactSection,
    seo
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

// Helper function to fetch service data
export async function getServicesData() {
  const query = `*[_type == "service"]{
    title,
    slug,
    description,
    content
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching services data:', error)
    return []
  }
}

// Helper function to fetch about page data 
export async function getAboutData() {
  const query = `*[_type == "page" && slug.current == "about"][0]{
    title,
    content
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching about page data:', error)
    return null
  }
}

// Helper function to fetch portfolio data 
export async function getPortfolioData() {
  const query = `*[_type == "product"]{
    title,
    slug,
    description,
    content
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return []
  }
}