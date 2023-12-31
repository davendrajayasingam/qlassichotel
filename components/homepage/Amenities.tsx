import Image from 'next/image'
import Link from 'next/link'

type Props = {
    heading: string
    title: string
    buttonText: string
    hotelAmenitiesTitle: string
    hotelAmenities: Amenity[]
    roomAmenitiesTitle: string
    roomAmenities: Amenity[]
}

export default function Amenities({ heading, title, buttonText, hotelAmenitiesTitle, hotelAmenities, roomAmenitiesTitle, roomAmenities }: Props)
{
    return <section className='bg-stone-900'>
        <div className='px-4 py-16 max-w-screen-md mx-auto text-center'>

            <h6 className='pb-8 font-medium text-sm tracking-[0.75em] text-stone-400 text-center'>
                {heading}
            </h6>

            <h1 className='pb-16 font-title font-bold text-5xl md:text-7xl text-amber-400 text-center'>
                {title}
            </h1>

            {showAmenities(hotelAmenitiesTitle, hotelAmenities)}

            {showAmenities(roomAmenitiesTitle, roomAmenities)}

            <Link
                href='/amenities'
                className='bg-amber-400 text-stone-900 px-8 py-3 rounded-full font-semibold text-lg hover:brightness-110 transition-all duration-500 ease-in-out'
            >
                {buttonText}
            </Link>


        </div>
    </section>
}

const showAmenities = (title: string, amenities: Amenity[]) => (
    <div className='border-2 border-transparent border-t-stone-600 py-16'>
        <h2 className='pb-8 md:pb-16 font-title font-bold text-4xl md:text-5xl text-stone-200 text-center'>
            {title}
        </h2>

        <div className='grid grid-cols-3'>
            {
                amenities.map(amenity => <div
                    key={amenity.name}
                    className='flex flex-col items-center space-y-4'
                >

                    <div className='w-24 h-24 brightness-200 flex items-center justify-center'>
                        <Image
                            src={amenity.icon}
                            alt={amenity.name}
                            width={64}
                            height={64}
                        />
                    </div>

                    <p className='font-medium text-stone-200 text-center'>
                        {amenity.name}
                    </p>

                </div>)
            }
        </div>
    </div>
)