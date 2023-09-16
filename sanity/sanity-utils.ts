import { createClient, groq } from 'next-sanity'

import { Project } from '@/types/Project'
import config from '@/sanity/config/client-config'
import { Homepage } from '@/types/Homepage'
import { Room } from '@/types/Room'

export async function getProjects(): Promise<Project[]>
{
    return createClient(config).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project>
{
    return createClient(config).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )
}

export async function getSEO(slug: string): Promise<SEO>
{
    return createClient(config).fetch(
        groq`*[_type == "seo" && slug.current == $slug][0]{
            siteName,
            description,
            keywords
        }`,
        { slug }
    )
}

export async function getSiteData(): Promise<Site>
{
    return createClient(config).fetch(
        groq`*[_type == "site"][0]{
            title,
            tagline,
            email,
            phone
        }`
    )
}

export async function getHomepage(): Promise<Homepage>
{
    return createClient(config).fetch(
        groq`*[_type == "homepage"][0]{
            "bannerImage": bannerImage.asset->url,
            about,
            "rooms": {
                "heading": rooms.heading,
                "title": rooms.title,
                "rooms": rooms.rooms[]->{
                    name,
                    shortName,
                    shortDescription,
                    "images": images[].asset->url
                }
            }
        }`
    )
}

export async function getRooms(): Promise<Room[]>
{
    return createClient(config).fetch(
        // map each image to its url
        groq`*[_type == "room"] | order(order asc){
            name,
            shortName,
            description,
            shortDescription,
            "images": images[].asset->url
        }`
    )
}