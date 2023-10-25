'use client';

import React, { useState, useEffect } from 'react'
import { getAllRooms } from '@/lib/rooms';
import { useInfiniteQuery } from 'react-query';
import RoomCard from './RoomCard';
import { RoomCardProps } from '@/types';
import { Error, Loader } from '.';


const Listing = () => {

  const [nextPage, setNextPage] = useState(undefined);

  const { isLoading, isError, data: results, fetchNextPage, refetch } = useInfiniteQuery(["fetch rooms"], ({ pageParam = 1 }) => {
    const query = `page=${pageParam}&&limit=10`;
    setNextPage(pageParam + 1);
    return getAllRooms(query);
  },
    {
      retry: false,
      keepPreviousData: false,
      select: (data) => {
        const combinedPages = data?.pages.reduce((acc, page) => {
          return [...acc, ...page?.data]
        }, [])

        return {
          pages: [...combinedPages],
          pageParams: [],
        };
      },
      getNextPageParam: (lastPage, _pages) => {
        const { data } = lastPage;
        return data?.length > 0 ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight) {

        fetchNextPage()
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-full'>
      <div className='h-full mx-56 my-4'>
        {
          isLoading ?
            <Loader />
            :
            isError ?
              <Error refetch={refetch()} />
              :
              <div className='grid grid-cols-4 gap-4'>
                {
                  results?.pages?.map((el: any, index: any) => {
                    const obj: RoomCardProps = {
                      image: `${el?.avatar}`,
                      city: `${el?.city}, ${el?.country}`,
                      price: el?.price,
                      hoster: el?.hoster,
                      id: el?.id
                    }
                    return (
                      <RoomCard room={obj} />
                    )
                  })
                }
              </div>
        }
      </div>
    </div>
  )
}

export default Listing
