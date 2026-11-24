import { getProjectsForLandingPage } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import CallToAction from '@/components/CallToAction'
import * as Types from '@/lib/sanity/types/types'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import WideContainer from '@/components/layout/WideContainer'


export default async function ProjectsLandingPage() {
  const projects = await getProjectsForLandingPage()

  return (
    <WideContainer>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'projects' },
        ]}
      />


      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our latest projects and see how we've helped clients achieve their goals.
        </p>
      </header>

      {/* Projects Grid */}
      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Types.ProjectType) => (
            <Link 
              key={project._id} 
              href={`/projects/${project.slug.current}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
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
                
                {/* Project Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  
                  {/* Publish Date */}
                  {project.publishDate && (
                    <p className="text-sm text-gray-500 mb-3">
                      Published: {new Date(project.publishDate).toLocaleDateString()}
                    </p>
                  )}
                  
                  {/* Summary */}
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

      {/* Call To Action Section */}
      <CallToAction variant="project" />
      
    </WideContainer>
  )
}