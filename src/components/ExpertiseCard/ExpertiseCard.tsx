'use client'

import Image from "next/image"
import { ExpertiseCardProps } from "./types"
import { Text } from "../Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"

const ExpertiseCard = ({ description, image, title, className }: ExpertiseCardProps) => {
  const { tablet, phone } = useSize()

  return (
    <div className={cx(className, 'flex w-[22rem] gap-5 justify-center', 'phone:w-[17rem]', 'py-2')}>
      <div className={cx('w-[5rem] h-[5rem] flex border-2 border-primary rounded-lg', 'phone:w-[3.8rem] phone:h-[3.8rem]')}>
        <Image
          src={image}
          height={100}
          width={100}
          alt={title}
          className={cx('rounded-lg flex-[0.1] p-3', 'phone:border')}
        />
      </div>
      <div className={cx('flex flex-col flex-1 gap-3', 'phone:gap-1')}>
        <Text
          size='description'
          className={cx('!font-bold', 'phone:text-[12px]')}>
          {title}
        </Text>
        <Text
          size='tiny'
          className={cx('text-gray-700/70', 'phone:text-[10px]')}>
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
