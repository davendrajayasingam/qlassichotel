import Link from 'next/link'

type Props = {
    siteTitle: string
    copyright: string
}

export default function Footer({ siteTitle, copyright }: Props)
{
    return <footer className='bg-stone-900 py-6'>
        <div className='flex flex-row items-end space-x-4 max-w-screen-xl mx-auto px-4 xl:px-0'>
            <HomepageLink href='/'>
                <span className='custom-logo-title block font-black text-stone-200 text-xl sm:text-2xl underline decoration-amber-400'>
                    {siteTitle}
                </span>
            </HomepageLink>
            <p className='text-stone-400 text-sm'>
                &copy; {new Date().getFullYear()} {siteTitle}. {copyright}
            </p>
        </div>
    </footer>
}

const HomepageLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link
        href={href}
        className='font-title font-bold text-center text-stone-200 hover:text-amber-400 transition-all duration-500 ease-in-out'
    >
        {children}
    </Link>
)