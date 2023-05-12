'use client'
import { AdvantageBox } from "@/components/AdvantageBox"
import { Text } from "@/components/Text"
import innovative from "../../assets/Advantage/innovative.png"
import worldwide from "../../assets/Advantage/worldwide.png"
import crossIndustry from "../../assets/Advantage/cross industry exp.png"
import { TitleText } from "@/components/TitleText"
import { SectionContainer } from "@/components/SectionContainer"
import useSize from "@/hooks/useSize"
import cx from "clsx"

const Advantages = () => {
  return (
    <section >
      <SectionContainer className='flex justify-center flex-col flex-wrap '>
        <div className='grid place-items-center mb-6'>
          <TitleText
            size='head'
            direction='center'>
            Advantages
          </TitleText>
        </div>
        <div className={cx('flex justify-between gap-0 items-center', 'tablet:flex-col gap-16', 'phone:gap-5')}>
          <AdvantageBox
            title="Innovative"
            description='We exceed expectations and provide business excellence.'
            image={innovative}
          />
          <AdvantageBox
            title="Cross Industry Experience"
            image={crossIndustry}
            description='We bring perspectives and promote out-of-the-box ideas.'
          />
          <AdvantageBox
            title="Wide Global Connection"
            image={worldwide}
            description='We have trusted connections from different parts of the world.'
          />
        </div>
      </SectionContainer>
    </section>
  )
}

export default Advantages
