/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

type Props = {
    title: string
    imageSrc?: string
}

export const ogImageSize = {
    width: 1200,
    height: 630
}

export default async function OpenGraphImage({ title, imageSrc }: Props)
{
    const playfairDisplayBold = fetch(
        new URL('./(fonts)/PlayfairDisplay-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            <div tw='flex flex-col items-center justify-center w-full h-full bg-stone-800'>

                {
                    imageSrc
                    && <img
                        src={imageSrc}
                        width={ogImageSize.width}
                        height={ogImageSize.height}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                }

                {/* <div tw='absolute inset-0 z-10 flex items-center justify-center'>
                    <p
                        tw='text-stone-800 text-5xl'
                        style={{ fontFamily: '"Playfair Display"' }}
                    >
                        {title}
                    </p>
                </div> */}

                <div tw='bg-black/20 absolute inset-0 flex flex-col items-center justify-center p-4'>
                    <h1
                        tw='text-7xl text-stone-200 text-center shadow-black drop-shadow-md leading-snug'
                        style={{
                            textShadow: '2px 2px 0 #000',
                            fontFamily: '"Playfair Display"'
                        }}
                    >
                        {title}
                    </h1>
                </div>

            </div >
        ),
        {
            ...ogImageSize,
            fonts: [
                {
                    name: 'Playfair Display',
                    data: await playfairDisplayBold,
                    style: 'normal',
                    weight: 700
                }
            ]
        }
    )
}