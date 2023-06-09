'use client'
import { Text } from "@/components/Text"
import heroBg from "../../assets/Hero/modern-business-buildings-financial-district.png"
import { Button } from "@/components/Button"
import { nHeroBg } from "@/assets/Hero"
import cx from "clsx"
import useSize from "@/hooks/useSize"
import { useEffect, useState } from "react"
import { url } from "inspector"
import Link from "next/link"
const Hero = () => {

  const [animationStopped, setAnimationStopped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStopped(true);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${nHeroBg.src})`,
      }}
      className={cx('relative bg-no-repeat bg-center bg-cover z-0 px-5 h-[110vh]', 'tablet:h-[95vh]')}>
      <div className={cx('max-w-xl p-5 rounded-lg bg-slate-800/50 relative top-[7%] left-[15%]', 'tablet:!left-1/2 tablet:-translate-x-1/2 tablet:!max-w-lg')}>
        <Text
          size='hero'
          className={cx('text-white mt-2 !font-thin !text-4xl', 'tablet:!text-xl')}>
          Why Choose
        </Text>
        <Text
          size='title'
          className={cx('text-white font-bold mt-3 !text-5xl', 'tablet:!text-[3rem]', 'phone:!text-[2rem]')}>
        FH International
        </Text>
        <Text
          size='title'
          className={cx('text-white font-bold mt-3 !text-5xl', 'tablet:!text-[3rem]', 'phone:!text-[2rem]')}>
          Consulting Co. Inc?
        </Text>
        <div className="w-full mx-auto">
        <Link href='/TheCompany'>
          <Button
            content='Read'
            className={cx('mt-10', 'tablet:mt-5')}
          />
        </Link>
        </div>
       
        
      </div>
      {/* <div className="tablet:hidden !tablet:block">
          <div className="ocean">
              <div className={`wave ${!animationStopped ? 'wave' : 'paused' }`}></div>
          </div> 
        </div> */}
    
    </section>
  )
}

export default Hero
