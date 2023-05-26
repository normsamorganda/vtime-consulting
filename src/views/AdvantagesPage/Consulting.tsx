'use client'
import React from 'react'
import { present } from '@/assets/Advantage'
import Image from 'next/image'
import { TitleText } from "@/components/TitleText"

const Consulting = () => {
  return (
    <div className='max-w-[75rem] mx-auto'>
        <h1 className='text-center text-lg font-bold md:text-2xl'>Why our consulting firm?</h1>
        <div className='flex flex-col mt-6 md:flex-row'>
            <div className='w-4/5 pl-6 mx-auto md:w-2/4 '>
                <div className='md:w-2/3 mb-8'>
                    <TitleText
                     direction='left'>
                        <span className='text-lg'> We are industry experts</span>
                    </TitleText>
                    <p className='text-xs pb-12'>We are a pioneering group of business consultants for international clients in the <span className='text-[#2a9df4]'>PHILIPPINES</span>. Since being founded in 2000, we have been consistently providing professional consulting services to those who believe in the business potential of the local market.</p>
                </div>
                <div className='md:w-2/3 mb-8'>
                    <TitleText
                     direction='left'>
                        <span className='text-lg'> We are multilingual</span>
                    </TitleText>
                    <p className='text-xs pb-12'>Our international consulting managers are trained to assist you throughout every business procedure in English, Chinese, Korean, and Japanese.</p>
                </div>
                <div className='md:w-2/3'>
                    <TitleText
                     direction='left'>
                        <span className='text-lg'> We are multilingual</span>
                    </TitleText>
                    <p className='text-xs pb-12'>With our personalized customer service, we guarantee that you will receive support for your unique and specific needs at all times.</p>
                </div>
            </div>
            <div className='w-4/5 pl-6 mx-auto md:w-2/4'>
                <div className='md:w-2/3'>
                    <TitleText
                     direction='left'>
                        <span className='text-lg'> We are your One-Stop Shop</span>
                    </TitleText>
                    <p className='text-xs pb-12'>From business registration to hiring to visa processing, <span className='text-[#2a9df4]'>Business Asia Consulting </span>has all the services you need under one roof to establish a successful business here in the <span className='text-[#2a9df4]'>PHILIPPINES</span>.</p>
                </div>
                <div>

                    <Image src={present} alt='presentation'>

                    </Image>

                </div>
              
            </div>

            

        </div>
    </div>
  )
}

export default Consulting