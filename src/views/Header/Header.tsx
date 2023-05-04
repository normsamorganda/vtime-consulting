import { headerBg3 } from "@/assets/Header"
import { Text } from "@/components/Text"
import Image from "next/image"

const Header = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${headerBg3.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className='flex justify-center h-[170px]'>
      <div className='flex gap-16 mt-10'>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          About Us
        </Text>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          Corporate
        </Text>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          Visa & Immigration
        </Text>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          Outsourcing
        </Text>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          Updates
        </Text>
        <Text
          size='subtitle'
          className='hover:text-[#2a9df4] cursor-pointer'>
          Contact Us
        </Text>
      </div>
    </section>
  )
}

export default Header
