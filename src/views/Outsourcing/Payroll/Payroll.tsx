'use client'
import React from 'react'
import { people } from "@/assets/Outsourcing";
import useSize from "@/hooks/useSize"

const Payroll = () => {
    const { tablet, phone } = useSize()

  return (
    <div className="flex-col flex w-full">
    <section style={{
        backgroundImage: `url(${people.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'right',
        clipPath: phone ? 'polygon(100% 0, 100% 85%, 0 100%, 0 15%)' : 'polygon(100% 0px, 100% 93%, 0px 100%, 0px 11%)',
      }} className='w-full h-[700px] phoneSe:h-[672px] sm:h-[790px] lg:h-[653px]'>
         <div className='w-4/5 mx-auto pt-[108px] md:w-3/5'>
                <h1 className='font-bold pb-3 text-lg'>Payroll</h1>
                <p className='text-sm pb-3'>Steamline your business operations and ensure accurately and timely payments for your employees with our reliable and efficient payroll assistance</p>
                <ul className='list-disc marker:text-primary text-sm md:flex md:my-6'>
                    <div>
                        <li className='md:py-4 pb-2'>Basic salaries, overtime pay, night dffertial, rest day and holiday pay</li>
                        <li className='md:py-4 pb-2'>Employee leaves as well as track available leave balances</li>
                        <li className='md:py-4 pb-2'>WTAX, Annual Tax, Final Tax, Fringe, Benefits Tax, and other taxes applicable to the employees</li>
                        <li className='md:py-4 pb-2'>SSS, PHIC, HDM, And Union contributions</li>
                        <li className='md:py-4 pb-2'>13th month pay and other bonuses and benefits</li>
                        <li className='md:py-4 pb-2'>Monthly, Quarterly, and Annual goverment forms</li>
                    </div>
                    <li className='mt-5 md:ml-10'>
                        <span>Other Forms such as:</span>
                            <ul className='list-disc marker:text-primary pl-8 md:py-4'>
                                <li className='md:py-4'>BIR Form 1601-C</li>
                                <li className='md:py-4'>BIR Form 2316</li>
                                <li className='md:py-4'>BIR Form 1404-CF with Alpha list and data file</li>
                            </ul>
                    </li>

                </ul>
        </div>
    </section>  
   
</div>
  )
}

export default Payroll

