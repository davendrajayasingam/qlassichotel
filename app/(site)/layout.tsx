import '@/app/globals.css'
import Header from '@/components/Header'

import { getSEO, getSiteData } from '@/sanity/sanity-utils'
import type { Metadata } from 'next'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'lightbox.js-react/dist/index.css'

import { Playfair_Display, Poppins } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  // this is a variable font
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

const poppins = Poppins({
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight
  // light, regular, medium, bold,
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export async function generateMetadata({ params }: { params: { slug: string } })
{
  const seo = await getSEO('homepage')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords
  } as Metadata
}

export default async function RootLayout({ children }: { children: React.ReactNode }) 
{
  const site = await getSiteData()

  return (
    <html
      lang='en'
      className={`${playfairDisplay.variable} ${poppins.variable}`}
    >
      <body className='font-body text-slate-900'>
        <Header
          title={site.title}
          tagline={site.tagline}
          email={site.email}
          phone={site.phone}
        />
        {children}
      </body>
    </html>
  )
}