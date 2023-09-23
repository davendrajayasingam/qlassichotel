import { getRoom } from '@/sanity/sanity-utils'

type Props = {
    params: { roomId: string }
}

import type { Metadata } from 'next'
import RoomView from '@/app/(site)/rooms/[roomId]/RoomView'
export async function generateMetadata({ params: { roomId } }: Props)
{
    const room = await getRoom(roomId)
    return {
        title: room.name,
        description: room.shortDescription,
        keywords: [room.slug]
    } as Metadata
}

export const revalidate = 0

export default async function RoomPage({ params: { roomId } }: Props)
{
    const room = await getRoom(roomId)

    return (
        <main>
            <RoomView room={room} />
        </main>
    )
}