import { getRooms, getRoomsPage, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import Text from '@/app/(ui)/Text'
import Title from '@/app/(ui)/Title'
import RoomRow from '@/app/(site)/rooms/RoomRow'

import type { Metadata } from 'next'
export async function generateMetadata()
{
    const seo = await getSEO('rooms')
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords
    } as Metadata
}

export const revalidate = 0

export default async function RoomsPage()
{
    const [room, rooms] = await Promise.all([
        getRoomsPage(),
        getRooms()
    ])

    return (
        <main>

            {/* Hero */}
            <Hero
                image={room.heroImage}
                title={room.heroImageTitle}
            />

            {/* Title & description */}
            <MediumContainer backgroundColor='light'>
                <Title className='text-center'>
                    {room.title}
                </Title>
                <Text>
                    {room.description}
                </Text>
            </MediumContainer>

            {rooms.map((room, idx) => <RoomRow
                key={room.name}
                room={room}
                index={idx}
            />)}

        </main>
    )
}