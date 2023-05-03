import recDarkBig from "../../assets/Service/Rectangle-dark-big.png"
import recLightBig from "../../assets/Service/Rectangle-light-big.png"
import rectDarkSmall from "../../assets/Service/Rectangle-dark-small.png"
import recLightSmall from "../../assets/Service/Rectangle-light-small.png"
import visaImmigration from "../../assets/Service/Visa&Immigration.png"
import corporate from "../../assets/Service/Corporate.png"
import outsourcing from "../../assets/Service/Outsourcing.png"

import Image from "next/image"
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { Button } from "@/components/Button"
import cx from "clsx"
import { ServiceImageContainer } from "@/components/ServiceImageContainer"
import { SectionContainer } from "@/components/SectionContainer"

const Service = () => {
  return (
    <SectionContainer>
      <section className='border flex max-w-2xl p-5 justify-center items-center'>
        {/* LEFT TEXTS */}
        <article className='flex-1'>
          <TitleText
            direction='left'
            size='sm'>
            Service Highlights
          </TitleText>
          <Text
            size='sm'
            className='font-thin !text-[10px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </Text>
          <Button
            content='Read More'
            reverse
          />
        </article>
        {/* RIGHT PICTURES */}
        <article className='flex-1 border grid grid-cols-2 place-items-center'>
          <ServiceImageContainer
            image={outsourcing}
            tag='Outsourcing'
          />
          <ServiceImageContainer
            image={corporate}
            tag='Corporate'
          />
          <ServiceImageContainer
            image={visaImmigration}
            tag='Visa & Immigration'
          />
        </article>
      </section>
    </SectionContainer>
  )
}

export default Service
