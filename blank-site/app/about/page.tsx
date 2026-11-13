import Link from 'next/link'
import { client } from '@/sanity/lib/client'

export default async function AboutPage() {
  const aboutData = await client.fetch(
    `*[_type == "page" && slug.current == "about"][0]`
  )

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <nav className="mb-8 flex gap-4 border-b pb-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="font-bold">About</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        {aboutData?.title || 'About Us'}
      </h1>
      <p className="text-gray-700">
        {aboutData?.content || 'Publish an "about" page in Sanity Studio to replace this text.'}
      </p>
    </main>
  )
}
