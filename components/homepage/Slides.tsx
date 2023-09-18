'use client'

import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

type Props = {
    slides: Slide[]
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

export default function Slides({ slides }: Props)
{
    return <section className='bg-stone-100'>
        <Slider {...sliderSettings}>
            {
                slides.map(slide => <div
                    key={slide.title}
                    className='relative w-screen h-auto aspect-square sm:aspect-video md:aspect-[2/1]'
                >

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className='object-cover object-center'
                    />

                    {
                        slide.title
                        && <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
                            <h1
                                className='font-title font-bold text-5xl md:text-7xl text-stone-100 text-center shadow-black drop-shadow-md max-w-xl'
                                style={{ textShadow: '2px 2px 0 #000' }}
                            >
                                {slide.title}
                            </h1>
                        </div>
                    }

                </div>)
            }
        </Slider>
    </section>
}