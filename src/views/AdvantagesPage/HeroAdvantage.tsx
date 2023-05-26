'use client'
import {peopleClose} from '@/assets/Advantage'
import React from 'react'

const HeroAdvantage = () => {
  return (
<div className="flex-col flex w-full h-screen">
    <section style={{
        backgroundImage: `url(${peopleClose.src})`,
        }} className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
            
    </section>  
    </div>
  )
}

export default HeroAdvantage