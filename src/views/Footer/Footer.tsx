'use client'

import { blackLogo, fhiDark } from "@/assets/Footer"
import { SectionContainer } from "@/components/SectionContainer"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[57rem] mx-auto tablet:mx-3">
      {/* left section */}
      <div className='grid grid-cols-2 grid-rows-2 gap-y-6 mb-5 tablet:gap-3'>
        <article className={cx("row-start-1", 'tablet:!items-center tablet:col-span-2')}>
          <Image
            src={fhiDark}
            alt='logo'
            className="max-w-[90%] tablet:mx-auto"
          />
        </article>
        {/* <article className='flex items-center justify-center row-start-2 row-span-3 col-start-2 mt-5 tablet:row-start-4 tablet:flex-wrap'> */}
        <article className="flex justify-between items-center text-sm tablet:my-2 tablet:col-span-2">
          <Text
            size='description'
            className='!font-semibold hover:underline'>
            <Link href={'/Terms&Condition'}>
            Terms & Conditions
            </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='description'
            className='!font-semibold hover:underline'>
              <Link href={'/PrivacyPolicy'}>
              Private Policy
              </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='description'
            className='!font-semibold hover:underline'>
              <Link href={'/Faq'}>
              FAQ
              </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='description'
            className='!font-semibold hover:underline'>
              <Link href={'/Contact'}>
              Contact Us
              </Link>
          </Text>
        </article>

    <div className="grid grid-cols-[80px_1fr] text-sm row-start-2 tablet:col-span-2 tablet:my-2 tablet:gap-y-3">
          <h1 className="col-span-2 font-bold text-left"><span>Contact</span></h1>
          <div>
          Mobile:
          </div>
          <div>
          +63 2625-0632 / +632831-9272
          </div>
          <div className="row-start-3 col-start-2">
          +63 9178002200 (English,中文)
          </div>
          <div className="row-start-4">
          Email:
          </div>
          <div className="col-start-2">
          sales@fhi365.com
          </div>
      </div>
        <div className={cx('row-start-1 col-start-2 flex justify-center items-center gap-10 ', 'tablet:!row-start-3 tablet:!col-start-1 tablet:!justify-start tablet:col-span-2 tablet:my-2')} >
          <div className="w-full text-left">
              <p className="uppercase">Connect With Us</p>
              <div className="flex mt-2">
                <FaFacebookF className='grayscale-1 text-gray-300 h-5 w-5 mx-3' />
                <FaTwitter className='grayscale-1 text-gray-300 h-5 w-5 mx-3' />
                <FaLinkedinIn className='grayscale-1 text-gray-300 h-5 w-5 mx-3' />
              </div>
             
          </div>
        </div >
      </div >

      {/* right section */}
      </div>
  )
}

export default Footer
