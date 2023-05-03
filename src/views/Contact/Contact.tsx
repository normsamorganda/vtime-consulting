import { Button } from "@/components/Button"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"

const Contact = () => {
  return (
    <SectionContainer className='flex flex-col items-center justify-center'>
      <Text
        size='sm'
        className='text-gray-400 font-light'>
        Stay up-to-date with our latest news, updates, and exclusive offers
      </Text>
      <Text
        size='sm'
        className='text-gray-400 font-light'>
        by subscribing to our website today
      </Text>

      {/* SUBSCRIPTION BUTTON */}
      <form className='border border-[#2a9df4] w-[80%] rounded-md flex justify-between max-h-fit items-center p-1'>
        <input
          type='text'
          className='w-full placeholder:text-[8px] placeholder:flex pl-3 border'
          placeholder='Enter your email'
        />
        <Button
          content='Submit'
          reverse
          className='my-0'
        />
      </form>
    </SectionContainer>
  )
}

export default Contact
