'use client'
import Image from "next/image"
import { AdvantageBoxProps } from "./types"
import innovative from "../../assets/Advantage/innovative.png"
import { Text } from "../Text"
import cx from "clsx"
import useSize from "@/hooks/useSize"

const AdvantageBox = ({ description, image, className }: AdvantageBoxProps) => {

  const { tablet, phone } = useSize()

  return (
    <div className={cx('shadow-custom rounded-xl flex flex-col items-center p-5 w-60 h-60 justify-evenly', tablet && 'w-full')}>
      <div className='border border-gray-500/10 rounded-full w-[100px] h-[100px] flex items-center justify-evenly'>
        <Image
          src={image}
          height={65}
          width={65}
          alt={description}
          className='p-3'
        />
      </div>
      <div className='text-center'>
        <Text size='normal' className="!font-semibold">{description}</Text>
      </div>
    </div>
  )
}

export default AdvantageBox
