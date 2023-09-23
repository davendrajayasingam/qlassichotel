import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import Header from '@/components/Header'
import Analytics from '@/utils/Analytics'

import { getContactPage, getSiteData } from '@/sanity/sanity-utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'lightbox.js-react/dist/index.css'

import { Playfair_Display, Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export default async function RootLayout({ children }: { children: React.ReactNode }) 
{
  const [site, contact] = await Promise.all([
    getSiteData(),
    getContactPage()
  ])

  return (
    <html
      lang='en'
      className={`${playfairDisplay.variable} ${poppins.variable}`}
    >
      <body className='font-body text-stone-900 bg-stone-900'>
        <Header
          title={site.title}
          tagline={site.tagline}
          email={contact.email}
          phone={contact.phone}
          nav={site.headerNavigation}
        />
        <div className='mt-36 lg:mt-40'>
          {children}
        </div>
        <Footer
          siteTitle={site.title}
          copyright={site.copyright}
        />
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}