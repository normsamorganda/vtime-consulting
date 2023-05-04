"use client"

import Image from "next/image"
import { FeatureCardProps } from "./types"
import { Text } from "../Text"

const FeatureCard = ({ date, description, image, tag }: FeatureCardProps) => {
  return (
    <div className='relative'>
      <div className='w-[21rem]'>
        <Image
          src={image}
          height={469}
          width={415}
          alt={""}
        />
      </div>
      <div className='absolute top-[48%] -translate-y-1/2 left-[12.7px] bg-white p-1 flex gap-2 rounded-tr-md px-3'>
        <Text
          className='text-[#1167b1]'
          size='tiny'>
          {tag}
        </Text>
        <Text size='tiny'>{date}</Text>
      </div>
      <div className='absolute bottom-16 max-w-[80%] left-8'>
        <Text
          size='tiny'
          className='!font-light'>
          {description}
        </Text>
        <Text
          size='tiny'
          className='!font-light text-[#1167b1]'>
          Read More
        </Text>
      </div>
    </div>
  )
}

export default FeatureCard
