import Head from 'next/head';
import Link from 'next/link';
import { client } from '../lib/sanity';

export default function Home({ homeData }) {
  // If we don't have data, show placeholder content (for development)
  const heroBanner = homeData?.heroBanner || {
    images: [{ asset: { url: '/images/hero-placeholder.jpg' } }],
    callToActionText: 'Get a Free Quote'
  };

  const aboutSection = homeData?.aboutSection || {
    title: 'About Us',
    content: [
      {
        children: [
          { text: 'Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne.' }
        ]
      }
    ],
    certificationLogo: { asset: { url: '/images/certification-logo.png' } }
  };

  const productsSection = homeData?.productsSection || {
    title: 'Our Products',
    products: [
      { 
        name: 'Custom Fabrication', 
        image: { asset: { url: '/images/product-placeholder.jpg' } },
        link: '/services'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SteelForm Engineering - Mining & Earthmoving Equipment Manufacturers</title>
        <meta name="description" content="Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,500&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="header bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="SteelForm Engineering Logo" className="h-12" />
            </a>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/"><a className="text-blue-600 font-bold">Home</a></Link></li>
              <li><Link href="/services"><a className="text-gray-700 hover:text-blue-600">Services</a></Link></li>
              <li><Link href="/about"><a className="text-gray-700 hover:text-blue-600">About Us</a></Link></li>
              <li><Link href="/portfolio"><a className="text-gray-700 hover:text-blue-600">Portfolio</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-700 hover:text-blue-600">Contact</a></Link></li>
            </ul>
          </nav>
          <Link href="/quote">
            <a className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Get a Free Quote
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">SteelForm Engineering</h1>
          <p className="text-xl max-w-2xl mb-8 opacity-90">
            Mining & Earthmoving Equipment Manufacturers
          </p>
          <Link href="/quote">
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
              {heroBanner.callToActionText || 'Get a Free Quote'}
            </a>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              {aboutSection?.content && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutSection.content[0]?.children?.[0]?.text || 'Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne.'}
                </p>
              )}
            </div>
            <div className="md:w-1/2">
              {aboutSection?.certificationLogo && (
                <img 
                  src={aboutSection.certificationLogo.asset.url} 
                  alt="Certification Logo" 
                  className="max-w-full h-auto rounded-lg shadow"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {productsSection?.title || 'Our Products'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(productsSection?.products || []).map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {product.image && (
                  <img 
                    src={product.image.asset.url} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <Link href="/services">
                    <a className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-10">
            Ready to discuss your project? Contact us today for a free consultation and quote.
          </p>
          
          <div className="max-w-md mx-auto">
            <Link href="/contact">
              <a className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                Contact Us Now
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/images/logo.png" alt="SteelForm Engineering Logo" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm">© 2023 SteelForm Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  try {
    let homeData = {};
    
    // Only attempt to fetch if we have the required environment variables (production context)
    // if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.SANITY_API_TOKEN) {
      const { client } = require('../lib/sanity');
      
      // Check that client exists before trying to use it
    if (client && typeof client.fetch === 'function') {
      // Fetch data from Sanity CMS
      homeData = await client.fetch(`*[_type == "homePage"][0]{
        title,
        heroBanner,
        aboutSection,
        productsSection,
        contactSection,
        seo
      }`);
    }
    // }
    
    return {
      props: {
        homeData: homeData || {}
      },
      revalidate: 60, // Refresh every minute for demo purposes
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return empty object in case of error to prevent build failure
    return {
      props: {
        homeData: {}
      }
    };
  }
}