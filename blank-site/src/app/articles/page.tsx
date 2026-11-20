import { getArticlesForLandingPage } from '@/lib/sanity/queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'

export default async function ArticlesLandingPage() {
  // Fetch all articles for the landing page
  const articles = await getArticlesForLandingPage()
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      
      <p className="mb-8 text-lg">
        View our latest articles and insights.
      </p>
      
      {/* Article Card Gallery */}
      {articles && articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article: Types.ArticleType) => (
            <Link 
              key={article._id} 
              href={`/articles/${article.slug.current}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {article.heroImage && article.heroImage.image && (
                  <div className="h-48 w-full relative">
                    <Image
                      src={urlFor(article.heroImage.image).width(600).height(400).fit('crop').url()}
                      alt={article.heroImage.alt || article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  {article.publishDate && (
                    <p className="text-gray-500 text-sm mb-3">
                      Published: {new Date(article.publishDate).toLocaleDateString()}
                    </p>
                  )}
                  {article.summary && (
                    <p className="text-gray-700 line-clamp-2">
                      {article.summary}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found.</p>
        </div>
      )}
      
      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-6 text-center mb-8">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="mb-4">Subscribe to our newsletter for the latest articles and insights.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  )
}