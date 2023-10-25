import Image from 'next/image'
import React, { FC } from 'react'

interface ImageProps {
    gallery: string[]
}

const ImageList: FC<ImageProps> = ({ gallery }) => {
    const firstImage: string = gallery?.[0];

    const otherImages: string[] = gallery.slice(1);

    return (
        <div className='mb-5'>

            {
                gallery?.length === 0 ?
                    <div className='h-96 border flex justify-center items-center rounded-md'>
                        No images provided
                    </div>
                    :
                    <div className='grid grid-cols-2 gap-2 h-full'>

                        <Image
                            alt='room image'
                            src={firstImage}
                            className='rounded-lg mx-auto'
                            width={700}
                            height={350}
                            loading='lazy'
                        />

                        <div className='grid grid-cols-2 gap-2 h-full'>
                            {
                                otherImages?.map((el: string, index: number) => {
                                    return (
                                        <Image
                                            alt='room image'
                                            src={el}
                                            className='rounded-lg mx-auto'
                                            width={550}
                                            height={240}
                                            loading='lazy'
                                            key={index}
                                        />

                                    )
                                })
                            }
                        </div>


                    </div>
            }

        </div>

    )
}


export default ImageList