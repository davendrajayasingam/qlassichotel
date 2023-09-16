'use client'

import { Room } from '@/types/Room'
import RoomItem from './RoomItem'

type Props = {
    heading: string
    title: string
    rooms: Room[]
}


export default function OurRooms({ heading, title, rooms }: Props)
{
    return <section className='bg-stone-100'>

        <div className='px-4 pt-16 max-w-screen-md mx-auto'>

            <h6 className='pb-4 font-medium text-sm tracking-[0.75em] text-stone-400 text-center'>
                {heading}
            </h6>

            <h1 className='font-title font-bold text-7xl text-stone-900 text-center'>
                {title}
            </h1>

        </div>

        {rooms.map((room, idx) => <RoomItem
            key={room.name}
            room={room}
            index={idx}
        />)}

    </section>
}