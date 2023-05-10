'use client'

import Image from "next/image"
import { ExpertiseCardProps } from "./types"
import { Text } from "../Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"

const ExpertiseCard = ({ description, image, title }: ExpertiseCardProps) => {
  const { tablet, phone } = useSize()

  return (
    <div className={cx('flex w-[22rem] gap-5 justify-center', phone && 'w-[17rem]')}>
      <div className={cx('w-[5rem] h-[5rem] flex', phone && 'w-[3.5rem] h-[3.5rem]')}>
        <Image
          src={image}
          height={100}
          width={200}
          alt={title}
          className='border-2 border-primary p-3 rounded-lg flex-[0.1] '
        />
      </div>
      <div className={cx('flex flex-col flex-1 gap-3', phone && 'gap-1')}>
        <Text
          size='description'
          className={cx('!font-bold', phone && 'text-xs')}>
          {title}
        </Text>
        <Text
          size='tiny'
          className={cx('text-gray-700/70', phone && 'text-[9px]')}>
          {description.slice(0, 150)}
        </Text>
        <Text
          size='tiny'
          className={cx('text-secondary cursor-pointer')}>
          More
        </Text>
      </div>
    </div>
  )
}

export default ExpertiseCard
