import { getPageBySlug } from '@/lib/sanity/queries/pagesQuery'
import { getParentSolutions } from '@/lib/sanity/queries/solutionsQuery'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import * as Types from '@/lib/sanity/types/types'

export default async function SolutionsLandingPage() {
  // Fetch the solutions landing page content
  const page = await getPageBySlug('solutions')
  
  // If no page found, we could throw notFound or handle gracefully
  if (!page) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Solutions</h1>
        <p>Page content not found.</p>
      </div>
    )
  }

  // Fetch parent solutions for the cards
  const parentSolutions = await getParentSolutions()

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
        ]}
      />

      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      
      {page.heroImage && (
        <div className="mb-8">
          <Image
            src={urlFor(page.heroImage.image).url()}
            alt={page.heroImage.alt || ''}
            className="w-full h-auto rounded-lg"
            width={800}
            height={450}
          />
        </div>
      )}
      
      {page.summary && (
        <p className="text-xl text-gray-600 mb-8">{page.summary}</p>
      )}
      
      {page.mainContent && (
        <div className="prose max-w-none">
          {page.mainContent.map((block: Types.PortableTextBlockType) => (
            <div key={block._key}>
              {block._type === 'block' && block.children?.map((child: Types.PortableTextChildType) => (
                <p key={child.text}>{child.text}</p>
              ))}
              {block._type === 'image' && block.image?.asset?._ref && (
                <div className="my-4">
                  <Image
                    src={urlFor(block.image).url()}
                    alt=""
                    className="w-full h-auto rounded-lg"
                    width={800}
                    height={450}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Parent Solutions Section */}
      {parentSolutions && parentSolutions.length > 0 && (
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Parent Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parentSolutions.map((solution: Types.SolutionType) => (
              <Link 
                key={solution._id} 
                href={`/solutions/${solution.slug.current}`}
                className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {solution.heroImage && (
                  <div className="mb-4">
                    <Image
                      src={urlFor(solution.heroImage.image).url()}
                      alt={solution.heroImage.alt || solution.title}
                      className="w-full h-auto rounded-lg object-cover"
                      width={300}
                      height={200}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                {solution.summary && (
                  <p className="text-gray-600">{solution.summary}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Call-to-Action Section */}
      <CallToAction variant="solution-landing" />

    </div>
  )
}