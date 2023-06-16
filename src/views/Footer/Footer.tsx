'use client'

import { blackLogo } from "@/assets/Footer"
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
    <SectionContainer>
      {/* left section */}
      <div className={cx(' grid grid-cols-3 grid-rows-3', 'tablet:!grid-rows-5 tablet:grid-cols-1 tablet:!justify-start')}>
        <article className={cx("row-start-1", 'tablet:!items-center tablet:col-span-2')}>
          <Image
            src={blackLogo}
            alt='logo'
            className="w-full h-[70px]"
          />
        </article>
        {/* <Text
          size='description'
          className={cx('font-light  row-start-2 ', 'tablet:col-span-2 tablet:!max-w-[90%]')}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe porro magnam aspernatur tempora culpa eum, earum molestiae cumque quisquam ipsam!
        </Text> */}
        <article className={cx('flex items-center row-start-2 row-span-3 col-start-3 mt-5', 'tablet:!row-start-4 tablet:flex-wrap')}>
          <Text
            size='tiny'
            className='!font-semibold hover:underline'>
            <Link href={'/Terms&Condition'}>
            Terms & Conditions
            </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold hover:underline'>
              <Link href={'/PrivacyPolicy'}>
              Private Policy
              </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold hover:underline'>
              <Link href={'/Faq'}>
              FAQ
              </Link>
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold hover:underline'>
              <Link href={'/Contact'}>
              Contact Us
              </Link>
            
          </Text>
          <span className="mx-2">/</span>
          <Text
            size='tiny'
            className='!font-semibold hover:underline'>
              <Link href={'/Contact'}>
              CONNECT WITH US
              </Link>
            
          </Text>
        </article>

    <div className="grid grid-cols-2 text-xs lg:row-start-2 lg:row-span-3 lg:justify-end lg:text-left lg:items-center lg:mt-5">
          <h1 className="col-span-2 font-bold text-left"><span>Contact</span></h1>
          <div>
            <div>
              Address:
            </div>
          </div>
          <div>
          23A Chatham House,  VA Rufino Street,  Salcedo Village Makati City, Manila Philippines
          </div>
          <div>
          Office:
          </div>
          <div>
          +63 2625-0632 / +632831-9272
          </div>
          <div>
          Mobile:
          </div>
          <div>
          +63 9178002200 (English,中文)
          </div>
          <div>
          Email:
          </div>
          <div>
          sales@fhi365.com
          </div>
      </div>
 
         {/* <div className="row-start-1 col-start-2 row-span-3 flex flex-col justify-end items-center">
          <div className="grid grid-cols-2 text-sm justify-center text-center">
          <h1 className="col-span-2 font-bold text-left"><span className="md:ml-[71px]">Contact</span></h1>
          <div>
            Address:
          </div>
          <div>
          23A Chatham House,  VA Rufino Street,  Salcedo Village Makati City, Manila Philippines
          </div>
          <div>
          Office:
          </div>
          <div>
          +63 2625-0632 / +632831-9272
          </div>
          <div>
          Mobile:
          </div>
          <div>
          +63 9178002200 (English,中文)
          </div>
          <div>
          Email:
          </div>
          <div>
          sales@fhi365.com
          </div>
        </div>
        </div>  */}
      
        <div className={cx('row-start-1 col-start-3 flex justify-center gap-10 items-center ', 'tablet:!row-start-5 tablet:!col-start-1 tablet:!justify-start tablet:col-span-2')} >
          <FaFacebookF className='grayscale-1 text-gray-300 h-5 w-5' />
          <FaTwitter className='grayscale-1 text-gray-300 h-5 w-5' />
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
