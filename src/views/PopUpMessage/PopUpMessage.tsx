'use client'
import React, { useEffect, useState } from 'react'
import { notification } from '@/assets/ContactUs'
import Image from 'next/image'
const PopUpMessage = () => {

    const [close, setClose] = useState(true)

    const closeMessage = () => {
        setClose(false)
    }

    useEffect(() => {
        setTimeout(() => {
                    setClose(true)
            },10000)
      
    },[close])

  return (
    <div className={`${close ? 'absolute z-[100] top-[30px] right-[191px]' : 'hidden'}`}>
        <div className='w-[400px] shadow-darkCustom text-center bg-white rounded-3xl'>
            <div className='w-[370px] flex justify-end py-3'>
                  <span className='text-2xl cursor-pointer text-gray-300' onClick={closeMessage}> X</span> 
            </div>
            <div className='w-[300px] mx-auto flex flex-col justify-center'>
                <div className='w-full mb-12'>
                    <Image src={notification} alt='notif' className='mx-auto'/>
                </div>
                <h1 className='text-primary text-3xl'>Thank you for contacting us!</h1>
                <p className='mb-12 mt-4'>We have received your message and our customer service will respond to you as soon as possible</p>
                <button className='text-white bg-primary py-3 rounded-xl my-4' onClick={closeMessage}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default PopUpMessage