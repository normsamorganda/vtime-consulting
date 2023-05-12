'use client'
import Image from "next/image"
import { AdvantageBoxProps } from "./types"
import innovative from "../../assets/Advantage/innovative.png"
import { Text } from "../Text"
import cx from "clsx"
import useSize from "@/hooks/useSize"

const AdvantageBox = ({ description, image, className, title }: AdvantageBoxProps) => {

  const { tablet, phone } = useSize()

  return (
    <div className="vertical flex w-[280px] h-[280px]">
      <section className={cx("front items-center gap-10", 'flex flex-col justify-between', 'shadow-custom ')}>
        <div className='border border-gray-500/10 rounded-full  w-[150px] h-[150px] flex items-center justify-evenly'>
          <Image
            src={image}
            height={80}
            width={80}
            alt={description}
            className='p-3'
          />
        </div>
        <Text size="subtitle" className="text-black font-normal">{title}</Text>
      </section>

      <section className={cx("back shadow-custom", "flex items-center justify-center")}>
        <Text size="normal" className="text-slate-800 text-center font-extrabold">{description}</Text>
      </section>
    </div>
  )
}

export default AdvantageBox
