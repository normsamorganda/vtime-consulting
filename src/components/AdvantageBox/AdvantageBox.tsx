import Image from "next/image"
import { AdvantageBoxProps } from "./types"
import innovative from "../../assets/Advantage/innovative.png"
import { Text } from "../Text"

const AdvantageBox = ({ description, image, className }: AdvantageBoxProps) => {
  return (
    <div className='shadow-lg rounded-xl flex flex-col items-center p-5 w-72 h-80 justify-evenly'>
      <div className='border border-gray-500/10 rounded-full w-[150px] h-[150px] flex items-center justify-evenly'>
        <Image
          src={image}
          height={50}
          width={65}
          alt={description}
          className='p-2'
        />
      </div>
      <div className='text-center'>
        <Text size='subtitle'>{description}</Text>
      </div>
    </div>
  )
}

export default AdvantageBox
