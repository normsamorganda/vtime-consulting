import Image from "next/image"
import { ExpertiseCardProps } from "./types"
import { Text } from "../Text"

const ExpertiseCard = ({ description, image, title }: ExpertiseCardProps) => {
  return (
    <div className='flex max-w-[22rem] gap-5 justify-center'>
      <div className='w-[6rem] h-[6rem]'>
        <Image
          src={image}
          height={100}
          width={200}
          alt={title}
          className='border border-[#2a9df4] p-6 rounded-lg flex-[0.1] '
        />
      </div>
      <div className='flex flex-col flex-1 gap-3'>
        <Text
          size='subtitle'
          className='!font-bold'>
          {title}
        </Text>
        <Text
          size='tiny'
          className='text-gray-700/70'>
          {description.slice(0, 150)}
        </Text>
        <Text
          size='tiny'
          className='text-[#348acd] cursor-pointer'>
          More
        </Text>
      </div>
    </div>
  )
}

export default ExpertiseCard
