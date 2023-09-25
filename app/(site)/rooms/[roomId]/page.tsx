import { getRoom } from '@/sanity/sanity-utils'
import RoomView from '@/app/(site)/rooms/[roomId]/RoomView'

type Props = {
    params: { roomId: string }
}

import type { Metadata } from 'next'
export async function generateMetadata({ params: { roomId } }: Props): Promise<Metadata>
{
    const room = await getRoom(roomId)
    return {
        title: room.name,
        description: room.shortDescription,
        keywords: [room.slug]
    }
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