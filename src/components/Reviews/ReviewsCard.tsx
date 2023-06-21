'use client'
import Image from 'next/image';
import React from 'react';

const ReviewsCard = ({key, intro, subIntro, name, title, img} : any) => {
  return (
    <div className='shadow-custom p-6 my-[20px] mx-[13px] rounded-3xl md:py-12 '>
    <h1 className='font-bold text-[12px]'>{intro}</h1>
    <p className="py-6 text-[12px] italic">{subIntro}</p>
        <div className="flex justify-start items-center">
            <Image src={img} alt="picAvat" className="inline"></Image>
            <div className="ml-6 text-[12px]">
                <h2>{name}</h2>
                <h2>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard