'use client'
import { feature1, feature2, feature3 } from "@/assets/Feature"
import { FeatureCard } from "@/components/FeatureCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { bg } from "@/assets/Updates"

import cx from "clsx"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import useSize from "@/hooks/useSize"
import { useEffect, useState } from "react"

const Events = () => {
  const { tablet } = useSize()
  const FeaturedCards = [
    {
      id: 1,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature1,
      tag: 'News'
    }, {
      id: 2,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature2,
      tag: 'Articles'
    }, {
      id: 3,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature3,
      tag: 'Events'
    },
  ]

  const [items, setItems] = useState(FeaturedCards)
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
     
      if (index > items.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = items.length - 1
      }
      return index
    })
  }

  return (
    <div style={{
      backgroundImage:`url(${bg.src})`,
      backgroundPosition:'0px -266px;'
    }}
    className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center">
    <div className="pt-12 w-3/4 mx-auto">
      <div className="py-12 bg-[#fefefe] rounded-lg">  
        <div className="flex justify-center"> 
        <TitleText
              size='head'
              direction='center'>
              Updates
          </TitleText>
      </div>
      <section className="flex items-center justify-around mb-5">
        <Text
          className='font-semibold text-lg pr-12'>
          Events
        </Text>
        <div className="mb-auto flex gap-2 mt-2">
          <BsArrowLeft className={cx("text-3xl text-gray-500/30", "hover:text-primary", "phone:!text-lg")} onClick={prevSlide} />
          <BsArrowRight className={cx("text-3xl text-gray-500/30", "hover:text-primary", "phone:!text-lg")} onClick={nextSlide} />
        </div>
      </section>
      <section className={cx('flex justify-center gap-6', 'tablet:justify-center')}>
        {FeaturedCards.map((card, cardIndex) => {
          let position = "nextSlide"
          if (cardIndex === index) {
            position = "activeSlide"
          }
          if (
            cardIndex === index - 1 ||
            (index === 0 && cardIndex === items.length - 1)
          ) {
            position = "lastSlide"
          }
          return <FeatureCard date={card.date} description={card.description} image={card.image} tag={card.tag} key={card.id} className={cx('tablet:absolute', tablet && position)} />
        })}
      </section>
      </div>
    </div>

    </div>
  )
}

export default Events


