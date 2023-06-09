"use client"

import Image from "next/image"
import { Text } from "../Text"
import Link from "next/link"
const ArticleCard = ({ key, date, description, image, tag, className }: any) => {
  return (
      <div className='max-w-[317px] mx-5 mb-[10px] lg:mx-0 relative shadow-custom rounded-3xl lg:w-[20rem] lg:m-0 lg:right-[-165px]'>
            <div className='w-full overflow-hidden'>
            <Image
              src={image}
              height={469}
              width={415}
              alt={""}
              className="rounded-tr-3xl rounded-tl-3xl hover:scale-110 transition-all duration-500"
            />
          </div>
          <div className="relative">
            <div className='absolute top-[-19px] -translate-y-1/2 left-[-1px] bg-white p-3 flex gap-2 rounded-tr-md px-3 '>
              <Text
                className='text-[#1167b1]'
                size='tiny'>
                {tag}
              </Text>
              <Text size='tiny'>{date}</Text>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-3 w-full px-5 mt-3'>
            <Text
              size='tiny'
              className='!font-light'>
              {description}
            </Text>
            <Text
              size='tiny'
              className='!font-light text-primary text-end py-5 md:py-2'>
                <Link href='/TheCompany'>
                   Read More
                </Link>
            </Text>
          </div>
        </div>
       
  )
}

export default ArticleCard
