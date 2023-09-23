import { classNames } from '@/utils/tailwindHelper'

type Props = {
    children: React.ReactNode
    backgroundColor?: 'light' | 'default' | 'dark'
    className?: string
    style?: React.CSSProperties
}

export default function MediumContainer({
    children,
    backgroundColor = 'default',
    className = '',
    style = {}
}: Props)
{
    return <div
        className={classNames(
            className,
            backgroundColor === 'light' ? 'bg-stone-100' : backgroundColor === 'dark' ? 'bg-stone-900' : 'bg-stone-200',
        )}
        style={style}
    >
        <div className='px-4 py-16 max-w-screen-md mx-auto space-y-16'>
            {children}
        </div>
    </div>
}