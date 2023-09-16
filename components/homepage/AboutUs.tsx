'use client'

import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

import { portableTextComponents } from '@/sanity/config/portable-text-config'

type Props = {
    heading: string
    title: string
    description: PortableTextBlock[]
}

export default function AboutUs({ heading, title, description }: Props)
{
    return <section className='bg-stone-100'>
        <div className='px-4 py-16 max-w-screen-md mx-auto'>

            <h6 className='pb-4 font-medium text-sm tracking-[0.75em] text-stone-400 text-center'>
                {heading}
            </h6>

            <h1 className='pb-16 font-title font-bold text-7xl text-stone-900 text-center'>
                {title}
            </h1>

            <PortableText
                value={description}
                components={portableTextComponents}
            />

        </div>
    </section>
}