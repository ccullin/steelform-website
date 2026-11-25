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
    <>
      
      {/* Breadcrumb */}
      <section className="bg-steelform-primary text-white text-center py-1">
        <WideContainer>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'projects' },
            ]}
          />
        </WideContainer>
      </section>
        


      {/* Hero Section */}
      <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          <h1 className="text-3xl font-bold mb-6 text-white">Completed Jobs for Reference</h1>
          <p>Explore our latest projects and see how we\'ve helped customers.</p>
        </WideContainer>
      </section>


      {/* Project Card Gallery */}
      <section className="bg-white text-steelform-secondary py-12">
        {projects && projects.length > 0 && (
          <WideContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project: Types.ProjectType) => (
                <Link 
                  key={project._id} 
                  href={`/projects/${project.slug.current}`}
                  className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  {project.heroImage && (
                    <div className="mb-4">
                      <Image
                        src={urlFor(project.heroImage.image).url()}
                        alt={project.heroImage.alt || project.title}
                        className="w-full h-auto rounded-lg object-cover"
                        width={300}
                        height={200}
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  
                  {/* Publish Date */}
                  {/* {project.publishDate && (
                    <p className="text-sm text-gray-500 mb-3">
                      Published: {new Date(project.publishDate).toLocaleDateString()}
                    </p>
                  )} */}
                  
                  {/* Summary */}
                  {project.summary && (
                    <p className="text-gray-600">{project.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </WideContainer>
        )}
      </section>

      {/* Call To Action Section */}
      <section className="bg-steelform-light text-steelform-secondary py-4">
        <WideContainer>
          <div className="text-center text-steelform-secondary">
            <CallToAction variant="project" />
          </div>
        </WideContainer>
      </section>
      
    </>
  )
}