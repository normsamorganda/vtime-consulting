'use client'
import React from 'react'
import { businessPeople } from "@/assets/Outsourcing";

const HeroOutsourcing = () => {
  return (
    <div className="flex-col flex w-full">
    <section style={{
        backgroundImage: `url(${businessPeople.src})`,
        }} className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
            
    </section>  
</div>
  )
}

export default HeroOutsourcing

