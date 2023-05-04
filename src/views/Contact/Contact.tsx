import { Button } from "@/components/Button"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"

const Contact = () => {
  return (
    <SectionContainer className='flex flex-col items-center justify-center' height="extras">
      <Text
        size='title'
        className='text-gray-400 font-light'>
        Stay up-to-date with our latest news, updates, and exclusive offers
      </Text>
      <Text
        size='title'
        className='text-gray-400 font-light'>
        by subscribing to our website today
      </Text>

      {/* SUBSCRIPTION BUTTON */}
      <form className='border border-[#2a9df4] w-[80%] rounded-md flex justify-between h-fit items-center mt-5'>
        <input
          type='text'
          className='w-full placeholder:text-[15px] placeholder:flex pl-5 border-none outline-none'
          placeholder='Enter your email...'
        />
        <Button
          content='Submit'
          reverse
          className='my-0 px-10 !bg-[#2a9df4] mr-2 !m-1'
        />
      </form>
    </SectionContainer>
  )
}

export default Contact
