import { classNames } from '@/utils/tailwindHelper'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function Title({
    children,
    className = '',
    style = {}
}: Props)
{
    return <h1
        className={classNames(
            className,
            'font-title font-bold text-5xl md:text-7xl text-stone-900 leading-snug md:leading-snug'
        )}
        style={style}
    >
        {children}
    </h1>
}