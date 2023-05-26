'use client'
import React from 'react'
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { bgMap } from "@/assets/ContactUs"

const HeroContactUs = () => {
  return (
    <div style={{
        backgroundImage:`url(${bgMap.src})`,
        backgroundPosition: '0 -53px'
      }}
      className="w-full bg-no-repeat bg-clip-content bg-cover">
      <div className="pt-12 w-3/4 mx-auto">
        <div className="pt-12 bg-[#fefefe] rounded-lg mt-[50px]">  
          <div className="flex justify-center"> 
          <TitleText
                size='head'
                direction='center'>
                Contact
            </TitleText>
        </div>
        <section className="flex flex-col items-center justify-around mb-12">
          <Text
            className='font-semibold text-base text-center md:pr-12'>
            Connect with us today were just a form away!
          </Text>
          <div className='md:w-[800px]'>
          <form className="bg-white shadow-md rounded px-8 pt-12 pb-8 mb-4">
                <div className="mb-4 gap-3 md:flex">
                  <div className='mb-2 md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                      Name <span className='text-red-500'>*</span>
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 placeholder:italic placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Last Name, First name"></input>
                  </div>
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="company">
                      Organization Name 
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 placeholder:italic placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company Name"></input>
                  </div>
                </div>
                <div className="mb-4 md:flex gap-3">
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"></input>
                  </div>
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="contactNumber">
                      Contact Number
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="tel"></input>
                  </div>
                </div>
                <div className="mb-4 md:flex gap-3">
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                      Service Interest <span className='text-red-500'>*</span>
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"></input>
                  </div>
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="category">
                      Category
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="category" type="text"></input>
                  </div>
                  <div className='md:w-2/4'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="subCategory">
                      Sub-Category
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="subCategory" type="text"></input>
                  </div>
                </div>
                <div className="mb-4 md:flex gap-3">
                  <div className='w-full'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="subject">
                      Subject <span className='text-red-500'>*</span>
                    </label>
                    <input className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject"></input>
                  </div>
                </div>
                <div className="mb-4 md:flex gap-3">
                  <div className='w-full'>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                      Message <span className='text-red-500'>*</span>
                    </label>
                    <textarea className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight placeholder:italic placeholder:text-sm focus:outline-none focus:shadow-outline" id="subject" rows={5} placeholder='How Can We Help You?'></textarea>
                  </div>
                </div>
                <p className='pt-6 text-center text-sm md:text-md'>At Business Asia Consulting, We are dedicated to safeguarding your information. We assure you that your information will be utilized in adherence to the relevant data privacy regulations, our internal protocols, and our <span className='text-[#2a9df4]'>privacy policy</span>. Given that BAC operates as a global entity, your information may be retained and handled by BAC and its subsidiaries in countries other than your place of residence. Nevertheless, regardless of where your information is processed, We will exercise the same level of caution and respect for your privacy.</p>

              <button type='submit' className='text-[#fefefe] bg-[#2a9df4] w-full py-3 rounded-xl mt-12'>Submit</button>
            </form>
            </div>
        </section>
        </div>
      </div>
      </div>
  )
}

export default HeroContactUs