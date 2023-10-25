import React, { FC } from 'react'
import ImageList from './ImageList';

interface RoomProps {
  data: any;
}


const Room: FC<RoomProps> = ({ data }) => {

  const { data: resObject } = data;

  return (
    <div className='h-full'>
      <ImageList gallery={resObject?.gallery} />

      <div className='grid grid-cols-2 gap-2 mb-5'>
        <div className='flex flex-col'>
          <span className='font-bold text-xl mb-3'>About this place</span>
          <span className=' tracking-wider'>{resObject?.description}</span>
        </div>

        <div className='flex flex-col'>
          <span className='font-bold text-xl mb-3'>Price to stay here</span>
          <span className=' tracking-wider font-extrabold'>$ {resObject?.price} per night</span>
        </div>

      </div>

      <div className='flex flex-col w-1/2'>
        <span className='font-bold text-xl mb-3'>Amenities</span>

        {
          resObject?.amenities?.length === 0 ?
            <div>
              No amenities provided
            </div>
            :
            <div className='grid grid-cols-2 gap-2'>
              {
                resObject?.amenities?.map((el: string, index: number) => {
                  return (
                    <span className=' tracking-wider' key={index}>{el}</span>
                  )
                })
              }
            </div>
        }


      </div>

    </div>
  )
}

export default Room
