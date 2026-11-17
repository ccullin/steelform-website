import { getChildSolutionWithParent } from '@/lib/sanity/queries/solutions'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'


export default async function ChildSolutionPage({
  params,
}: {
  params: Promise<{
    parentSlug: string
    childSlug: string
  }>
}) {
  const { parentSlug, childSlug } = await params
  
  // temporty debug:
  console.log({parentSlug, childSlug})

  // Fetch the child solution with its parent
  const childSolution = await getChildSolutionWithParent(parentSlug, childSlug)

  // temporty debug:
  console.log(JSON.stringify(childSolution, null, 2))
  
  // If no solution found, return a 404
  if (!childSolution) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{childSolution.title}</h1>
      
      {childSolution.heroImage && (
        <div className="mb-8">
          <Image
            src={urlFor(childSolution.heroImage.image).url()}
            alt={childSolution.heroImage.alt || ''}
            className="w-full h-auto rounded-lg"
            width={800}
            height={450}
          />
        </div>
      )}
      
      {childSolution.summary && (
        <p className="text-xl text-gray-600 mb-8">{childSolution.summary}</p>
      )}
      
      {childSolution.mainContent && (
        <div className="prose max-w-none">
          {childSolution.mainContent.map((block) => (
            <div key={block._key}>
              {block._type === 'block' && block.children?.map((child) => (
                <p key={child.text}>{child.text}</p>
              ))}
              {block._type === 'image' && block.image?.asset?._ref && (
                <div className="my-4">
                  <Image
                    src={urlFor(block.image)}
                    alt=""
                    className="w-full h-auto rounded-lg"
                    width={800}
                    height={450}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}