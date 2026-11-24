import { getArticleBySlug, getArticleSlugs } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  
  return slugs.map((article: {slug: string}) => ({
    slug: article.slug  }))
}


export default async function ArticlePage({
  params
}:{
    params: Promise<{
      slug: string
    }>
  }) {
  const resolvedParams = await params;
  const articleSlug = resolvedParams.slug;
  
  // Fetch the article by slug
  const article = await getArticleBySlug(articleSlug)

  // If no article found, throw notFound to show 404 page
  if (!article) {
    return notFound()
  }

  return (
    <ContentContainer>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: article.title },
        ]}
      />

      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

      {article.heroImage && (
        <div className="mb-8">
          <Image
            src={urlFor(article.heroImage.image).url()}
            alt={article.heroImage.alt || ''}
            className="w-full h-auto rounded-lg"
            width={800}
            height={450}
          />
        </div>
      )}

      {article.mainContent && (
        <div className="prose max-w-none">
          {article.mainContent.map((block: Types.PortableTextBlockType) => (
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

      {/* Call To Action Section */}
      <CallToAction variant="article" />

      {/* SEO Metadata */}
      {article.seo && (
        <div className="mt-8">
          {article.seo.title && <title>{article.seo.title}</title>}
          {article.seo.description && <meta name="description" content={article.seo.description} />}
        </div>
      )}
    </ContentContainer>
  )
}