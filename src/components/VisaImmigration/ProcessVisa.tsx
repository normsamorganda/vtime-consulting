'use client'
import Image from "next/image"

const ProcessVisa = ({key, pic, desc}:any) => {
  return (
  <>
    <div className="flex my-3">
            <Image src={pic} alt="num"></Image>
            <span className="text-[12px] pl-3 md:text-sm">{desc}</span>
     </div>
  </>     
  )
}

export default ProcessVisa