import GoogleMaps from '@/components/homepage/GoogleMaps'

type Props = {
    address: string
}

export default function Contact({ address }: Props)
{
    return <section className='bg-stone-200 grid grid-cols-1 lg:grid-cols-2'>
        <GoogleMaps address={address} />
        <div className='flex flex-col justify-center items-center p-8'>
            <h2 className='text-3xl font-bold text-stone-900'>Contact Us</h2>
            <p className='text-stone-700 text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className='flex flex-col items-center mt-8'>
                <div className='flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-stone-900' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                    </svg>
                    <p className='text-stone-900 ml-2'>1234 Main St, New York, NY 10001</p>
                </div>
                <div className='flex items-center mt-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-stone-900' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                    </svg>
                    <p className='text-stone-900 ml-2'>+1 123 456 7890</p>
                </div>
                <div className='flex items-center mt-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-stone-900' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                    </svg>
                    <p className='text-stone-900 ml-2'>
                        <a href='mailto:' className='hover:text-stone-700'>

                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
}