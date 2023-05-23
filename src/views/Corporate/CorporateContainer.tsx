'use client'
import { Text } from "@/components/Text"
import { TitleText } from "@/components/TitleText"
import cx from 'clsx'
const CorporateContainer = () => {
  return (
    <div className="flex flex-col justify-center text-left w-3/5 mx-auto">
        <div className="text-center mx-auto">
        <TitleText
            size='head'
            direction='center'>
            Corporate
          </TitleText>
        </div>
        <Text
          size='title'
          className={cx('text-black mt-5 leading-6', 'tablet:!text-sm', 'phone:!text-[12px]')}>
        Business Setup
        </Text>
        <Text
          size='normal'
          className={cx('text-black mt-5 leading-6 text-justify', 'tablet:!text-sm', 'phone:!text-[12px]')}>
            At <span className="text-[#2a9df4]">Business Asia Consulting</span>, we provide you with everything you need to enter the <span className="text-[#2a9df4]">PHILIPPINE</span> Market.
            Regardless of if you are a foreign company or an individual, our trusted consultants and legal team can equip you with the practical solutions that you need to target your business started.
        </Text>
    </div>
  )
}

export default CorporateContainer