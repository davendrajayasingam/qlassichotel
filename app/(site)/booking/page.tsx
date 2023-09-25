import { getBookingPage, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import Text from '@/app/(ui)/Text'
import Title from '@/app/(ui)/Title'

import type { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata>
{
    const seo = await getSEO('booking')
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords
    }
}

export const revalidate = 0

export default async function BookingPage()
{
    const booking = await getBookingPage()

    return (
        <main>

            {/* Hero */}
            <Hero
                image={booking.heroImage}
                title={booking.heroImageTitle}
            />

            {/* Title & description */}
            <MediumContainer backgroundColor='light'>
                <Title className='text-center'>
                    {booking.title}
                </Title>
                <Text className='text-center'>
                    {booking.description}
                </Text>
            </MediumContainer>

        </main>
    )
}