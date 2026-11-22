import Link from 'next/link'

type CallToActionVariant =
  | 'solution'
  | 'solution-landing'
  | 'article'
  | 'project'
  | 'why-steelform'
  | 'home'

interface CallToActionProps {
  variant?: CallToActionVariant
}

type CTAContent = {
  heading?: string
  text?: string
  buttonText: string
}

const CTA_CONTENT: Record<CallToActionVariant, CTAContent> = {

  solution: {
    heading: 'Have a similar requirement in mind?',
    text: 'Contact us for a quote.',
    buttonText: 'Request a Quote',
  },

  'solution-landing': {
    heading: 'Do you have a specific requirement?',
    text: 'Whether it\'s repair, replacement, custom or urgent Steelform can help.',
    buttonText: 'Contact Us',
  },

  article: {
    buttonText: 'Contact Us',
  },
    
  project: {
    heading: 'Need something similar?',
    text: 'Contact us for a quote.',
    buttonText: 'Request a Quote',
  },

  'why-steelform': {
    heading: 'Locally made and supported',
    text: 'Over 30 years of heavy metal fabrication experience.',
    buttonText: 'Request a Quote',
  },

  home: {
    heading: 'Why Choose Steelform?',
    text: 'With 30 years in steel fabrication we have a track record you can bank on.',
    buttonText: 'Contact Us',
  },
}

export default function CallToAction({
  variant = 'home',
}: CallToActionProps) {
  const content = CTA_CONTENT[variant]

  return (
    <section className="cta-section mt-12 mb-12">
      <div className="bg-blue-50 rounded-lg p-8 text-center">

        {content.heading && (
          <h2 className="cta-heading text-2xl font-bold mb-4">
            {content.heading}
          </h2>
        )}

        {content.text && (
          <p className="cta-text mb-6 max-w-2xl mx-auto">
            {content.text}
          </p>
        )}

        <Link
          href="/contact-us"
          className="cta-button inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {content.buttonText}
        </Link>

      </div>
    </section>
  )
}