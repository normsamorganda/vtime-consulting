'use client'
import React from 'react'
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { bgMap } from "@/assets/ContactUs"

const HeroContactUs = () => {
  return (
    <div style={{
        backgroundImage:`url(${bgMap.src})`,
        backgroundPosition:'0px -50px;'

      }}
      className="w-full h-screen bg-no-repeat bg-clip-content bg-cover bg-center">
      <div className="pt-12 w-3/4 mx-auto">
        <div className="pt-12 bg-[#fefefe] rounded-lg mt-[50px] h-[1200px]">  
          <div className="flex justify-center"> 
          <TitleText
                size='head'
                direction='center'>
                Contact
            </TitleText>
        </div>
        <section className="flex items-center justify-around mb-5">
          <Text
            className='font-semibold text-base pr-12'>
            Connect with us today – we're just a form away!
          </Text>
      
        </section>
        <section className="flex justify-center items-center mx-auto rounded-3xl md:w-[530px] xl:w-[1000px]">
    
      </section>
        </div>
      </div>
      </div>
  )
}

export default HeroContactUs