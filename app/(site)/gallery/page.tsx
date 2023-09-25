import { getGalleryPage, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import Text from '@/app/(ui)/Text'
import Title from '@/app/(ui)/Title'
import Gallery from '@/app/(site)/gallery/Gallery'

import type { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata>
{
    const seo = await getSEO('gallery')
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords
    }
}

export const revalidate = 0

export default async function GalleryPage()
{
    const gallery = await getGalleryPage()

    return (
        <main>

            {/* Hero */}
            <Hero
                image={gallery.heroImage}
                title={gallery.heroImageTitle}
            />

            {/* Title & description */}
            <MediumContainer backgroundColor='light'>
                <Title className='text-center'>
                    {gallery.title}
                </Title>
                <Text>
                    {gallery.description}
                </Text>
            </MediumContainer>

            <MediumContainer>
                <Gallery
                    title={gallery.hotelTabTitle}
                    images={gallery.hotelImages}
                />
            </MediumContainer>

            <MediumContainer backgroundColor='light'>
                <Gallery
                    title={gallery.roomTabTitle}
                    images={gallery.roomImages}
                />
            </MediumContainer>

        </main>
    )
}