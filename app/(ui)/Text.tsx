type Props = {
    children: React.ReactNode
}

export default function Text({ children }: Props)
{
    return <p className='font-light text-stone-800 whitespace-pre-wrap leading-relaxed'>
        {children}
    </p>
}