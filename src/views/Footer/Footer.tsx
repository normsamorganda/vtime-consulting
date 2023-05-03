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
    <SectionContainer>
      <section className='border flex'>
        {/* left section */}
        <div className='border flex flex-col gap-5'>
          <article>
            <Image
              src={blackLogo}
              height={100}
              width={150}
              alt='logo'
            />
          </article>
          <Text
            size='xs'
            className='font-light !text-[10px] max-w-[15rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut
            possimus in amet soluta sint laboriosam maiores quam deserunt nisi!
            Voluptatum optio sequi facere.
          </Text>
          <article className='flex'>
            <Text
              size='xs'
              className='!text-[12px] font-semibold'>
              Terms & Conditions {span()}
            </Text>
            <Text
              size='xs'
              className='!text-[12px] font-semibold'>
              Private Policy {span()}
            </Text>
            <Text
              size='xs'
              className='!text-[12px] font-semibold'>
              Faq {span()}
            </Text>
            <Text
              size='xs'
              className='!text-[12px] font-semibold'>
              Contact Us {span()}
            </Text>
            <Text
              size='xs'
              className='!text-[12px] font-semibold'>
              Address
            </Text>
          </article>
        </div>

        {/* right section */}
        <div className='flex gap-5 ml-auto'>
          <FaFacebookF className='grayscale-1 text-gray-300' />
          <FaTwitter className='grayscale-1 text-gray-300' />
          <FaInstagram className='grayscale-1 text-gray-300' />
          <FaLinkedinIn className='grayscale-1 text-gray-300' />
        </div>
      </section>
    </SectionContainer>
  )
}
function span() {
  return <span className='px-3'>/</span>
}
export default Footer
