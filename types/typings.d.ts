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
}

type Amenity = {
    name: string
    description: string
    icon: string
}

type Slide = {
    title: string
    description: string
    image: string
}

type Contact = {
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