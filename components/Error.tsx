import React, { FC } from 'react'

interface ErrorProps {
    refetch: any
}

const Error: FC<ErrorProps> = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <span className='font-extrabold text-lg'>We have an error.</span>

            <button className=' bg-black rounded text-white px-8 py-2'>
                Retry
            </button>
        </div>
    )
}

export default Error