import { classNames } from '@/utils/tailwindHelper'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function Text({
    children,
    className = '',
    style = {}
}: Props)
{
    return <p
        className={classNames(
            className,
            'font-light text-stone-800 whitespace-pre-wrap leading-relaxed'
        )}
        style={style}
    >
        {children}
    </p>
}