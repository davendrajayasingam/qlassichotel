import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import { useEffect, useState } from 'react'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'

import { portableTextComponents } from '@/sanity/config/portable-text-config'
import { Room } from '@/types/Room'
import { classNames } from '@/utils/tailwindHelper'

type Props = {
    room: Room
    index: number
}

const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default function RoomItem({ room, index }: Props) 
{
    useEffect(() =>
    {
        initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_JS_LICENSE_KEY!, 'individual')
    }, [])

    const images = room.images.map(image => ({
        src: image,
        alt: room.name
    }))

    const [isOpen, setIsOpen] = useState(false)

    return <div className={classNames(
        'px-4 py-16',
        index % 2 === 0 ? 'bg-stone-100' : 'bg-stone-200',
    )}>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 max-w-screen-xl mx-auto'>

            {/* Order & Shortname */}
            <div className={classNames(
                'hidden lg:flex col-span-1',
                index % 2 === 0 ? 'order-1' : 'order-3',
                'py-6 flex-col items-center'
            )}>
                <div className='border-2 border-stone-600 px-4 py-8 flex flex-col items-center space-y-4'>
                    <p
                        className='font-bold text-stone-600 tracking-widest whitespace-nowrap rotate-180 uppercase'
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        {room.shortName}
                    </p>
                    <p className='font-bold text-stone-600'>{`0${index + 1}`.slice(-2)}</p>
                </div>
            </div>

            {/* Room Description */}
            <div className='col-span-2 order-2 p-6 text-center lg:text-left'>
                <h1 className='mb-6 font-title font-bold text-4xl text-stone-800 leading-relaxed'>{room.name}</h1>
                <PortableText
                    value={room.shortDescription}
                    components={portableTextComponents}
                />
            </div>

            {/* Image Slider */}
            <div className={classNames(
                'order-1',
                index % 2 === 0 ? 'lg:order-3' : '',
                'col-span-3 m-6 border-b-[28px] border-[12px] border-stone-50 shadow-xl aspect-[3/2]',
            )}>
                <Slider {...sliderSettings}>
                    {room.images.map(image => (
                        <button
                            key={image}
                            className='relative bg-stone-100 aspect-[3/2] w-full h-full outline-none focus:outline-none'
                            onClick={() => setIsOpen(true)}
                        >
                            <Image
                                src={image}
                                alt={room.name}
                                fill
                                className='w-full h-full object-contain object-center'
                            />
                        </button>
                    ))}
                </Slider>
            </div>
        </div>

        <SlideshowLightbox
            images={images}
            showThumbnails={true}
            open={isOpen}
            lightboxIdentifier={room.name}
            onClose={() => { setIsOpen(false) }}>
        </SlideshowLightbox>
    </div>
}