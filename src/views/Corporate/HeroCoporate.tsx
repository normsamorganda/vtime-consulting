'use client'
import { botBuilding } from "@/assets/Hero";

const HeroCoporate = ({imgHero}:any) => {
  return (
    <div className="flex-col flex w-full">
    <section style={{
        backgroundImage: `url(${imgHero.src})`,
        }} className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
            
    </section>  
</div>
  )
}

export default HeroCoporate