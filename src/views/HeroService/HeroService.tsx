'use client'
import { workingTeamBg } from "@/assets/Hero";

const HeroService = () => {
  return (
    <div className="flex-col flex w-full">
    <section style={{
        backgroundImage: `url(${workingTeamBg.src})`,
        }} className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
            
    </section>  
</div>
  )
}

export default HeroService