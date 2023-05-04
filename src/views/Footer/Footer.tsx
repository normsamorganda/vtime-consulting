import { blackLogo } from "@/assets/Footer"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"
import Image from "next/image"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <SectionContainer height="extras" className="flex justify-evenly">
        {/* left section */}
        <div className='flex flex-col gap-5'>
          <article>
            <Image
              src={blackLogo}
              height={100}
              width={200}
              alt='logo'
            />
          </article>
          <Text
            size='description'
            className='font-light max-w-[25rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga dolores voluptatem temporibus id voluptate sunt reprehenderit aliquid dolore necessitatibus aspernatur eligendi eaque, repudiandae aliquam?
          </Text>
          <article className='flex mt-9'>
            <Text
              size='subtitle'
              className='!font-semibold'>
              Terms & Conditions {span()}
            </Text>
            <Text
              size='subtitle'
              className='!font-semibold'>
              Private Policy {span()}
            </Text>
            <Text
              size='subtitle'
              className='!font-semibold'>
              Faq {span()}
            </Text>
            <Text
              size='subtitle'
              className='!font-semibold'>
              Contact Us {span()}
            </Text>
            <Text
              size='subtitle'
              className='!font-semibold'>
              Address
            </Text>
          </article>
        </div>

        {/* right section */}
        <div className='flex gap-10 ml-auto '>
          <FaFacebookF className='grayscale-1 text-gray-300 h-6 w-6' />
          <FaTwitter className='grayscale-1 text-gray-300 h-6 w-6' />
          <FaInstagram className='grayscale-1 text-gray-300 h-6 w-6' />
          <FaLinkedinIn className='grayscale-1 text-gray-300 h-6 w-6' />
        </div>
    </SectionContainer>
  )
}
function span() {
  return <span className='px-3'>/</span>
}
export default Footer
