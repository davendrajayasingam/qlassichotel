import { getContactPage, getHomepage, getSEO } from '@/sanity/sanity-utils'
import AboutUs from '@/components/homepage/AboutUs'
import OurRooms from '@/components/homepage/rooms/OurRooms'
import Amenities from '@/components/homepage/Amenities'
import Slides from '@/components/homepage/Slides'
import Contact from '@/components/homepage/Contact'

import type { Metadata } from 'next'
export async function generateMetadata()
{
  const seo = await getSEO('homepage')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords
  } as Metadata
}

export const revalidate = 0

export default async function HomePage()
{
  const [homepage, contact] = await Promise.all([
    getHomepage(),
    getContactPage()
  ])

  return (
    <main>

      {/* Slides */}
      <Slides slides={homepage.slides} />

      {/* Our Rooms */}
      <OurRooms
        heading={homepage.rooms.heading}
        title={homepage.rooms.title}
        rooms={homepage.rooms.rooms}
      />

      {/* Amenities */}
      <Amenities
        heading={homepage.amenities.heading}
        title={homepage.amenities.title}
        buttonText={homepage.amenities.buttonText}
        hotelAmenitiesTitle={homepage.amenities.hotelAmenitiesTitle}
        hotelAmenities={homepage.amenities.hotelAmenities}
        roomAmenitiesTitle={homepage.amenities.roomAmenitiesTitle}
        roomAmenities={homepage.amenities.roomAmenities}
      />

      {/* About */}
      <AboutUs
        heading={homepage.about.heading}
        title={homepage.about.title}
        description={homepage.about.description}
      />

      {/* Contact */}
      <Contact
        address={contact.address}
      />

    </main>
  )
}