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
  const { tablet, phone } = useSize()
  return (
    <SectionContainer className='flex justify-center flex-col flex-wrap'>
      <div className='grid place-items-center'>
        <TitleText
          size='head'
          direction='center'>
          Advantages
        </TitleText>
      </div>
      <div className={cx('flex justify-between items-center max-md:justify-center', 'tablet:flex-col gap-16', 'phone:!gap-5')}>
        <AdvantageBox
          description='Innovative'
          image={innovative}
        />
        <AdvantageBox
          image={crossIndustry}
          description='Cross Industry Experience'
        />
        <AdvantageBox
          image={worldwide}
          description='Wide Global Connection'
        />
      </div>
    </SectionContainer>
  )
}

export default Advantages
