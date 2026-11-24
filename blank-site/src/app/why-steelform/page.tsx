import { getPageBySlug } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'

export default async function WhySteelformPage() {
  // Fetch the page by slug
  const page = await getPageBySlug('why-steelform')

  // If no page found, throw notFound to show 404 page
  if (!page) {
    return notFound()
  }

  return (
    <ContentContainer>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why Steelform', href: '/why-steelform' },
        ]}
      />

      {/* Hero Image */}
      {page.heroImage && (
        <div className="mb-8">
          <Image
            src={urlFor(page.heroImage.image).url()}
            alt={page.heroImage.alt || page.title}
            className="w-full h-auto rounded-lg"
            width={800}
            height={450}
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>

      {/* Summary */}
      {page.summary && (
        <p className="text-xl text-gray-600 mb-8">{page.summary}</p>
      )}

      {/* Main Content */}
      {page.mainContent && page.mainContent.length > 0 && (
        <div className="prose prose-lg max-w-none mb-12">
          {page.mainContent.map((block: Types.PortableTextBlockType, index: number) => {
            if (block._type === 'image') {
              return (
                <div key={index} className="my-8">
                  <Image
                    src={urlFor(block.image?.asset?._ref || '').url()}
                    alt={page.seo.title || page.title}
                    className="w-full h-auto rounded-lg"
                    width={800}
                    height={450}
                  />
                </div>
              )
            }
            
            // For block content
            return (
              <p key={index} className="mb-4">
                {block.children?.map((child: Types.PortableTextChildType, childIndex: number) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            )
          })}
        </div>
      )}

      {/* Call To Action */}
      <CallToAction variant="why-steelform" />

      {/* SEO Metadata */}
      {page.seo && (
        <div className="mt-8">
          {page.seo.title && <title>{page.seo.title}</title>}
          {page.seo.description && <meta name="description" content={page.seo.description} />}
        </div>
      )}
    </ContentContainer>
  )
}