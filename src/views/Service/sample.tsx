'use client'
import {
  serviceBgOverlay,
  rectDarkBg,
  rectDarkSm,
  rectLightBg,
  rectLightSm,
  visaImmigration,
  corporate,
  outsourcing,
  busyBusinessPeopleWalking,
  servicesImage,
  servicesBg2,
  layerBg,
  layerBg2,
  layerBg3,
  servicesBg,
  nServiceBg
} from "@/assets/Service"

import Image from "next/image"
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { Button } from "@/components/Button"
import cx from "clsx"
import { ServiceImageContainer } from "@/components/ServiceImageContainer"
import { SectionContainer } from "@/components/SectionContainer"
import useSize from "@/hooks/useSize"

const Service = () => {
  const { tablet, phone } = useSize()

  return (
    <section className="relative overflow-hidden">
      {/* {/_ top _/} */}

      {/* bottom */}
      <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className=" w-96 h-96 bg-primary absolute bottom-28 -right-48" />
      <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className=" w-96 h-96 bg-secondary absolute bottom-40 -right-60" />

      <section style={{
        backgroundImage: `url(${busyBusinessPeopleWalking.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'right',
        // opacity: 0.1,
        clipPath: 'polygon(100% 0, 100% 80%, 0 100%, 0 20%)',
      }} className="relative flex items-center h-[100vh] bg-slate-400/10 after:content-[' '] after:bg-[#1b609c] after:absolute  after:w-96 after:h-28 after:top-[200px] after:-translate-y-1/2 after:-left-5 ml-5">

        <div style={{
          clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
        }} className=" w-96 h-96 bg-secondary absolute -top-36 z-40" />
        <div style={{
          clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
        }} className=" w-96 h-96 bg-primary absolute -top-0 left-20 z-40" />


        {/* MAIN */}
        <SectionContainer>
          <section className={cx('flex justify-center items-center gap-2', tablet && 'flex-col')}>
            {/* LEFT TEXTS */}
            <article className='flex-1'>
              <TitleText
                direction='left'
                size='head'>
                Service Highlights
              </TitleText>
              <Text
                size='description'
                className={cx('font-thin flex-col flex gap-3 mb-7', tablet && 'gap-2 !text-xs')}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet,
                </span>

                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nesciunt.
                </span>


              </Text>
              {!tablet && <Button
                content='Read More'
                reverse

              />}
            </article>
            {/* RIGHT PICTURES */}
            <article className='flex-1 flex items-center justify-center'>
              <div className={cx("max-w-md", tablet && '!max-w-xs')}>
                <Image src={servicesImage} alt="services images" height={100} width={500} />
              </div>
            </article>
          </section>
        </SectionContainer>


      </section>


    </section>

  )
}
export default Service
