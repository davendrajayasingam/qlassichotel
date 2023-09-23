'use client'

import Text from '@/app/(ui)/Text'

type Props = {
    heading: string
    title: string
    description: string
}

export default function AboutUs({ heading, title, description }: Props)
{
    return <section className='bg-stone-100'>
        <div className='px-4 py-16 max-w-screen-md mx-auto'>

            <h6 className='pb-8 font-medium text-sm tracking-[0.75em] text-stone-400 text-center'>
                {heading}
            </h6>

            <h1 className='pb-16 font-title font-bold text-5xl md:text-7xl text-stone-900 text-center'>
                {title}
            </h1>

            <Text>
                {description}
            </Text>

        </div>
    </section>
}