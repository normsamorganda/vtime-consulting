'use client'
import { Text } from "@/components/Text"
import heroBg from "../../assets/Hero/modern-business-buildings-financial-district.png"
import { Button } from "@/components/Button"
import { nHeroBg } from "@/assets/Hero"
import cx from "clsx"
import useSize from "@/hooks/useSize"
const Hero = () => {
  const { tablet, phone } = useSize()

  return (
    <section
      style={{
        backgroundImage: `url(${nHeroBg.src})`,
      }}
      className={cx('relative bg-no-repeat bg-center bg-cover z-0 px-5 h-[95vh]', tablet && 'h-[90vh]')}>
      <div className={cx('max-w-xl p-5 rounded-lg bg-slate-800/50 relative top-[7%] left-[15%]', tablet && '!left-1/2 -translate-x-1/2 !max-w-lg')}>
        <Text
          size='hero'
          className={cx('text-white mt-2 !font-thin !text-4xl', tablet && '!text-xl')}>
          Why Choose
        </Text>
        <Text
          size='title'
          className={cx('text-white font-bold mt-3 !text-6xl', tablet && '!text-[3rem]')}>
          Business Asia
        </Text>
        <Text
          size='title'
          className={cx('text-white font-bold mt-3 !text-6xl', tablet && '!text-[3rem]')}>
          Consulting
        </Text>
        <Text
          size='description'
          className={cx('text-white mt-5 font-thin leading-6', tablet && '!text-sm')}>
          At BAC, We understand the importance of making well-informed decisions
          in business, That’s why we advocate for the “Stop, Look, and Listen”
          approach to decision-making. By talking a moment to pause, observe,
          and listen to all the relevant factors, our clients can make more
          informed and successful business decisions. Our team of experts is
          dedicated to helping businesses implement this approach and achieve
          their goals with confidence.
        </Text>
        <Button
          content='Read More'
          className={cx('mt-10', tablet && 'mt-5')}
        />
      </div>
    </section>
  )
}

export default Hero
