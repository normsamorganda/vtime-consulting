'use client'

import { Text } from "@/components/Text"
import { FeatureCard } from "@/components/FeatureCard"
import ReviewsCard from "@/components/Reviews/ReviewsCard"
import Image from 'next/image';

//assets
import { avatar } from "@/assets/Updates"

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"


import React from 'react'

const Reviews = () => {


    let reviews = [
        {   
            id:1,
            intro:"Hi Ceptos scelerisque, vestibulum elit augue mauris maecenas au",
            subIntro:"Forem ipsum dolor sit amet, vel at lorem tortor, tellus vestibu",
            name:"Neil Roberts",
            title:"Developer",
            img:avatar
        },
        {   
            id:2,
            intro:"Hi Martin scelerisque, vestibulum elit augue mauris maecenas au",
            subIntro:"Forem ipsum dolor sit amet, vel at lorem tortor, tellus vestibu",
            name:"John Doe",
            title:"Business Analyst",
            img:avatar
        },
        {   
            id:3,
            intro:"Hi Martin scelerisque, vestibulum elit augue mauris maecenas au",
            subIntro:"Forem ipsum dolor sit amet, vel at lorem tortor, tellus vestibu",
            name:"John Doe",
            title:"Business Analyst",
            img:avatar
        },
        {   
            id:4,
            intro:"Hi Martin scelerisque, vestibulum elit augue mauris maecenas au",
            subIntro:"Forem ipsum dolor sit amet, vel at lorem tortor, tellus vestibu",
            name:"John Doe",
            title:"Business Analyst",
            img:avatar
        }
    ]
  return (
    <div className="w-3/4 mx-auto">
      <div className="bg-[#fefefe] rounded-lg">  
      <section className="flex items-center justify-around mb-5">
        <Text
          className='font-semibold text-lg pr-12'>
          Reviews
        </Text>
        <div className="mb-auto flex gap-2 mt-2">
        <div className="button-prev-slide-news text-[2rem] text-gray-400 active:text-sky-400">
        <BsArrowLeft/>
         </div>
          <div className="button-next-slide-news text-[2rem] text-gray-400 active:text-sky-400">
          <BsArrowRight/>
         </div>
        </div>
      </section>
      <section className="mx-auto rounded-3xl md:w-[530px] xl:w-[1062px]">
      <Swiper
      navigation={{
        nextEl:".button-next-slide-news",
        prevEl:".button-prev-slide-news",
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
          slidesPerView:2,
          slidesPerGroup:2
        },
      }}
       modules={[Pagination, Navigation]}
       >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <ReviewsCard  intro={review.intro} subIntro={review.subIntro} name={review.name} title={review.title} img={avatar} />
            </SwiperSlide>
          )
        })}
        <div className="swiper-pagination" style={{color:"gray" }}></div>
    </Swiper>
    </section>
      </div>
    </div>
  )
}

export default Reviews