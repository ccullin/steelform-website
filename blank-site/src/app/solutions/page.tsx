import { getPageBySlug } from '@/lib/sanity/queries/pagesQuery'
import { getParentSolutions } from '@/lib/sanity/queries/solutionsQuery'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import * as Types from '@/lib/sanity/types/types'
import ContentContainer from '@/components/layout/ContentContainer'
import WideContainer from '@/components/layout/WideContainer'

export default async function SolutionsLandingPage() {
  // Fetch the solutions landing page content
  const page = await getPageBySlug('solutions')
  
  // If no page found, we could throw notFound or handle gracefully
  if (!page) {
    return (
      <WideContainer>
        <h1 className="text-3xl font-bold mb-6">Solutions</h1>
        <p>Page content not found.</p>
      </WideContainer>
    )
  }

  // Fetch parent solutions for the cards
  const parentSolutions = await getParentSolutions()

  return (
    <>
    {/* Breadcrumb */}
    <section className="bg-steelform-primary text-white text-center py-1">
      <WideContainer>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
          ]}
        />
      </WideContainer>
    </section>

    {/* Hero Image Section */}
    <section className="bg-steelform-primary text-steelform-light text-center py-2">
      <WideContainer> 
        {/* {page.heroImage && (
          <div className="mb-8">
            <Image
              src={urlFor(page.heroImage.image).url()}
              alt={page.heroImage.alt || ''}
              className="w-full h-auto rounded-lg"
              width={800}
              height={450}
            />
          </div>
        )}  */}
       
        {page.seo.title && (
          <h1 className="text-3xl font-bold mb-6 text-white">{page.seo.title}</h1>
        )}
 
          
        {page.summary && (
            <p>{page.summary}</p>    
        )}
          
        {/* {page.mainContent && (
          <div className="prose max-w-none ">
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
        )} */}
      </WideContainer>
    </section>

    {/* Parent Solutions Cards Section */ }
    <section className="bg-white text-steelform-secondary">
      <WideContainer>
        {parentSolutions && parentSolutions.length > 0 && (
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Solutions</h2>
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
                    <p>{solution.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </WideContainer>
    </section>


    {/* Call-to-Action Section */}
    <section className="bg-steelform-light py-4">
      <WideContainer>
        <div className="text-center text-steelform-secondary">
          <CallToAction variant="solution-landing" />     
        </div>
      </WideContainer>
    </section>
  </>  
  )
}