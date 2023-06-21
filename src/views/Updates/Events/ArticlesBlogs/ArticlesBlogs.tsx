'use client'

import  ArticleCard  from "@/components/ArticleBlogsCard/ArticleCard"
import { Text } from "@/components/Text"
import BlogsCard from "@/components/ArticleBlogsCard/BlogsCard";
import { bg } from "@/assets/Updates"
import { TitleText } from "@/components/TitleText";
//assets
import { blogs } from '@/assets/Updates'
import { feature1, feature2, feature3 } from "@/assets/Feature"

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const ArticleBlogs = () => {

/// index even numbers (0,2,4,5) for Blogs
/// index odd numbers (1,3,5,6) for Articles

  const BlogsAndArticles = [
    {
        id: 1,
        date: '19 Apr 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        image: blogs,
        tag: 'Blogs'
    }, 
    {
      id: 2,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: feature3,
      tag: 'Articles'
    },     
    {
      id: 3,
      date: '19 Apr 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      image: blogs,
      tag: 'Blogs'
  }, 
  {
    id: 4,
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
      <section className="flex justify-around items-center  mb-5">
        <Text
          className='font-semibold text-lg'>
          Article / Blogs
        </Text>
        <div className="mb-auto flex gap-2 mt-2">
        <div className="button-prev-slide-artBlog text-[2rem] text-gray-400 active:text-sky-400">
         <BsArrowLeft/>
         </div>
          <div className="button-next-slide-artBlog text-[2rem] text-gray-400 active:text-sky-400">
         <BsArrowRight/>
         </div>
        </div>
      </section>
      <section className="mx-auto rounded-3xl md:w-[530px] xl:w-[990px]">
      <Swiper
      navigation={{
        nextEl:".button-next-slide-artBlog",
        prevEl:".button-prev-slide-artBlog",
       }}
       pagination={{
        type: "fraction",
        el:".swiper-pagination",
        renderFraction: function (currentClass, totalClass) {
          return 'Page <span class="' + currentClass + '"></span>' +
                  ' of ' +
                  '<span class="' + totalClass + '"></span>';
      }
      }}
      slidesPerGroup={1}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView:1,
          slidesPerGroup:1
        },
        1280: {
          slidesPerView:2,
          slidesPerGroup:2
        },
      }}
       modules={[Pagination, Navigation]}
       >
        {BlogsAndArticles.map((blogArt, index) => {
          return index % 2 ? 
          <SwiperSlide key={blogArt.id}>
          <ArticleCard date={blogArt.date} description={blogArt.description} image={blogArt.image} tag={blogArt.tag} />
          </SwiperSlide>
          :
          <SwiperSlide key={blogArt.id}>
          <BlogsCard  date={blogArt.date} description={blogArt.description} image={blogArt.image} tag={blogArt.tag} />
          </SwiperSlide>
        })}
        <div className="swiper-pagination" style={{color:"gray" }}></div>
    </Swiper>

    </section>
      
      </div>
    </div>
    </div>   

  )
}

export default ArticleBlogs


