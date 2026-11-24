import { getParentSolutionSlugs, getParentSolutionBySlug, getChildSolutions, getRelatedProjectsBySolutionId, getRelatedArticlesBySolutionId } from '@/lib/sanity/queries/solutionsQuery'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import * as Types from '@/lib/sanity/types/types'
import ContentContainer from '@/components/layout/ContentContainer'

export async function generateStaticParams() {
  const parentSolutions = await getParentSolutionSlugs()
  return parentSolutions.map((parent: Types.ParentSlugType) => ({
    parentSlug: parent.slug.current,
  }))
}

export default async function ParentSolutionPage({
  params,
}: {
  params: Promise<{
    parentSlug: string
  }>
}) {
  const resolvedParams = await params;
  const parentSlug = resolvedParams.parentSlug;
  
  // Fetch the parent solution
  const parentSolution = await getParentSolutionBySlug(parentSlug)
  
  // If no parent solution found, trigger notFound
  if (!parentSolution) {
    notFound()
  }
  
  // Fetch related data using the parent solution's ID
  const childSolutions = await getChildSolutions(parentSolution._id)
  const relatedProjects = await getRelatedProjectsBySolutionId(parentSolution._id)
  const relatedArticles = await getRelatedArticlesBySolutionId(parentSolution._id)

  return (
    <ContentContainer>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: parentSolution.title },
        ]}
      />

      <h1 className="text-3xl font-bold mb-6">{parentSolution.title}</h1>
      
      {parentSolution.heroImage && (
        <div className="mb-8">
          <Image
            src={urlFor(parentSolution.heroImage.image).url()}
            alt={parentSolution.heroImage.alt || ''}
            className="w-full h-auto rounded-lg"
            width={800}
            height={450}
          />
        </div>
      )}
      
      {parentSolution.summary && (
        <p className="text-xl text-gray-600 mb-8">{parentSolution.summary}</p>
      )}
      
      {parentSolution.mainContent && (
        <div className="prose max-w-none">
          {parentSolution.mainContent.map((block: Types.PortableTextBlockType) => (
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

      {/* Child Solutions Section */}
      {childSolutions && childSolutions.length > 0 && (
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Child Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {childSolutions.map((solution: Types.ChildSolutionType) => (
              <Link 
                key={solution._id} 
                href={`/solutions/${parentSolution.slug.current}/${solution.slug.current}`}
                className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                {solution.summary && (
                  <p className="text-gray-600">{solution.summary}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
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
      <CallToAction variant="solution" />

    </ContentContainer>
  )
}