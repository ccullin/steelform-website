import Link from 'next/link'

type CallToActionVariant =
  | 'solution'
  | 'solution-landing'
  | 'article'
  | 'project'
  | 'why-steelform'
  | 'home'
  | 'header'

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
    heading: 'Got a question about your project?',
    text: 'Ask us and we\'ll help if we can.',
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

  header: {
    buttonText: 'Get a Free Quote',
  }
}

export default function CallToAction({
  variant = 'home',
}: CallToActionProps) {
  const content = CTA_CONTENT[variant]

  return (
    <>
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
        className="inline-block bg-steelform-accent text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
      >
        {content.buttonText}
      </Link>
      
    </>
  )
}