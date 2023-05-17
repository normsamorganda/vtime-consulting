'use client'
import {
  construction,
  financing,
  fintech,
  foodAndBeverages,
  information,
  lending,
  hr,
  exp,
  imp
} from "@/assets/Expertise"
import { ExpertiseCard } from "@/components/ExpertiseCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useState } from "react"

const Expertise = () => {
  const { tablet, phone } = useSize()

  const items = [
    [
      {
      id: 1,
      description: 'A multifaceted field that requires diverse skills and expertise and a deep understanding of building materials, techniques, and regulations.',
      title: 'Construction',
      image: construction
    },
    {
      id: 2,
      description: 'A rapidly growing field is revolutionizing how we think about financial services. ',
      title: 'Fintech',
      image: fintech
    },
    {
      id: 3,
      description: 'A dynamic and constantly evolving field that offers exciting opportunities for professionals who are passionate about technology and innovation.',
      title: 'Information & Techonology',
      image: information
    },
    ],
    [
      {
      id: 4,
      description: 'An essential and dynamic industry that plays a vital role in our daily lives.',
      title: 'Food & Beverages',
      image: foodAndBeverages
    },
    {
      id: 5,
      description: 'An industry that offers exciting opportunities for professionals who are passionate about finance and economics. ',
      title: 'Lending',
      image: lending
    },
    {
      id: 6,
      description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
      title: 'Financing',
      image: financing
    },
    ],
    [
      {
        id: 7,
        description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
        title: 'Importing',
        image: imp
      },

      {
        id: 8,
        description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
        title: 'Exporting',
        image: exp
      },

      {
        id: 9,
        description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
        title: 'Human Resources',
        image: hr
      },
    ]

  ]

  const newItems = [
    {
      id: 1,
      description: 'A multifaceted field that requires diverse skills and expertise and a deep understanding of building materials, techniques, and regulations.',
      title: 'Construction',
      image: construction
    },
    {
      id: 2,
      description: 'A rapidly growing field is revolutionizing how we think about financial services. ',
      title: 'Fintech',
      image: fintech
    },
    {
      id: 3,
      description: 'A dynamic and constantly evolving field that offers exciting opportunities for professionals who are passionate about technology and innovation.',
      title: 'Information & Techonology',
      image: information
    },

    {
      id: 4,
      description: 'An essential and dynamic industry that plays a vital role in our daily lives.',
      title: 'Food & Beverages',
      image: foodAndBeverages
    },
    {
      id: 5,
      description: 'An industry that offers exciting opportunities for professionals who are passionate about finance and economics. ',
      title: 'Lending',
      image: lending
    },
    {
      id: 6,
      description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
      title: 'Financing',
      image: financing
    },

    {
      id: 7,
      description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
      title: 'Importing',
      image: imp
    },

    {
      id: 8,
      description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
      title: 'Exporting',
      image: exp
    },

    {
      id: 9,
      description: 'Involves the provision of funds for businesses and individuals to meet their financial needs.',
      title: 'Human Resources',
      image: hr
    },


  ]

  const divItem = [

  ]

  const [item, setItem] = useState(items)
  const [index, setIndex] = useState(0)

  // console.log(index);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      console.log(oldIndex)
      if (index > item.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = item.length - 1
      }
      return index
    })
  }



  return (
    <SectionContainer className={cx()}>
      {/* top section */}
      <section className="flex items-center justify-between mb-6">
        <TitleText
          direction='left'>
          Areas of Expertise
        </TitleText>
        <div className="mb-auto flex gap-2 mt-2">
          <BsArrowLeft className={cx("text-3xl text-gray-500/30 hover:text-primary", "phone:!text-lg")} onClick={prevSlide} />
          <BsArrowRight className={cx("text-3xl text-gray-500/30 hover:text-primary", "phone:!text-lg")} onClick={nextSlide} />
        </div>
      </section>


      {/* bottom section */}
      <section className="flex justify-center tablet:h-[50vh] phone:h-[45vh]">
        {/* top */}
        {tablet ?
          // tablet
          <div className="flex justify-center items-center w-full relative overflow-hidden">
            {/* 1st */}
            <div className={cx('flex flex-col justify-center items-center transition-all duration-700', 'absolute w-full ', index === 0 ? 'translate-x-0' : 'translate-x-full')}>
              {item[0].map((item, index) => {
                return <ExpertiseCard key={item.id} description={item.description} image={item.image} title={item.title} />
              })}
            </div>
            {/* 2nd */}
            <div className={cx('flex flex-col justify-center items-center transition-all duration-700', 'absolute  w-full', index === 1 ? 'translate-x-0' : 'translate-x-full')}>
              {item[1].map((item, index) => {
                return <ExpertiseCard key={item.id} description={item.description} image={item.image} title={item.title} />
              })}
            </div>

            {/* 3rd */}
            <div className={cx('flex flex-col justify-center items-center transition-all duration-700', 'absolute  w-full', index === 2 ? 'translate-x-0' : 'translate-x-full')}>
              {item[2].map((item, index) => {
                return <ExpertiseCard key={item.id} description={item.description} image={item.image} title={item.title} />
              })}
            </div>

          </div>
          :
          // desktop
          <div className={cx("flex flex-wrap gap-5 justify-evenly", "tablet:justify-center")}>
            {newItems.map((item, itemIndex) => {
              let position = "nextSlide"
              if (itemIndex === index) {
                position = "activeSlide"
              }
              if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === items.length - 1)
              ) {
                position = "lastSlide"
              }
              return <ExpertiseCard key={item.id} description={item.description} image={item.image} title={item.title} />
            })}
          </div>}

        {/* bottom */}
      </section>

    </SectionContainer>
  )
}

export default Expertise
