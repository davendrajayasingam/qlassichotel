'use client'

import { useEffect, useRef, useState } from 'react'
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { classNames } from '@/utils/tailwindHelper'

type Props = {
    title: string
    tagline: string
    email: string
    phone: string
    nav: Navigation[]
}

export default function Header({ title, tagline, email, phone, nav }: Props)
{
    const headerRef = useRef<HTMLDivElement>(null)

    const showMobileMenuRef = useRef(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const pathname = usePathname()

    useEffect(() =>
    {
        showMobileMenuRef.current = showMobileMenu
    }, [showMobileMenu])

    useEffect(() =>
    {
        gsap.registerPlugin(ScrollTrigger)

        const anim = gsap.from(headerRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.5
        }).progress(1)

        ScrollTrigger.create({
            start: 'top 0',
            markers: false,
            end: 99999,
            onUpdate: (self) =>
            {
                if (showMobileMenuRef.current) return
                self.direction === -1 ? anim.play() : anim.reverse()
            }
        })
    }, [])

    // close the mobile menu when the pathname changes
    useEffect(() =>
    {
        setShowMobileMenu(false)
    }, [pathname])

    const QuickLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
        <a
            href={href}
            className='custom-underline-hover-animation flex items-center space-x-1 py-1 text-stone-400'
        >
            {children}
        </a>
    )

    const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
        <Link
            href={href}
            className={classNames(
                pathname.startsWith(href) ? 'text-amber-400' : 'text-stone-200',
                'hidden lg:block custom-underline-hover-animation font-title font-semibold text-base text-center hover:text-amber-400 transition-all duration-500 ease-in-out',
            )}
        >
            {children}
        </Link>
    )

    const HomepageLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
        <Link
            href={href}
            className='lg:px-12 font-title font-bold text-center text-stone-200 hover:text-amber-400 transition-all duration-500 ease-in-out'
        >
            {children}
        </Link>
    )

    return <div>
        <header
            ref={headerRef}
            className='fixed left-0 top-0 z-30 w-full bg-stone-900'
        >
            <div className='max-w-screen-xl mx-auto'>

                {/* Top */}
                <div className='px-4 xl:px-0 py-2 flex flex-row items-center justify-between sm:justify-end space-x-8'>

                    {/* Email */}
                    <QuickLink href={`mailto:${email}`}>
                        <FaRegEnvelope className='text-sm text-inherit' />
                        <span className='font-light text-sm text-inherit'>{email}</span>
                    </QuickLink>

                    {/* Phone */}
                    <QuickLink href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
                        <FaPhone className='text-sm text-inherit' />
                        <span className='font-light text-sm text-inherit'>{phone}</span>
                    </QuickLink>

                </div>

                {/* Separator */}
                <hr className='border-stone-700' />

                {/* Nav */}
                <nav className='px-4 xl:px-0 py-5 lg:py-6 flex flex-row w-full items-center justify-between'>
                    {
                        nav.map(navItem => navItem.link === '/'
                            ? <HomepageLink
                                key={navItem.title}
                                href={navItem.link}
                            >
                                <span className='custom-logo-title block font-black text-stone-200 text-3xl sm:text-4xl underline decoration-amber-400'>
                                    {title}
                                </span>
                                <span className='block font-bold text-base sm:text-lg'>
                                    {tagline}
                                </span>
                            </HomepageLink>
                            : <NavLink
                                key={navItem.title}
                                href={navItem.link}
                            >
                                {navItem.title}
                            </NavLink>)
                    }

                    {/* Mobile Hamburger Menu */}
                    <button
                        type='button'
                        id='custom-hamburger-icon'
                        className={classNames(
                            'lg:hidden outline-none focus:outline-none',
                            showMobileMenu ? 'open' : ''
                        )}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>

            </div>
        </header>

        {/* Mobile Menu */}
        <div className={classNames(
            'fixed left-0 top-0 z-20 bg-stone-900 w-screen h-full min-h-screen',
            'transition-all duration-500 ease-in-out transform',
            'overflow-y-scroll',
            showMobileMenu ? 'translate-y-0' : '-translate-y-full'
        )}>
            <div className='pt-36 flex flex-col items-center justify-start overflow-y-scroll h-full divide-y divide-stone-600 w-full px-8'>
                {
                    nav
                        .filter(navItem => navItem.link !== '/')
                        .map(navItem => <Link
                            key={navItem.title}
                            href={navItem.link}
                            className={classNames(
                                pathname.startsWith(navItem.link) ? 'text-amber-400' : 'text-stone-200',
                                'block py-6 text-lg w-full text-center',
                            )}
                        >
                            {navItem.title}
                        </Link>)
                }
            </div>
        </div>
    </div>
}