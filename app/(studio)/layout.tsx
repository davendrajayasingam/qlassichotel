import '@/app/globals.css'
import Analytics from '@/utils/Analytics'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CMS Dashboard',
  robots: 'noindex, nofollow'
}

export default function RootLayout({ children }: { children: React.ReactNode }) 
{
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}