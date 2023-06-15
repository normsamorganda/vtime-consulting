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
  square1,
  square2
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
                className={cx('!font-normal text-slate-800/80 flex-col flex gap-3 mb-3', 'tablet:gap-2 tablet:!text-xs', 'phone:gap-1 phone:!text-[9px]')}>
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
            </article>
            {/* RIGHT PICTURES */}
            <article className={cx('flex-1 flex items-center justify-center', 'tablet:!max-w-[400px]')}>
              <div className={cx("relative bg-slate-400/10 h-96 w-[400px] p-20", "tablet:max-w-[350px] tablet:max-h-[300px]", "phone:max-w-[300px] phone:max-h-[240px]")}>
                <article className={cx("absolute top-10 left-[18%] serviceBox", "tablet:top-0 tablet:max-w-[8rem] tablet:left-[21%]", "phone:max-w-[6rem] phone:left-[23%]")} >
                  <Text size="tiny" className={cx("font-medium !text-[10px]", "after:content-[' '] after:absolute after:h-[3px] after:w-4 after:bg-secondary after:-left-5 after:!top-1/2 after:-translate-y-1/2 relative", "left-6", 'phone:!text-[8px]')}>Corporate</Text>
                  <Image src={corporate} width={140} alt="corporate" className={cx("")} />
                </article>
                <article className={cx("absolute bottom-5 left-[6%] serviceBox", "tablet:bottom-2 tablet:border-2 tablet:left-[13%] tablet:max-w-[10rem]", "phone:max-w-[8rem]")}>
                  <Image src={outsourcing} width={190} alt="Outsourcing" className={cx("")} />
                  <Text size="tiny" className={cx("font-medium !text-[10px]", "after:content-[' '] after:absolute after:h-[3px] after:w-4 after:bg-secondary after:-left-5 after:!top-1/2 after:-translate-y-1/2 relative", "left-6", 'phone:!text-[8px]')}>Outsourcing</Text>
                </article>
                <article className={cx("absolute top-32 right-6 serviceBox", "tablet:top-20 tablet:max-w-[8rem] tablet:right-2", "phone:max-w-[6.5rem] phone:top-14 phone:right-5")}>
                  <Image src={visaImmigration} width={150} alt="Visa & Immigration" className={cx("")} />
                  <Text size="tiny" className={cx("font-medium !text-[10px]", "after:content-[' '] after:absolute after:h-[3px] after:w-4 after:bg-secondary after:-left-5 after:!top-1/2 after:-translate-y-1/2 relative", "left-6", 'phone:!text-[8px]')}>Visa & Immigration</Text>
                </article>
              </div>
            </article>
          </section>
        </SectionContainer>


      </section>

      <Image src={square1} alt="square1" className="absolute top-[31px] left-[38px] h-[16rem] w-[45rem] transform rotate-2 hidden 2xl:block"></Image>
      <Image src={square2} alt="square2" className="absolute top-[631px] left-[1538px] h-[14rem] w-[22rem] transform rotate-[-3] hidden 2xl:block"></Image>


    </section>

  )
}
export default Service
