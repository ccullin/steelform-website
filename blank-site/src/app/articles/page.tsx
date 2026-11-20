import { getArticleSlugs } from '@/lib/sanity/queries'
import Link from 'next/link'

export default async function ArticlesLandingPage() {
  // For now, we'll just show a basic page - in the future this could list all articles
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      
      <p>View our latest articles and insights.</p>
      
      {/* This would be where we list all articles */}
      <div className="mt-8">
        <Link href="/articles" className="text-blue-600 hover:underline">
          View All Articles
        </Link>
      </div>
    </div>
  )
}