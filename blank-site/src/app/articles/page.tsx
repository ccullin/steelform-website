import { getArticlesForLandingPage } from '@/lib/sanity/queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'
import WideContainer from '@/components/layout/WideContainer'

export default async function ArticlesLandingPage() {
  // Fetch all articles for the landing page
  const articles = await getArticlesForLandingPage()
  
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-steelform-primary text-white text-center py-1">
        <WideContainer>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'artciles'},
            ]}
          />
        </WideContainer>
      </section>

      {/* Hero Section */}
      <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          <h1 className="text-3xl font-bold mb-6 text-white">Industry and steel fabrication related articles.</h1>
          <p>You can find equipment, industry, solution and product related articles from the main menu</p>
        </WideContainer>
      </section>
      
      {/* Article Card Gallery */}
      <section className="bg-white text-steelform-secondary py-12">
        {articles && articles.length > 0 ? (
          <WideContainer>
            <h2 className="text-2xl font-bold mb-6">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {articles.map((article: Types.ArticleType) => (
                <Link 
                  key={article._id} 
                  href={`/articles/${article.slug.current}`}
                  className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    {article.heroImage && article.heroImage.image && (
                      <div className="w-full h-auto rounded-lg object-cover">
                        <Image
                          src={urlFor(article.heroImage.image).width(600).height(400).fit('crop').url()}
                          alt={article.heroImage.alt || article.title}
                          className="w-full h-auto rounded-lg object-cover"
                          width={300}
                          height={200}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {article.title}
                      </h3>
                      {article.publishDate && (
                        <p className="text-xl font-semibold mb-2">
                          Published: {new Date(article.publishDate).toLocaleDateString()}
                        </p>
                      )}
                      {article.summary && (
                        <p className="text-gray-600">
                          {article.summary}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </WideContainer>
        ) : (
          <div>
            <p>No articles found.</p>
          </div>
        )}
      </section>
      
      {/* Call To Action Section */}
      <section className="bg-steelform-light text-steelform-secondary py-4">
        <WideContainer>
          <div className="text-center text-steelform-secondary">
            <CallToAction variant="article" />
          </div>
        </WideContainer>
      </section>
    </>
  )
}