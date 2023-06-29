'use-client'
import React from 'react'
import { rectangle } from "@/assets/Outsourcing";
import Image from 'next/image';
const HRContainer = () => {
  return (
    <div className='w-[90%] md:w-3/5 mx-auto '>
            <h1 className='font-bold text-lg'>Human Resources</h1>
            <p className='text-[12px] text-justify pt-3 text-sm'>Our diverse team of experts all work together to ensure that you company &apos; HR requirements and infrastructure is build constant grwoth and effciency</p>
            <div className='flex flex-col justify-around items-start mt-10 lg:flex-row'>
                <div className='shadow-lg shadow-gray-500/50 rounded-xl order-2 lg:order-1 md:w-[500px]'>
                    <div className='pt-6 pl-12 text-justify'>
                        <ul className='pb-6'>
                            <li className='font-bold list-disc marker:text-primary text-lg'>Organizational Development</li>
                            <ul className='px-5 pt-3 list-disc marker:text-primary text-sm'>
                                <li>Helps you apply processes, techniques, and systems to bring positive changes to your company</li>
                            </ul>
                        </ul>
                        <ul className='pb-6'>
                            <li className='font-bold list-disc marker:text-primary text-lg'>Record Management</li>
                            <ul className='px-5 pt-3 list-disc marker:text-primary text-sm'>
                            <li className='px-5 pt-3 text-sm'>Supervise and administer your company&apos; digital or paper records in any format</li>
                            </ul>
                        </ul>
                        <ul className='pb-6'>
                            <li className='font-bold list-disc marker:text-primary text-lg  '>Employee Benefits</li>
                            <ul className='px-5 pt-3 list-disc marker:text-primary text-sm'>
                            <li className='px-5 pt-3 text-sm '>Assists you in processing the ff: HMO, Group Insurance, Retirement Benefits, Loan, and Others</li>
                            </ul>
                        </ul >
                        <ul className='pb-6 list-disc marker:text-primary'>
                            <li className='font-bold pb-3 text-lg md:pb-6'>Talent Acquisitions</li>
                            <li className='font-bold text-lg md:py-3'>Executive Coaching</li>
                        </ul>
                    </div>
                </div>
                <div className='order-1 lg:order-2'>  
                    <Image src={rectangle} width={500} alt='rectangle' className='min-w-lg'>
                    </Image>
                </div>
            </div>
      
    </div>
  )
}

export default HRContainer