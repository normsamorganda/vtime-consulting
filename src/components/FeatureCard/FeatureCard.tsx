"use client"

import Image from "next/image"
import { FeatureCardProps } from "./types"
import { Text } from "../Text"
import cx from "clsx"

const FeatureCard = ({ date, description, image, tag, className }: FeatureCardProps) => {
  return (
    <section className={cx(className, 'tablet:w-full tablet:flex tablet:justify-center', 'transition-all duration-500 tablet:opacity-0.5')}>
      <div className={cx('relative h-[22rem] shadow-custom rounded-3xl w-[20rem] laptopL:w-[16rem]')}>
        <div className='w-full'>
          <Image
            src={image}
            height={469}
            width={415}
            alt={""}
            className="rounded-tr-3xl rounded-tl-3xl"
          />
        </div>
        <div className='absolute top-[48%] -translate-y-1/2 left-[-1px] bg-white p-1 flex gap-2 rounded-tr-md px-3 laptopL:top-[37%]'>
          <Text
            className='text-[#1167b1]'
            size='tiny'>
            {tag}
          </Text>
          <Text size='tiny'>{date}</Text>
        </div>
        <div className='flex flex-col justify-center gap-3 w-full p-5 mt-3'>
          <Text
            size='tiny'
            className='!font-light'>
            {description}
          </Text>
          <Text
            size='tiny'
            className='!font-light text-primary text-end'>
            Read More
          </Text>
        </div>
      </div>
    </section>
  )
}

export default FeatureCard
