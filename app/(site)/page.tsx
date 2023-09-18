import { getHomepage } from '@/sanity/sanity-utils'
import AboutUs from '@/components/homepage/AboutUs'
import OurRooms from '@/components/homepage/rooms/OurRooms'
import Amenities from '@/components/homepage/Amenities'
import Slides from '@/components/homepage/Slides'

export const revalidate = 0

export default async function Home()
{
  const homepage = await getHomepage()

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

    </main>
  )
}