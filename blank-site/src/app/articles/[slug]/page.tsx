import { getArticleBySlug, getArticleSlugs } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  
  return slugs.map((slug: any) => ({
    slug: slug.slug
  }))
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
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
          <Link href="/articles" className="hover:underline">Articles</Link>
          {' > '}
          <span className="text-gray-900">{article.title}</span>
      </nav>

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

      {/* SEO Metadata */}
      {article.seo && (
        <div className="mt-8">
          {article.seo.title && <title>{article.seo.title}</title>}
          {article.seo.description && <meta name="description" content={article.seo.description} />}
        </div>
      )}
    </div>
  )
}