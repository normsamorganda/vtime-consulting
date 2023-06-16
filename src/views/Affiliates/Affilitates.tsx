'use client'
import {
  amchamLogo,
  arrowLeft,
  arrowRight,
  eccpLogo,
  fhiAcademyLogo,
  fhiLogo,
  fhiStudioLogo,
  lawLogo,
  lucky365,
  square4,
} from "@/assets/Affiliates"

import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"
import useSize from "@/hooks/useSize"
import cx from "clsx"

import Image from "next/image"



const logos = [
  {
    src: fhiLogo,
    alt: 'FHI LOGO'

  },
  {
    src: lucky365,
    alt: 'LUCKY 365'
  },
  {
    src: lawLogo,
    alt: 'VIM ASSOCIATES LAW OFFICE'

  },
  {
    src: fhiAcademyLogo,
    alt: 'FHI INTERNATIONAL ACADEMY'
  },
  {
    src: amchamLogo,
    alt: 'AMCHAM'

  },
  {
    src: eccpLogo,
    alt: 'ECCP'
  },
  {
    src: fhiStudioLogo,
    alt: 'FHI STUDIO'

  },


]


const Affiliates = () => {
  const { tablet, phone } = useSize()

  return (

    <section className="relative">
      {/* top */}
      {/* <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx(" w-96 h-96 bg-secondary absolute -top-48 left-3", phone && '!-top-64 !left-0 -rotate-[17deg]')} />
      <div style={{
        clipPath: 'polygon(100% 69%, 100% 89%, 0 100%, 0 80%)',
      }} className={cx(" w-96 h-96 bg-primary absolute -top-40", phone && '-rotate-[16deg]')} /> */}

      <section style={{
        clipPath: tablet ? 'polygon(100% 0, 100% 85%, 0 100%, 0 15%)' : 'polygon(100% 0, 100% 76%, 0 100%, 0 24%)',
      }} className="relative flex items-center h-[100vh] bg-slate-400/10 phone:clip">

        <SectionContainer className='flex flex-col justify-center items-center'>
          <section className='flex flex-col justify-center items-center'>
            <TitleText
              direction='center'
              size='head'
            >
              Our Affiliates
            </TitleText>


            {!tablet ? <div className="flex flex-col gap-3">
              {/* TOP */}
              <section className="flex gap-3">
                <div className={cx("p-2 flex items-center w-40 h-20")}>
                  <Image src={fhiLogo} alt="fhilogo" width={120} height={100} />
                </div>
                <div className={cx("p-2 flex items-center w-40 h-20")}>
                  <Image src={lucky365} alt="lawlogo" width={120} height={100} />
                </div>
                <div className={cx("p-2 flex items-center w-40 h-20")}>
                  <Image src={lawLogo} alt="lawLogo" width={120} height={100} />
                </div>
                <div className={cx("p-2 flex items-center w-40 h-20")}>
                  <Image src={fhiAcademyLogo} alt="fhiAcademyLogo" width={120} height={100} />
                </div>
              </section>
              {/* BOTTOM */}
              <section className="flex gap-3">
                <div className={cx("p-2 flex items-center w-40 h-20 flex-1 justify-center")}>
                  <Image src={amchamLogo} alt="achamLogo" width={120} height={100} />
                </div>
                <div className={cx("p-2 flex items-center w-40 h-20 flex-1 justify-center")}>
                  <Image src={eccpLogo} alt="eccLogo" width={120} height={100} />
                </div>
                <div className={cx("p-2 flex items-center w-40 h-20 flex-1 justify-center")}>
                  <Image src={fhiStudioLogo} alt="fhiStudioLogo" width={120} height={100} />
                </div>
              </section>
            </div> : <div className="flex flex-col">

              {/* 1st row */}
              <section className="flex">
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={fhiLogo} alt="fhilogo" width={120} height={100} />
                </div>
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={lucky365} alt="lawlogo" width={120} height={100} />
                </div>
              </section>

              {/* 2nd row */}
              <section className="flex">
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={lawLogo} alt="lawLogo" width={120} height={100} />
                </div>
              </section>


              {/* 3rd row */}
              <section className="flex gap-1">
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={fhiAcademyLogo} alt="fhiAcademyLogo" width={120} height={100} />
                </div>
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={amchamLogo} alt="achamLogo" width={120} height={100} />
                </div>
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={fhiStudioLogo} alt="fhiStudioLogo" width={120} height={100} />
                </div>
              </section>


              {/* BOTTOM */}
              <section className="flex">
                <div className={cx("p-1 flex items-center w-28 h-20 flex-1 justify-center", 'phone:!w-20 h-16')}>
                  <Image src={eccpLogo} alt="eccLogo" width={80} height={100} />
                </div>
              </section>
            </div>}


          </section>
        </SectionContainer>
      </section>

      {/* <Image src={square4} alt="square1" className="absolute top-[861px] left-[10px] h-[14rem] w-[27rem] transform rotate-1 hidden 2xl:block"></Image> */}


    </section>
  )
}

export default Affiliates
