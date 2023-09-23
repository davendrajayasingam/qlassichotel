import Image from 'next/image'

import { getAboutPage, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import SplitView from '@/app/(ui)/SplitView'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import Text from '@/app/(ui)/Text'

import type { Metadata } from 'next'
export async function generateMetadata()
{
  const seo = await getSEO('about')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords
  } as Metadata
}

export const revalidate = 0

export default async function AboutUsPage()
{
  const about = await getAboutPage()

  return (
    <main>

      {/* Hero */}
      <Hero
        image={about.heroImage}
        title={about.heroImageTitle}
      />

      {/* Short Description */}
      <MediumContainer backgroundColor='light'>
        <SplitView
          heading={about.heroImageTitle}
          title={about.title}
          description={about.shortDescription}
        />
      </MediumContainer>

      {/* Photo */}
      <MediumContainer style={{
        background: 'linear-gradient(#f5f5f4 0%, #f5f5f4 50%, #e5e5e5 50%, #e5e5e5 100%)'
      }}>
        <div className='relative h-[70vw] md:h-[70vh] -my-16'>
          <Image
            src={about.hotelImage}
            alt={about.heroImageTitle}
            fill
            className='object-cover border-[28px] border-stone-50 bg-stone-50 shadow-lg'
          />
        </div>
      </MediumContainer>

      {/* Long Description */}
      <MediumContainer className='!py-0'>
        <Text>
          {about.longDescription}
        </Text>
      </MediumContainer>

    </main>
  )
}