import Link from 'next/link'
import { client } from '@/sanity/lib/client'

export default async function HomePage() {
  // Fetches the first document with slug "home"
  const homeData = await client.fetch(
    `*[_type == "page" && slug.current == "home"][0]`
  )

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <nav className="mb-8 flex gap-4 border-b pb-4">
        <Link href="/" className="font-bold">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        {homeData?.title || 'Welcome to the Placeholder Site'}
      </h1>
      <p className="text-gray-700">
        {homeData?.content || 'Publish a "home" page in Sanity Studio to replace this text.'}
      </p>
    </main>
  )
}
