'use client';

import React from 'react'
import { Error, Loader, Room } from '@/components';
import { useQuery } from 'react-query';
import { getSingleRoom } from '@/lib/rooms';

const SingleRoomPage = ({ params }: { params: { id: string } }) => {


  const { isLoading, isError, refetch, data: results } = useQuery(['fetch single room', params?.id], () => {
    return getSingleRoom(params?.id);
  }, {
    retry: false,
    keepPreviousData: true
  })

  return (
    <div className='h-full'>
      {
        isLoading ?
          <Loader />
          :
          isError ?
            <Error refetch={refetch()} />
            :
            <div className='h-full mx-56 my-4 p-3'>
              <Room data={results} />
            </div>
      }
    </div>
  )
}

export default SingleRoomPage