import { PortableTextBlock } from 'sanity'
import { Room } from './Room'

export type Homepage = {
    bannerImage: string,
    about: {
        heading: string,
        title: string,
        description: PortableTextBlock[]
    },
    rooms: {
        heading: string,
        title: string,
        description: PortableTextBlock[],
        rooms: Room[]
    }
}