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
} from "@/assets/Affiliates"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"

import Image from "next/image"

const Affiliates = () => {
  return (
    <SectionContainer className='flex flex-col justify-center items-center relative'>
      
        {/* ARROW LEFT */}
        <div className='max-w-[1.5rem] absolute left-0 top-1/2 -translate-y-1/2'>
          <Image
            src={arrowLeft}
            height={100}
            width={100}
            alt='arrow-left'
          />
        </div>
        {/* ARROW RIGHT */}
        <div className='max-w-[1.5rem] absolute right-0 top-1/2 -translate-y-1/2'>
          <Image
            src={arrowRight}
            height={100}
            width={100}
            alt='arrow-left'
          />
        </div>
        <TitleText
          direction='center'
          size='head'
          className="">
          Our Affiliates
        </TitleText>

        <section className='border flex justify-center gap-10 relative mt-5'>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={fhiLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={lucky365}
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={lawLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={fhiAcademyLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>
        </section>
        <section className='border flex justify-center gap-10'>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={amchamLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={eccpLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>

          <div className='max-w-[17rem] p-4 flex items-center justify-center'>
            <Image
              src={fhiStudioLogo}
              width={150}
              height={100}
              alt=''
            />
          </div>
        </section>
    </SectionContainer>
  )
}

export default Affiliates
