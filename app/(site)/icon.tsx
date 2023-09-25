import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32
}

export const contentType = 'image/png'

export default async function Icon()
{
    const playfairDisplayBlack = fetch(
        new URL('./(fonts)/PlayfairDisplay-Black.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            <div
                style={{
                    fontFamily: '"Playfair Display"',
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24' // amber 400
                }}
            >
                Q
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Playfair Display',
                    data: await playfairDisplayBlack,
                    style: 'normal',
                    weight: 900
                }
            ]
        }
    )
}