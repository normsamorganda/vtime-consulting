import { AdvantageBox } from "@/components/AdvantageBox"
import { Text } from "@/components/Text"
import innovative from "../../assets/Advantage/innovative.png"
import worldwide from "../../assets/Advantage/worldwide.png"
import crossIndustry from "../../assets/Advantage/cross industry exp.png"
import { TitleText } from "@/components/TitleText"

const Advantages = () => {
  return (
    <div className='border border-red-800 flex justify-center flex-col items-center py-10'>
      <div>
        <TitleText
          size='sm'
          direction='center'>
          Advantages
        </TitleText>
      </div>
      <div className='flex gap-10'>
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
    </div>
  )
}

export default Advantages
