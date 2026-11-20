import Link from 'next/link'

interface CallToActionProps {
  heading?: string
  text?: string
}

export default function CallToAction({
  heading = 'Interested in learning more?',
  text = 'Talk with the Steelform team about your project requirements.',
}: CallToActionProps) {
  return (
    <section className="mt-12 mb-12 bg-blue-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        {heading}
      </h2>

      <p className="mb-6 max-w-2xl mx-auto">
        {text}
      </p>

      <Link
        href="/contact-us"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Contact Us
      </Link>
    </section>
  )
}