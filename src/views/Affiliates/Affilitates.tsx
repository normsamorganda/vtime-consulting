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
  nAffiliatesBg,
} from "@/assets/Affiliates"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"

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
  return (
    <section className="relative flex items-center h-[2000px] border-4 border-green-950" style={{
      backgroundImage: `url(${nAffiliatesBg.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <SectionContainer className='flex flex-col justify-center items-center'>

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

        <section className='flex flex-col justify-center items-center gap-10 w-full'>
          <TitleText
            direction='center'
            size='head'
          >
            Our Affiliates
          </TitleText>


          <div className="flex flex-wrap gap-10 items-center justify-center border border-green-900">
            {logos.map((value, index) => {
              return <div key={index} className="border p-2 w-60">
                <Image src={value.src} alt={value.alt} width={200} height={100} />
              </div>
            })}
          </div>


        </section>
      </SectionContainer>
    </section>
  )
}

export default Affiliates
