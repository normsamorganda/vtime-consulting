'use client'
import { Text } from "@/components/Text"
import { TitleText } from "@/components/TitleText"
import cx from 'clsx'

const CompanyContainer = () => {
  return (
    <div className="w-3/4 mx-auto">
        <div className="flex justify-center">
            <TitleText
                size='head'
                direction='center'>
                About Us
            </TitleText>
        </div>
        <Text
          size='title'
          className={cx('text-black mt-5 leading-6 font-semibold', 'tablet:!text-sm', 'phone:!text-[12px]')}>
            The Company
        </Text>
        <p className="mt-8">Established in the year 2000, <span className="text-[#2a9df4]">Business Asia Consulting </span>is a distinguished business consultancy firm that extends its services to aid aspiring entrepreneurs in setting up their businesses in the <span className="text-[#2a9df4]">PHILIPPINES</span>. Our areas of expertise include legal and accounting advisory and HR outsourcing services.</p>
        <p className="mt-8">Having served as a pioneering industry player for almost two decades, our firm has been instrumental in facilitating numerous enterprises and corporations to effectively penetrate the <span className="text-[#2a9df4]">PHILIPPINE</span> market by capitalizing on our unwavering professionalism.</p>
        <p className="mt-8">We acknowledge that there is no one-size-fits-all approach when it comes to business strategies. Thus, we take pride in our personalized approach, catering to each business unique and specific requirements. Our bespoke solutions guarantee a smooth and successful establishment and expansion of your business in the <span className="text-[#2a9df4]">PHILIPPINES</span>.</p>

    </div>
  )
}

export default CompanyContainer