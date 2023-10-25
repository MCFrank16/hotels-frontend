import React, { FC } from 'react'
import { RoomCardProps } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
    room: RoomCardProps
}
const RoomCard: FC<CardProps> = ({ room }) => {
    const { image, hoster, city, price, id } = room;
    return (
        <Link href={`/room/${id}`} className='p-2 h-auto border border-gray-300 rounded cursor-pointer'>
            <Image 
                alt='room image' 
                src={image}  
                width={350}
                height={100} 
                loading='lazy'
            />

            <div className='flex flex-col mt-3'>
                <span className='font-extrabold truncate'>{city}</span>
                <span className='text-gray-600'>{hoster}</span>

                <span className=' font-medium'>${price} per night</span>
            </div>
        </Link>
    )
}

export default RoomCard
