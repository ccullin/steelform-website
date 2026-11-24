import ContactForm from '@/components/ContactForm'
import { getContactUsPageData } from '@/lib/sanity/queries/contactUsPageQuery'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'

export default async function ContactUsPage() {
  const { page, globalSettings } = await getContactUsPageData()
  
  // Generate Google Maps URL from business address
const googleMapsUrl = globalSettings?.businessAddress
  ? `https://www.google.com/maps?q=${encodeURIComponent(
      globalSettings.businessAddress
    )}&output=embed`
  : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: page.title },
        ]}
      />

      {/* Hero Section */}
      {page?.heroImage && (
        <section className="relative h-64 md:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <Image 
            src={page.heroImage.asset.url} 
            alt={page.heroImage.alt || page.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12">
            <h1 className="text-white text-3xl md:text-5xl font-bold max-w-4xl">
              {page.title}
            </h1>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              
              {globalSettings?.businessAddress && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-2">Business Address</h3>
                  <p className="text-gray-600 whitespace-pre-line">{globalSettings.businessAddress}</p>
                  
                  {googleMapsUrl && (
                    <a 
                      href={googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View on Google Maps
                    </a>
                  )}
                </div>
              )}

              {globalSettings?.phoneNumber && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                  <p className="text-gray-600">{globalSettings.phoneNumber}</p>
                </div>
              )}

              {globalSettings?.emailAddress && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <p className="text-gray-600">{globalSettings.emailAddress}</p>
                </div>
              )}

              {globalSettings?.ABN && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">ABN</h3>
                  <p className="text-gray-600">{globalSettings.ABN}</p>
                </div>
              )}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday and Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              
              {/* Google Maps */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Drop in for a visit</h2>
                {googleMapsUrl && (
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="450"
                    className="rounded-lg border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>

              {/* Contact Form */}
              <ContactForm />
          
            </div>
          </div>
        </div>

        {/* Additional Content from Page */}
        {page?.mainContent && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <div className="prose max-w-none">
              {page.mainContent.map((block: any, index: number) => (
                <p key={index} className="mb-4 text-gray-700">
                  {block.children?.map((child: any) => child.text).join(' ')}
                </p>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}