import OpenGraphImage, { ogImageSize } from '@/app/(site)/OpenGraphImage'
import { getSEO } from '@/sanity/sanity-utils'

export const runtime = 'edge'

export const size = ogImageSize

export const contentType = 'image/png'

export default async function Image() 
{
    const seo = await getSEO('booking')
    return OpenGraphImage({ title: seo.title, imageSrc: seo.ogImage })
}