'use client'

import { blackLogo } from "@/assets/Footer"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
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
      {/* left section */}
      <div className={cx(' grid grid-cols-2 grid-rows-3', 'tablet:!grid-rows-4 tablet:grid-cols-1 tablet:!justify-start')}>
        <article className={cx("row-start-1 items-center justify-start flex ", 'tablet:!items-center tablet:col-span-2')}>
          <Image
            src={blackLogo}
            height={150}
            width={150}
            alt='logo'
          />
        </article>
        <Text
          size='description'
          className={cx('font-light  row-start-2 ', 'tablet:col-span-2 tablet:!max-w-[90%]')}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe porro magnam aspernatur tempora culpa eum, earum molestiae cumque quisquam ipsam!
        </Text>
        <article className={cx('flex items-center row-start-3 col-span-2 mt-5', 'tablet:!row-start-4 tablet:flex-wrap')}>
          <Text
            size='tiny'
            className='!font-semibold'>
            Terms & Conditions
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold'>
            Private Policy
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold'>
            Faq
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold'>
            Contact Us
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold'>
            Address
          </Text>
        </article>
        <div className={cx('row-start-1 col-start-2 flex justify-end gap-10 items-center ', 'tablet:!row-start-3 tablet:!col-start-1 tablet:!justify-start tablet:col-span-2')} >
          <FaFacebookF className='grayscale-1 text-gray-300 h-5 w-5' />
          <FaTwitter className='grayscale-1 text-gray-300 h-5 w-5' />
          <FaInstagram className='grayscale-1 text-gray-300 h-5 w-5' />
          <FaLinkedinIn className='grayscale-1 text-gray-300 h-5 w-5' />
        </div >
      </div >

      {/* right section */}

    </SectionContainer >
  )
}
function span() {
  return <span className='px-3'>/</span>
}
export default Footer
