'use client'
import React, { useEffect, useState } from 'react'
import { notification } from '@/assets/ContactUs'
import Image from 'next/image'
import ActiveLink from '@/components/ActiveLink/ActiveLink'
const PopUpMessage = ({submitHandle}:any) => {

  return (
    <div className='fixed z-[1000] top-0 left-0 bg-opacityFade w-full h-full'>
        <div className='w-[400px] text-center bg-white rounded-3xl mx-auto mt-[220px]'>
            <div className='w-[370px] flex justify-end py-3'>
                  <span className='text-2xl cursor-pointer text-gray-300' onClick={submitHandle}>X</span> 
            </div>
            <div className='w-[300px] mx-auto flex flex-col justify-center'>
                <div className='w-full mb-12'>
                    <Image src={notification} alt='notif' className='mx-auto'/>
                </div>
                <h1 className='text-primary text-3xl'>Thank you for contacting us!</h1>
                <p className='mb-12 mt-4'>We have received your message and our customer service will respond to you as soon as possible</p>
                <button className='text-white bg-primary py-3 rounded-xl my-4' onClick={submitHandle}>Close</button>
            </div>
        </div>
        <ActiveLink/>
        </div>
        
  )
}

export default PopUpMessage