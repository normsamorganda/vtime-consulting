'use client';
import { Text } from "@/components/Text"
import { TitleText } from "@/components/TitleText";
import cx from 'clsx'
const ServiceContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
         <TitleText
            size='head'
            direction='center'>
            Services
          </TitleText>
        <Text
          size='normal'
          className={cx('text-black mt-5 leading-6 text-center', 'tablet:!text-sm', 'phone:!text-[12px]')}>
        Being a one-stop service shop, we offer a wide range of services, from a company&apos;s incorporation to populating it to actual operations and physical locations.
        </Text>
        <Text
          size='normal'
          className={cx('text-black mt-5 leading-6 font-bold text-center', 'tablet:!text-sm', 'phone:!text-[12px]')}>
            We offer a wide range of services that span from a company&apos;s incorporation to actual operations.
        </Text>
    </div>
  )
}

export default ServiceContainer