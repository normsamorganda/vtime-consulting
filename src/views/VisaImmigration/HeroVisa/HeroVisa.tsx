'use client'
import { AirportTeamBg } from "@/assets/VisaImmigration";

const HeroService = () => {
  return (
    <div className="flex-col flex w-full">
    <section style={{
        backgroundImage: `url(${AirportTeamBg.src})`,
        }} className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
            
    </section>  
</div>
  )
}

export default HeroService