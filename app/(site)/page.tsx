import Image from 'next/image'

import { getHomepage, getRooms } from '@/sanity/sanity-utils'
import AboutUs from '@/components/homepage/AboutUs'
import OurRooms from '@/components/homepage/rooms/OurRooms'

export const revalidate = 0

export default async function Home()
{
  const [homepage] = await Promise.all([
    getHomepage()
  ])

  return (
    <main>

      {/* Banner */}
      <div className='relative h-[75vh] w-full'>
        <Image
          src={homepage.bannerImage}
          alt='Qlassic Hotel Banner'
          fill
          className='object-cover object-center'
        />
      </div>

      {/* Our Rooms */}
      <OurRooms
        heading={homepage.rooms.heading}
        title={homepage.rooms.title}
        rooms={homepage.rooms.rooms}
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