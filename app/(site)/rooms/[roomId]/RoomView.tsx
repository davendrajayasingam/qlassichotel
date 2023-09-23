'use client'

import { PortableText } from '@portabletext/react'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import Title from '@/app/(ui)/Title'
import MediumContainer from '@/app/(ui)/containers/MediumContainer'
import { Room } from '@/types/Room'
import { portableTextComponents } from '@/sanity/config/portable-text-config'
import Slides from '@/components/homepage/Slides'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import Link from 'next/link'

type Props = {
    room: Room
}

const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
}

export default function RoomView({ room }: Props)
{
    const startingImageIndexRef = useRef(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>
    {
        initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_JS_LICENSE_KEY!, 'individual')
    }, [])

    const lightboxImages = room.images.map(image => ({
        src: image,
        alt: room.name
    }))

    return <div>

        {/* Image Slider */}
        <Slides slides={[{
            image: room.images[0],
            title: room.name
        }]} />

        {/* Title & description */}
        <MediumContainer backgroundColor='light'>

            <Title className='text-center'>
                {room.name}
            </Title>

            <Slider {...sliderSettings}>
                {
                    lightboxImages.map((image, imageIndex) => <button
                        key={image.src}
                        className='relative w-screen h-auto aspect-square sm:aspect-video'
                        onClick={() =>
                        {
                            startingImageIndexRef.current = imageIndex
                            setIsOpen(true)
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className='w-full h-full object-cover object-center'
                        />
                    </button>)
                }
            </Slider>

            <div className='space-y-4'>
                <PortableText
                    value={room.description}
                    components={portableTextComponents}
                />
            </div>

            <div className='text-center'>
                <Link
                    href='/rooms'
                    className='bg-amber-400 text-stone-900 px-8 py-3 rounded-full font-semibold text-lg hover:brightness-110 transition-all duration-500 ease-in-out'
                >
                    View Other Rooms
                </Link>
            </div>

        </MediumContainer>

        <SlideshowLightbox
            images={lightboxImages}
            startingSlideIndex={startingImageIndexRef.current}
            showThumbnails={true}
            open={isOpen}
            lightboxIdentifier={`room-${room.name.replace(/\s/g, '-')}`}
            onClose={() => setIsOpen(false)}>
        </SlideshowLightbox>

    </div>
}