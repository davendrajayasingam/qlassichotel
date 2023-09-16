import { FaPhone, FaRegEnvelope } from 'react-icons/fa6'

type Props = {
    title: string
    tagline: string
    email: string
    phone: string
}

export default function Header({ title, tagline, email, phone }: Props)
{
    return <div className='max-w-screen-xl mx-auto'>

        {/* Top */}
        <div className='px-2 py-3 flex flex-row items-center justify-end space-x-8'>

            {/* Email */}
            <a
                href={`mailto:${email}`}
                className='flex items-center space-x-1'
            >
                <FaRegEnvelope className='text-sm text-slate-500' />
                <span className='font-light text-sm text-slate-500'>{email}</span>
            </a>

            {/* Phone */}
            <a
                href={`tel:${phone}`}
                className='flex items-center space-x-1'
            >
                <FaPhone className='text-sm text-slate-500' />
                <span className='font-light text-sm text-slate-500'>{phone}</span>
            </a>

        </div>

        {/* Separator */}
        <hr />

        {/* Nav */}
        <nav className='py-6 flex flex-row items-center justify-center'>

            {/* Logo */}
            <a
                href='/'
                className=''
            >
                <p className='font-title font-black text-4xl text-slate-800 text-center'>{title}</p>
                <p className='font-title font-bold text-lg text-slate-700 text-center'>{tagline}</p>
            </a>

        </nav>

    </div>
}