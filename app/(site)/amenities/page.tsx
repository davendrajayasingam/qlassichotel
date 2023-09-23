import Image from 'next/image'

import { getAmenitiesPage, getHotelAmenities, getRoomAmenities, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import Text from '@/app/(ui)/Text'
import Title from '@/app/(ui)/Title'

import type { Metadata } from 'next'
export async function generateMetadata()
{
    const seo = await getSEO('amenities')
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords
    } as Metadata
}

export const revalidate = 0

export default async function AmenitiesPage()
{
    const [amenities, hotelAmenities, roomAmenities] = await Promise.all([
        getAmenitiesPage(),
        getHotelAmenities(),
        getRoomAmenities()
    ])

    return (
        <main>

            {/* Hero */}
            <Hero
                image={amenities.heroImage}
                title={amenities.heroImageTitle}
            />

            {/* Title & description */}
            <MediumContainer backgroundColor='light'>
                <Title className='text-center'>
                    {amenities.title}
                </Title>
                <Text>
                    {amenities.description}
                </Text>
            </MediumContainer>

            {/* Hotel Amenities */}
            <MediumContainer>
                <Title className='text-center'>
                    {amenities.hotelAmenitiesTitle}
                </Title>
                {showAmenities(hotelAmenities)}
            </MediumContainer>

            {/* Room Amenities */}
            <MediumContainer backgroundColor='light'>
                <Title className='text-center'>
                    {amenities.roomAmenitiesTitle}
                </Title>
                {showAmenities(roomAmenities)}
            </MediumContainer>

        </main>
    )
}

const showAmenities = (amenities: Amenity[]) => amenities.map(amenity => <div
    key={amenity.name}
    className='grid grid-cols-1 sm:grid-cols-3 border-t border-stone-400 pt-16'
>
    <div className='brightness-200 flex items-center justify-center'>
        <Image
            src={amenity.icon}
            alt={amenity.name}
            width={64}
            height={64}
        />
    </div>
    <div className='sm:col-span-2'>
        <Text className='font-medium text-2xl text-center sm:text-left'>
            {amenity.name}
        </Text>
        <Text className='mt-2 text-center sm:text-left'>
            {amenity.description}
        </Text>
    </div>
</div>)