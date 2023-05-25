import React from 'react'
import Image from "next/image"
import { Text } from "../Text"

const BlogsCard = ({key, date, description, image, tag}: any) => {
  return (
    <div>
  <section>
      <div className='relative mx-auto shadow-custom rounded-3xl md:w-[40rem]'>
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
        <div className='flex flex-col justify-center gap-3 w-full p-5 mt-3 md:h-[175px]'>
          <Text
            size='tiny'
            className='!font-light text-justify'>
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
        
    </div>
  )
}

export default BlogsCard