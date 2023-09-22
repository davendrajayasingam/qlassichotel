import { PortableTextBlock } from 'sanity'

export type Room = {
    order: number,
    name: string,
    slug: string,
    shortName: string,
    description: PortableTextBlock[],
    shortDescription: PortableTextBlock[],
    images: string[]
}