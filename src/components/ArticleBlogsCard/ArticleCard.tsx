"use client"

import Image from "next/image"
import { Text } from "../Text"

const ArticleCard = ({ key, date, description, image, tag, className }: any) => {
  return (
      <div className='max-w-[289px] relative shadow-custom rounded-3xl lg:w-[20rem] mx-auto lg:m-0 lg:right-[-165px]'>
            <div className='w-full overflow-hidden'>
            <Image
              src={image}
              height={469}
              width={415}
              alt={""}
              className="rounded-tr-3xl rounded-tl-3xl hover:scale-110 transition-all duration-500"
            />
          </div>
          <div className='absolute top-[45%] -translate-y-1/2 left-[-1px] bg-white p-3 flex gap-2 rounded-tr-md px-3 lg:top-[151px] '>
            <Text
              className='text-[#1167b1]'
              size='tiny'>
              {tag}
            </Text>
            <Text size='tiny'>{date}</Text>
          </div>
          <div className='flex flex-col justify-center gap-3 w-full px-5 pb-3 mt-3'>
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
       
  )
}

export default ArticleCard
