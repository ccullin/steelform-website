import { getChildSolutionWithParent, getRelatedProjectsBySolutionId, getRelatedArticlesBySolutionId, getAllChildSolutionsWithParent } from '@/lib/sanity/queries/solutionsQuery'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'
import * as Types from '@/lib/sanity/types/types'
import Breadcrumb from '@/components/Breadcrumb'

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
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
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
      
      <h1 className="text-3xl font-bold mb-6">{childSolution.title}</h1>
      
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
      
      {childSolution.summary && (
        <p className="text-xl text-gray-600 mb-8">{childSolution.summary}</p>
      )}
      
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

      {/* Related Projects Section */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="mt-12 mb-12">
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
        </section>
      )}

      {/* Related Articles Section */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="mt-12 mb-12">
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
        </section>
      )}

      {/* Call-to-Action Section */}
      <section className="mt-12 mb-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in this solution?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Learn more about how our solutions can help you achieve your goals.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}