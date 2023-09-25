import { createClient, groq } from 'next-sanity'

import config from '@/sanity/config/client-config'
import { Homepage } from '@/types/Homepage'
import { Room } from '@/types/Room'

export async function getSEO(slug: string): Promise<SEO>
{
    return createClient(config).fetch(
        groq`*[_type == "seo" && slug.current == $slug][0]{
            title,
            description,
            keywords,
            "ogImage": ogImage.asset->url
        }`,
        { slug }
    )
}

export async function getSiteData(): Promise<Site>
{
    return createClient(config).fetch(
        groq`*[_type == "site"][0]{
            title,
            tagline,
            "headerNavigation": headerNavigation[]{
                title,
                link
            },
            copyright
        }`
    )
}

export async function getHomepage(): Promise<Homepage>
{
    return createClient(config).fetch(
        groq`*[_type == "homepage"][0]{
            "slides": slides[]{
                title,
                description,
                "image": asset->url
            },
            about,
            "rooms": {
                "heading": rooms.heading,
                "title": rooms.title,
                "rooms": rooms.rooms[]->{
                    name,
                    "slug": slug.current,
                    shortName,
                    shortDescription,
                    "images": images[].asset->url
                }
            },
            "amenities": {
                "heading": amenities.heading,
                "title": amenities.title,
                "buttonText": amenities.buttonText,
                "hotelAmenitiesTitle": amenities.hotelAmenitiesTitle,
                "hotelAmenities": amenities.hotelAmenities[]->{
                    name,
                    description,
                    "icon": icon.asset->url
                },
                "roomAmenitiesTitle": amenities.roomAmenitiesTitle,
                "roomAmenities": amenities.roomAmenities[]->{
                    name,
                    description,
                    "icon": icon.asset->url
                }
            }
        }`
    )
}

export async function getRoom(slug: string): Promise<Room>
{
    return createClient(config).fetch(
        // map each image to its url
        groq`*[_type == "room" && slug.current == $slug][0]{
            order,
            name,
            "slug": slug.current,
            shortName,
            description,
            shortDescription,
            "images": images[].asset->url
        }`,
        { slug }
    )
}

export async function getRooms(): Promise<Room[]>
{
    return createClient(config).fetch(
        // map each image to its url
        groq`*[_type == "room"] | order(order asc){
            name,
            "slug": slug.current,
            shortName,
            description,
            shortDescription,
            "images": images[].asset->url
        }`
    )
}

export async function getRoomsPage(): Promise<RoomsPage>
{
    return createClient(config).fetch(
        groq`*[_type == "ourRooms"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            description
        }`
    )
}

export async function getAmenitiesPage(): Promise<AmenitiesPage>
{
    return createClient(config).fetch(
        groq`*[_type == "amenities"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            description,
            hotelAmenitiesTitle,
            roomAmenitiesTitle
        }`
    )
}

export async function getHotelAmenities(): Promise<Amenity[]>
{
    return createClient(config).fetch(
        groq`*[_type == "hotelAmenity"]{
            name,
            description,
            "icon": icon.asset->url
        }`
    )
}

export async function getRoomAmenities(): Promise<Amenity[]>
{
    return createClient(config).fetch(
        groq`*[_type == "roomAmenity"]{
            name,
            description,
            "icon": icon.asset->url
        }`
    )
}

export async function getBookingPage(): Promise<BookingPage>
{
    return createClient(config).fetch(
        groq`*[_type == "booking"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            description
        }`
    )
}

export async function getGalleryPage(): Promise<GalleryPage>
{
    return createClient(config).fetch(
        groq`*[_type == "gallery"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            description,
            hotelTabTitle,
            "hotelImages": hotelImages[].asset->url,
            roomTabTitle,
            "roomImages": roomImages[].asset->url
        }`
    )
}

export async function getAboutPage(): Promise<AboutPage>
{
    return createClient(config).fetch(
        groq`*[_type == "aboutUs"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            shortDescription,
            "hotelImage": hotelImage.asset->url,
            longDescription
        }`
    )
}

export async function getContactPage(): Promise<ContactPage>
{
    return createClient(config).fetch(
        groq`*[_type == "contact"][0]{
            "heroImage": heroImage.asset->url,
            heroImageTitle,
            title,
            description,
            emailTitle,
            email,
            phoneTitle,
            phone,
            addressTitle,
            address,
            contactFormTitle,
            contactFormDescription
        }`
    )
}