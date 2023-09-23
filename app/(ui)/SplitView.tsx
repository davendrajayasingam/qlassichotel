type Props = {
    heading: string
    title: string
    description: string
}

export default function SplitView({ heading, title, description }: Props)
{
    return <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        {/* Left hand side - heading and title */}
        <div>

            {/* Heading */}
            <div className='flex flex-row items-center w-full space-x-1'>
                <hr className='border-stone-400 flex-1' />
                <p className='font-light text-lg text-stone-800 whitespace-pre-wrap tracking-[0.5em] uppercase'>
                    {heading}
                </p>
            </div>

            {/* Title */}
            <h1 className='mt-4 font-title font-bold text-5xl text-stone-900 text-right leading-snug'>
                {title}
            </h1>

        </div>

        {/* Right hand side - description */}
        <p className='font-light text-stone-800 whitespace-pre-wrap leading-relaxed'>
            {description}
        </p>

    </section>
}