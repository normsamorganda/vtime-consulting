'use client'
import { feature1, feature2, feature3 } from "@/assets/Feature"
import { FeatureCard } from "@/components/FeatureCard"
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { bg } from "@/assets/Updates"

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from "react-icons/hi"

const Events = () => {

  const FeaturedCards = [
    {
      id: 1,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature1,
      tag: 'News'
    }, 
    {
      id: 2,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature2,
      tag: 'Articles'
    }, 
    {
      id: 3,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature3,
      tag: 'Events'
    },
    {
      id: 4,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature3,
      tag: 'Events'
    },
    {
      id: 5,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature1,
      tag: 'News'
    }, 
    {
      id: 6,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature2,
      tag: 'Articles'
    },
    
  ]

  return (
    <div style={{
      backgroundImage:`url(${bg.src})`,
      backgroundPosition:'0px -251px;'
    }}
    className="w-full bg-no-repeat bg-clip-content bg-cover bg-center">
    <div className="pt-12 w-3/4 mx-auto">
      <div className="pt-12 bg-[#fefefe] rounded-lg">  
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
        <div className="button-prev-slide-events text-[2rem] text-gray-400 active:text-sky-400">
         <HiOutlineArrowNarrowLeft/>
         </div>
          <div className="button-next-slide-events text-[2rem] text-gray-400 active:text-sky-400">
         <HiOutlineArrowNarrowRight/>
         </div>
        </div>
      </section>
      <section className="flex justify-center items-center mx-auto rounded-3xl md:w-[530px] xl:w-[1000px]">
      <Swiper
      navigation={{
        nextEl:".button-next-slide-events",
        prevEl:".button-prev-slide-events",
       }}
       pagination={{
        type: "fraction",
        el:".swiper-pagination"
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView:2,
        },
        1280: {
          slidesPerView:3,
          slidesPerGroup:3
        },
      }}
       modules={[Pagination, Navigation]}
       >
        {FeaturedCards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <FeatureCard  date={card.date} description={card.description} image={card.image} tag={card.tag} />
            </SwiperSlide>
          )
        })}
        <div className="swiper-pagination" style={{color:"gray" }}></div>
    </Swiper>
    </section>
      </div>
    </div>
    </div>
  )
}

export default Events


