'use client'

import Slider, { Settings } from 'react-slick'

import Hero from '@/components/Hero'

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
            {slides.map(slide => <Hero
                key={slide.title}
                image={slide.image}
                title={slide.title}
            />)}
        </Slider>
    </section>
}