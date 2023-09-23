import { classNames } from '@/utils/tailwindHelper'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function Heading({
    children,
    className = '',
    style = {}
}: Props)
{
    return <h6
        className={classNames(
            className,
            'font-medium text-sm tracking-[0.75em] text-stone-400',
        )}
        style={style}
    >
        {children}
    </h6>
}