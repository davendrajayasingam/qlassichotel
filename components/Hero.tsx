'use client'

import Image from 'next/image'

type Props = {
    image: string
    title: string
}

export default function Hero({ image, title }: Props)
{
    return <section className='bg-stone-100'>

        <div className='relative w-screen h-auto aspect-square sm:aspect-video md:aspect-[2/0.85]'>

            <Image
                src={image}
                alt={title}
                fill
                className='object-cover object-center'
            />

            <div className='bg-black/20 absolute inset-0 flex flex-col items-center justify-center p-4'>
                <h1
                    className='font-title font-bold text-5xl md:text-7xl text-stone-200 text-center shadow-black drop-shadow-md max-w-xl underline decoration-amber-400 leading-snug md:leading-snug'
                    style={{ textShadow: '2px 2px 0 #000' }}
                >
                    {title}
                </h1>
            </div>

        </div>

    </section>
}