import Image from "next/image"
import { AdvantageBoxProps } from "./types"
import innovative from "../../assets/Advantage/innovative.png"
import { Text } from "../Text"

const AdvantageBox = ({ description, image, className }: AdvantageBoxProps) => {
  return (
    <div className='border border-gray-400/10 shadow-lg rounded-xl flex flex-col items-center p-5 w-36 gap-3'>
      <div className='border border-gray-500/3 p-5 px-5 rounded-full'>
        <Image
          src={image}
          height={30}
          width={30}
          alt={description}
          className='p-1'
        />
      </div>
      <div className='text-center'>
        <Text size='xs'>{description}</Text>
      </div>
    </div>
  )
}

export default AdvantageBox
