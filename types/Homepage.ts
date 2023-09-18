import { PortableTextBlock } from 'sanity'
import { Room } from './Room'

export type Homepage = {
    slides: Slide[],
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
    },
    amenities: {
        heading: string,
        title: string,
        hotelAmenitiesTitle: string,
        hotelAmenities: Amenity[],
        roomAmenitiesTitle: string,
        roomAmenities: Amenity[]
    }
}