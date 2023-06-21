import React from 'react'
import Image from "next/image"
import { Text } from "../Text"
import Link from 'next/link'
const BlogsCard = ({key, date, description, image, tag}: any) => {
  return (
  
      <div className='relative mx-auto shadow-custom rounded-3xl mb-3 w-[269px] lg:w-[40rem] lg:ml-[5px]'>
        <div className='w-full overflow-hidden rounded-xl '>
          <Image
            src={image}
            height={800}
            width={900}
            alt={"blogAlt"}
            className="scale-110 h-[8rem] md:h-[10rem]"
          />
        </div>
        <div className='absolute top-[23%] translate-y-1/2 left-[-1px] bg-[#fefefe] p-3 flex gap-2 rounded-tr-md px- md:top-[35%] '>
          <Text
            className='text-[#1167b1]'
            size='tiny'>
           {tag}
          </Text>
          <Text size='tiny'>
         {date}
            </Text>
        </div>
        <div className='flex flex-col justify-center gap-3 w-full px-5 pb-[60px] mt-3'>
          <Text
            size='tiny'
            className='!font-light text-justify'>
              {description}
          </Text>
          <Text
            size='tiny'
            className='!font-light text-primary text-end'>
              <Link href='/TheCompany'>
                    Read More
              </Link>
          </Text>
        </div>
      </div>
  )
}

export default BlogsCard