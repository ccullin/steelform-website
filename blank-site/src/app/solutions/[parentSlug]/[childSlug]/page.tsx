import { getChildSolutionWithParent, getRelatedProjectsBySolutionId, getRelatedArticlesBySolutionId, getAllChildSolutionsWithParent } from '@/lib/sanity/queries/solutionsQuery'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'
import * as Types from '@/lib/sanity/types/types'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'
import WideContainer from '@/components/layout/WideContainer'

export async function generateStaticParams() {
  // Fetch all child solutions with their parent information
  const childSolutions = await getAllChildSolutionsWithParent()
  
  // Return array of param objects for each combination
  return childSolutions.map((child: Types.ChildSlugType) => ({
    parentSlug: child.parent.slug.current,
    childSlug: child.slug.current,
  }))
}

export default async function ChildSolutionPage({
  params,
}: {
  params: Promise<{
    parentSlug: string
    childSlug: string
  }>
}) {
  const { parentSlug, childSlug } = await params

  // Fetch the child solution with its parent
  const childSolution = await getChildSolutionWithParent(parentSlug, childSlug)
  
  // If no solution found, return a 404
  if (!childSolution) {
    notFound()
  }

  const [relatedProjects, relatedArticles] = await Promise.all([
    getRelatedProjectsBySolutionId(childSolution._id),
    getRelatedArticlesBySolutionId(childSolution._id),
  ])

  return (
    <>
      
      {/* Breadcrumb */}
      <section className="bg-steelform-primary text-white text-center py-1">
        <WideContainer>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Solutions', href: '/solutions' },
              {
                label: childSolution.parent.title,
                href: `/solutions/${childSolution.parent.slug.current}`,
              },
              { label: childSolution.title },
            ]}
          />
        </WideContainer>
      </section>
      
      {/* Hero Section */}
      <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          {childSolution.heroImage && (
            <div className="mb-8">
              <Image
                src={urlFor(childSolution.heroImage.image).url()}
                alt={childSolution.heroImage.alt || ''}
                className="w-full h-auto rounded-lg"
                width={800}
                height={450}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-6">{childSolution.seo.title}</h1>
          {childSolution.summary && (
            <p className="text-xl text-gray-600 mb-8">{childSolution.summary}</p>
          )}
        </WideContainer>
      </section>
      
      {/* Main Content Section */}
      {/* <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          {childSolution.mainContent && (
            <div className="prose max-w-none">
              {childSolution.mainContent.map((block: Types.PortableTextBlockType) => (
                <div key={block._key}>
                  {block._type === 'block' && block.children?.map((child) => (
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
        </WideContainer>
      </section> */}
        

      {/* Related Projects Section */}
      <section className="bg-white text-steelform-secondary py-12">
        {relatedProjects && relatedProjects.length > 0 && (
          <WideContainer>
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project: Types.ProjectType) => (
                <Link 
                  key={project._id} 
                  href={`/projects/${project.slug.current}`}
                  className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  {project.heroImage && (
                    <div className="mb-4">
                      <Image
                        src={urlFor(project.heroImage.image).url()}
                        alt={project.heroImage.alt || project.title}
                        className="w-full h-auto rounded-lg object-cover"
                        width={300}
                        height={200}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  {project.summary && (
                    <p className="text-gray-600">{project.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </WideContainer>
        )}
      </section>

      {/* Related Articles Section */}
      <section className="bg-white text-steelform-secondary py-12">
        {relatedArticles && relatedArticles.length > 0 && (
          <WideContainer>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article: Types.ArticleType) => (
                <Link 
                  key={article._id} 
                  href={`/articles/${article.slug.current}`}
                  className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  {article.heroImage && (
                    <div className="mb-4">
                      <Image
                        src={urlFor(article.heroImage.image).url()}
                        alt={article.heroImage.alt || article.title}
                        className="w-full h-auto rounded-lg object-cover"
                        width={300}
                        height={200}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  {article.summary && (
                    <p className="text-gray-600">{article.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </WideContainer>
        )}
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-steelform-light text-steelform-secondary py-4">
        <WideContainer>
          <div className="text-center text-steelform-secondary">
            <CallToAction variant="solution" />
          </div>
        </WideContainer>
      </section>
      
    </>
  )
}