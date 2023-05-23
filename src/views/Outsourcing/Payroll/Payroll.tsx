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
        clipPath: tablet ? 'polygon(0 21%, 100% 13%, 100% 65%, 0 73%)' : 'polygon(0 20%, 100% 0, 100% 79%, 0 98%)',
      }} className='w-full h-screen relative bottom-12'>
         <div className='relative w-4/5 mx-auto top-[200px] md:w-3/5'>
                <h1 className='text-md font-bold pb-3 md:text-xl'>Payroll</h1>
                <p className='text-[12px] pb-3 md:text-base'>Steamline your business operations and ensure accurately and timely payments for your employees with our reliable and efficient payroll assistance</p>
                <ul className='list-disc text-[12px] md:text-base md:flex md:my-6'>
                    <div>
                        <li className='md:py-4'>Basic salaries, overtime pay, night dffertial, rest day and holiday pay</li>
                        <li className='md:py-4'>Employee leaves as well as track available leave balances</li>
                        <li className='md:py-4'>WTAX, Annual Tax, Final Tax, Fringe, Benefits Tax, and other taxes applicable to the employees</li>
                        <li className='md:py-4'>SSS, PHIC, HDM, And Union contributions</li>
                        <li className='md:py-4'>13th month pay and other bonuses and benefits</li>
                        <li className='md:py-4'>Monthly, Quarterly, and Annual goverment forms</li>
                    </div>
                    <li className='md:ml-10'>
                        Other Forms such as:
                            <ul className='list-disc pl-8 md:text-base md:py-4'>
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

