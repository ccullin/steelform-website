import { getProjectBySlug, getProjectSlugs } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import * as Types from '@/lib/sanity/types/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CallToAction from '@/components/CallToAction'
import ContentContainer from '@/components/layout/ContentContainer'
import WideContainer from '@/components/layout/WideContainer'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  
  return slugs.map((project: {slug: string}) => ({
    slug: project.slug
  }))
}

export default async function ProjectPage({
  params
}:{ 
  params: Promise<{
    slug: string
  }>
}) {
  const resolvedParams = await params;
  const projectSlug = resolvedParams.slug;
  
  // Fetch the project by slug
  const project = await getProjectBySlug(projectSlug)

  // If no project found, throw notFound to show 404 page
  if (!project) {
    return notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-steelform-primary text-white text-center py-1">
        <WideContainer>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />
        </WideContainer>
      </section>

      {/* Hero Section */}
      <section className="bg-steelform-primary text-steelform-light text-center py-2">
        <WideContainer>
          <h1 className="text-3xl font-bold mb-6 text-white">{project.title}</h1>
          {project.heroImage && (
            <div className="mb-8">
              <Image
                src={urlFor(project.heroImage.image).url()}
                alt={project.heroImage.alt || project.title}
                className="w-full h-auto rounded-lg"
                width={800}
                height={450}
              />
            </div>
          )}
          {/* Summary */}
          {project.summary && (
            <p>{project.summary}</p>
          )}
        </WideContainer>
      </section>



      {/* Gallery Section */}
      <section className="bg-white text-steelform-secondary py-12">
        {project.gallery && project.gallery.length > 0 && (
          <WideContainer>
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {project.gallery.map((image: Types.HeroImageType, index: number) => (
                <div key={index} className="mb-4">
                  <Image
                    src={urlFor(image.image).url()}
                    alt={image.alt || project.title}
                    className="w-full h-auto rounded-lg object-cover"
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </WideContainer>
        )}
      </section>

      {/* Solutions Used Section */}
      {/* {project.solutions && project.solutions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Solutions Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.solutions.map((solution: Types.SolutionType) => (
              <Link 
                key={solution._id} 
                href={`/solutions/${solution.parent?.slug.current}/${solution.slug.current}`}
                className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </section>
      )} */}

      {/* Industries Section */}
      {/* {project.industries && project.industries.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Industries</h2>
          <div className="flex flex-wrap gap-2">
            {project.industries.map((industry: Types.IndustryType) => (
              <Link 
                key={industry._id} 
                href={`/industries/${industry.slug.current}`}
                className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </section>
      )} */}

      {/* Equipment Types Section */}
      {/* {project.equipmentTypes && project.equipmentTypes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Equipment Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.equipmentTypes.map((equipment: Types.EquipmentType) => (
              <Link 
                key={equipment._id} 
                href={`/equipment-types/${equipment.slug.current}`}
                className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {equipment.title}
              </Link>
            ))}
          </div>
        </section>
      )} */}

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