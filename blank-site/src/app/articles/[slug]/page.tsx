import { getArticleBySlug, getArticleSlugs } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'
import WideContainer from '@/components/layout/WideContainer'

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
    <>
      {/* Breadcrumb */}
      <section className="bg-steelform-primary text-white text-center py-1">
        <WideContainer>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: article.title },
            ]}
          />
        </WideContainer>
      </section>
        

      {/* Hero Section */}
      <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          <h1 className="text-3xl font-bold mb-6 text-white">{article.title}</h1>
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
        </WideContainer>
      </section>

      {/* Artcile Main Content */}
      <section className="bg-white text-steelform-secondary py-6">
        <ContentContainer>
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
        </ContentContainer>
      </section>

      {/* Call To Action Section */}
      <section className="bg-steelform-light text-steelform-secondary py-4">
        <WideContainer>
          <div className="text-center text-steelform-secondary">
            <CallToAction variant="article" />
          </div>
        </WideContainer>
      </section>

      {/* SEO Metadata */}
      {/* {article.seo && (
        <div className="mt-8">
          {article.seo.title && <title>{article.seo.title}</title>}
          {article.seo.description && <meta name="description" content={article.seo.description} />}
        </div>
      )} */}
    </>
  )
}