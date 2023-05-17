'use client'
import { Button } from "@/components/Button"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"

const Contact = () => {
  const { tablet, phone } = useSize()


  return (
    <SectionContainer className='flex items-center justify-center'>
      <Text
        size={tablet ? 'subtitle' : 'title'}
        className={cx('text-gray-400 font-light text-center', 'phone:text-base')}>
        Stay up-to-date with our latest news, updates, and exclusive offers <br />by subscribing to our website today
      </Text>
      {/* SUBSCRIPTION BUTTON */}
      <form className={cx('border border-primary rounded-md flex justify-between h-fit items-center w-3/4 mt-5', 'tablet:!w-full')}>
        <input
          type='text'
          className='w-full placeholder:text-[15px] placeholder:flex pl-5 border-none outline-none'
          placeholder='Enter your email...'
        />
        <Button
          content='Submit'
          reverse
          className='my-0 px-10 mr-2 !m-1 !border-primary'
        />
      </form>
    </SectionContainer>
  )
}

export default Contact
