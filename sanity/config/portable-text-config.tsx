import { PortableTextReactComponents } from '@portabletext/react'

export const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
        normal: props => <p className='mb-4 font-light text-stone-800 whitespace-pre-wrap leading-relaxed' {...props} />
    },
    marks: {
        strong: props => <strong className='font-medium text-stone-800' {...props} />
    }
}