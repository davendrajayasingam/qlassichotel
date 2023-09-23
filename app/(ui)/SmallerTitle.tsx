import { classNames } from '@/utils/tailwindHelper'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function SmallerTitle({
    children,
    className = '',
    style = {}
}: Props)
{
    return <h6
        className={classNames(
            className,
            'font-title font-bold text-4xl text-stone-800 leading-relaxed',
        )}
        style={style}
    >
        {children}
    </h6>
}