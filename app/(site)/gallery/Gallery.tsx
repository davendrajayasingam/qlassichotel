'use client'

import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect, useRef, useState } from 'react'

import Title from '@/app/(ui)/Title'

type Props = {
    title: string
    images: string[]
}

const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default function TabbedGallery({ title, images }: Props)
{
    const startingImageIndexRef = useRef(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>
    {
        initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_JS_LICENSE_KEY!, 'individual')
    }, [])

    const lightboxImages = images.map(image => ({
        src: image,
        alt: title
    }))

    return <>
        <div className='p-4'>
            <Title className='text-center mb-8'>
                {title}
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
        </div>

        <SlideshowLightbox
            images={lightboxImages}
            startingSlideIndex={startingImageIndexRef.current}
            showThumbnails={true}
            open={isOpen}
            lightboxIdentifier={`gallery-${title}`}
            onClose={() => setIsOpen(false)}>
        </SlideshowLightbox>
    </>
}