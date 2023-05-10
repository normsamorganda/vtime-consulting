'use client'

import { feature1, feature2, feature3 } from "@/assets/Feature"
import { FeatureCard } from "@/components/FeatureCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"
import cx from "clsx"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import useSize from "@/hooks/useSize"

const Feature = () => {
  const { tablet, phone } = useSize()

  const FeaturedCards = [
    {
      id: 1,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature1,
      tag: 'News'
    }, {
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature2,
      tag: 'Articles'
    }, {
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature3,
      tag: 'Events'
    }
  ]

  return (
    <SectionContainer className="border h-[50vh]">
      <section className="flex items-center justify-between">
        <TitleText
          size='head'
          direction='left'>
          Feature
        </TitleText>
        <div className="mb-auto flex gap-2 mt-2">
          <BsArrowLeft className={cx("text-3xl text-gray-500/30", 'text-primary')} />
          <BsArrowRight className={cx("text-3xl text-gray-500/30")} />
        </div>
      </section>
      <section className={cx('flex justify-between', tablet && 'justify-center')}>
        {FeaturedCards.map((card) => {
          return <FeatureCard date={card.date} description={card.description} image={card.image} tag={card.tag} key={card.id} className={cx(tablet && 'absolute left-1/2 -translate-x-1/2')} />
        })}

      </section>
    </SectionContainer>
  )
}

export default Feature
