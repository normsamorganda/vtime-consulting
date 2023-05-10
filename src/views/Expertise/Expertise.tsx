'use client'

import {
  construction,
  financing,
  fintech,
  foodAndBeverages,
  information,
  lending,
} from "@/assets/Expertise"
import { ExpertiseCard } from "@/components/ExpertiseCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useState } from "react"

const Expertise = () => {
  const [slider, setSlider] = useState<string>('right')
  const { tablet, phone } = useSize()
  const items = [
    [{
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
    [{
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

  ]

  function slideLeftHandler() {
    setSlider('left')
    console.log('click left');
  }

  function slideRightHandler() {
    setSlider('right')
    console.log('click right');
  }
  return (
    <SectionContainer>
      <section className="flex items-center justify-between mb-6">
        <TitleText
          direction='left'>
          Areas of Expertise
        </TitleText>
        <div className="mb-auto flex gap-2 mt-2">
          <BsArrowLeft className={cx("text-3xl text-gray-500/30", slider === 'right' && 'text-primary')} onClick={slideLeftHandler} />
          <BsArrowRight className={cx("text-3xl text-gray-500/30", slider === 'left' && 'text-primary')} onClick={slideRightHandler} />
        </div>
      </section>
      <section className={cx('flex flex-col gap-10', tablet && 'flex !flex-row relative overflow-hidden h-[40vh]', phone && '!h-[40vh]')}>
        <div className={cx("flex justify-between gap-3 transition-all duration-1000", tablet && `flex-col items-center absolute !gap-10 ${slider === 'left' ? 'left-1/2 top-0 -translate-x-1/2' : 'left-[-100%] top-0 -translate-x-1/2'}`)}>
          {items[0].map((items) => {
            return <ExpertiseCard key={items.id} description={items.description} title={items.title} image={items.image} />
          })}
        </div>

        <div className={cx("flex justify-between gap-3 transition-all duration-1000", tablet && `flex-col items-center absolute !gap-10 ${slider === 'right' ? 'left-1/2 top-0 -translate-x-1/2' : 'left-[-100%] top-0 -translate-x-1/2'}`)}>
          {items[1].map((items) => {
            return <ExpertiseCard key={items.id} description={items.description} title={items.title} image={items.image} />
          })}
        </div>
      </section>
    </SectionContainer>
  )
}

export default Expertise
