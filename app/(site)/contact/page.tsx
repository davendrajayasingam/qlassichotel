import { FaRegEnvelope, FaLocationDot, FaMobileScreen } from 'react-icons/fa6'

import { getContact, getSEO } from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import GoogleMaps from '@/components/homepage/GoogleMaps'
import ContactForm from '@/app/(site)/contact/ContactForm'

import type { Metadata } from 'next'
export async function generateMetadata()
{
  const seo = await getSEO('contact')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords
  } as Metadata
}

export const revalidate = 0

export default async function ContactPage()
{
  const contact = await getContact()

  return (
    <main>

      {/* Hero */}
      <Hero
        image={contact.heroImage}
        title={contact.heroImageTitle}
      />

      {/* Container */}
      <div className='px-4 py-16 max-w-screen-md mx-auto space-y-16'>


        {/* Short Description */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <div className='flex flex-row items-center w-full space-x-1'>
              <hr className='border-stone-500 flex-1' />
              <p className='font-light text-lg text-stone-800 whitespace-pre-wrap tracking-[0.5em] uppercase'>{contact.heroImageTitle}</p>
            </div>
            <h1 className='mt-4 font-title font-bold text-5xl text-stone-900 text-right leading-snug'>{contact.title}</h1>
          </div>
          <p className='font-light text-stone-800 whitespace-pre-wrap leading-relaxed'>{contact.description}</p>
        </section>

        {/* Contact Methods */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-x md:divide-y-0 divide-stone-300'>
          <div className='py-6 md:px-6'>
            <FaMobileScreen className='text-4xl text-stone-900' />
            <p className='mt-4 font-medium text-sm text-stone-600'>
              {contact.phoneTitle}
            </p>
            <a
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              className='font-medium text-lg text-stone-900 custom-underline-hover-animation'
            >
              {contact.phone}
            </a>
          </div>
          <div className='py-6 md:px-6'>
            <FaLocationDot className='text-4xl text-stone-900' />
            <p className='mt-4 font-medium text-sm text-stone-600'>
              {contact.addressTitle}
            </p>
            <p className='font-medium text-lg text-stone-900'>
              {contact.address}
            </p>
          </div>
          <div className='py-6 md:px-6'>
            <FaRegEnvelope className='text-4xl text-stone-900' />
            <p className='mt-4 font-medium text-sm text-stone-600'>
              {contact.emailTitle}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className='font-medium text-lg text-stone-900  custom-underline-hover-animation'
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h1 className='font-title font-bold text-5xl text-stone-900 leading-snug'>
            {contact.contactFormTitle}
          </h1>
          <p className='mt-6 font-light text-stone-800 whitespace-pre-wrap leading-relaxed'>
            {contact.contactFormDescription}
          </p>
          <ContactForm />
        </div>

      </div>

      <GoogleMaps address={contact.address} />

    </main>
  )
}