import { PortableTextReactComponents } from '@portabletext/react'

export const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
        h1: props => <h1 className='font-title font-bold text-5xl md:text-7xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        h2: props => <h2 className='font-title font-bold text-4xl md:text-6xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        h3: props => <h3 className='font-title font-bold text-3xl md:text-5xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        h4: props => <h4 className='font-title font-bold text-2xl md:text-4xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        h5: props => <h5 className='font-title font-bold text-xl md:text-3xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        h6: props => <h6 className='font-title font-bold text-lg md:text-2xl text-stone-900 leading-snug md:leading-snug' {...props} />,
        normal: props => <p className='font-light text-stone-800 whitespace-pre-wrap leading-relaxed' {...props} />
    },
    marks: {
        strong: props => <strong className='font-medium text-stone-800' {...props} />
    },
    list: {
        bullet: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
        number: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>
    }
}