import OpenGraphImage, { ogImageSize } from '@/app/(site)/OpenGraphImage'
import { getRoom } from '@/sanity/sanity-utils'

export const runtime = 'edge'

export const size = ogImageSize

export const contentType = 'image/png'

type Props = {
    params: { roomId: string }
}

export default async function Image({ params: { roomId } }: Props) 
{
    const room = await getRoom(roomId)
    return OpenGraphImage({ title: room.name, imageSrc: room.images[0] })
}