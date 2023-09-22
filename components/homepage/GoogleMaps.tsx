'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type Props = {
    address: string
}

export default function GoogleMaps({ address }: Props) 
{
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => 
    {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
            version: 'weekly',
            libraries: ['geocoding', 'maps']
        })

        let mapOptions = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 20
        }

        loader
            .importLibrary('geocoding')
            .then(({ Geocoder }) => new Geocoder().geocode({ address: address }, results =>
            {
                mapOptions.center = {
                    lat: results?.[0]?.geometry?.location?.lat() || 2.8077755,
                    lng: results?.[0]?.geometry?.location?.lng() || 101.7227877
                }
            }))
            .then(() => loader.importLibrary('maps'))
            .then(({ Map }) => new Map(mapRef.current!, mapOptions))
            .catch(e => console.error(e))
    }, [address])

    return <div
        style={{ minHeight: '600px' }}
        ref={mapRef}
    />
}