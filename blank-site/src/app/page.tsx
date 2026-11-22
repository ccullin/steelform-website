import { getPageBySlug, getParentSolutions, getProjectsForLandingPage } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'

export default async function HomePage() {
  // Fetch homepage content
  const page = await getPageBySlug('home')
  
  // If no home page found, throw notFound to show 404 page
  if (!page) {
    return notFound()
  }

  // Fetch featured solutions and projects
  const featuredSolutions = await getParentSolutions()
  const featuredProjects = await getProjectsForLandingPage()
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {page.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
              {page.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact-us" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                {'Contact Us'}
              </Link>
              <Link 
                href="/solutions" 
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white/10 transition-colors"
              >
                {'View Solutions'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action - Why Steelform Teaser */}
      <CallToAction variant="home" />

      {/* Featured Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of specialized steel fabrication services designed to meet your unique requirements.
            </p>
          </div>

          {featuredSolutions && featuredSolutions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSolutions.map((solution: Types.SolutionType) => (
                <Link 
                  key={solution._id} 
                  href={`/solutions/${solution.slug.current}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {solution.heroImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={urlFor(solution.heroImage.image).url()}
                          alt={solution.heroImage.alt || solution.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>
                      
                      {solution.summary && (
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {solution.summary}
                        </p>
                      )}
                      
                      <div className="mt-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          View Solution
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No solutions found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped clients achieve their goals.
            </p>
          </div>

          {featuredProjects && featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project: Types.ProjectType) => (
                <Link 
                  key={project._id} 
                  href={`/projects/${project.slug.current}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {project.heroImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={urlFor(project.heroImage.image).url()}
                          alt={project.heroImage.alt || project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      
                      {project.summary && (
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.summary}
                        </p>
                      )}
                      
                      <div className="mt-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-900 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Get in touch with our team today to discuss your requirements and how we can help you achieve your goals.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Metadata */}
      {page.seo && (
        <div className="mt-8">
          {page.seo.title && <title>{page.seo.title}</title>}
          {page.seo.description && <meta name="description" content={page.seo.description} />}
        </div>
      )}
    </div>
  )
}