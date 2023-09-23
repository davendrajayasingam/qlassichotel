type SEO = {
    title: string
    description: string
    keywords: string[]
}

type Navigation = {
    title: string
    link: string
}

type Site = {
    title: string
    tagline: string
    headerNavigation: Navigation[]
    copyright: string
}

type Amenity = {
    name: string
    description: string
    icon: string
}

type Slide = {
    title: string
    image: string
}

type RoomsPage = {
    heroImage: string
    heroImageTitle: string
    title: string
    description: string
}

type AmenitiesPage = {
    heroImage: string
    heroImageTitle: string
    title: string
    description: string
    hotelAmenitiesTitle: string
    roomAmenitiesTitle: string
}

type BookingPage = {
    heroImage: string
    heroImageTitle: string
    title: string
    description: string
}

type GalleryPage = {
    heroImage: string
    heroImageTitle: string
    title: string
    description: string
    hotelTabTitle: string
    hotelImages: string[]
    roomTabTitle: string
    roomImages: string[]
}

type AboutPage = {
    heroImage: string,
    heroImageTitle: string,
    title: string,
    shortDescription: string,
    hotelImage: string,
    longDescription: string
}

type ContactPage = {
    heroImage: string,
    heroImageTitle: string,
    title: string,
    description: string,
    emailTitle: string,
    email: string,
    phoneTitle: string,
    phone: string,
    addressTitle: string,
    address: string,
    contactFormTitle: string,
    contactFormDescription: string
}