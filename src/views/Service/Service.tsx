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
      {/* <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx("w-96 h-96 bg-secondary absolute -top-40 ", tablet && 'rotate-[-7deg] !-top-52', phone && '!rotate-[-15deg] !-top-32 w-56 h-64')} />
      <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx("w-96 h-96 bg-primary absolute -top-32 left-10", tablet && 'rotate-[-7deg] !-top-48', phone && '!rotate-[-15deg] !-top-28 w-56 h-64')} /> */}

      {/* bottom */}
      {/* <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx("w-96 h-96 bg-primary absolute bottom-28 -right-48", tablet && 'rotate-[-7deg]')} />
      <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx("w-96 h-96 bg-secondary absolute bottom-40 -right-60", tablet && 'rotate-[-7deg]')} /> */}

      <section style={{
        backgroundImage: `url(${busyBusinessPeopleWalking.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'right',
        clipPath: tablet ? 'polygon(100% 0, 100% 85%, 0 100%, 0 15%)' : 'polygon(100% 0, 100% 76%, 0 100%, 0 24%)',
      }} className="relative flex items-center h-[100vh] bg-slate-400/10">



        {/* MAIN */}
        <SectionContainer>
          <section className={cx('flex justify-center items-center gap-2', 'tablet:flex-col')}>
            {/* LEFT TEXTS */}
            <article className={cx('flex-1', '')}>
              <TitleText
                direction='left'
                size='head'>
                Service Highlights
              </TitleText>
              <Text
                size='description'
                className={cx('font-thin flex-col flex gap-3 mb-3', 'tablet:gap-2 tablet:!text-xs', 'phone:gap-1 phone:!text-[9px]')}>
                <span>
                  Our corporate services are designed to help businesses of all sizes streamline their operations, reduce costs, and stay compliant with local regulations.
                </span>
                <span>
                  Our visa and immigration services are tailored to meet the unique needs of individuals and businesses seeking to relocate or expand their operations overseas
                </span>
                <span>
                  Our outsourcing services enable businesses to focus on their core competencies while we take care of the rest.
                </span>



              </Text>
              {!tablet && <Button
                content='Read More'
                reverse

              />}
            </article>
            {/* RIGHT PICTURES */}
            <article className={cx('flex-1 flex items-center justify-center', 'tablet:!max-w-[22rem]')}>
              <div className={cx("max-w-md", 'tablet:!max-w-sm')}>
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
