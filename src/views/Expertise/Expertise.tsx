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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      title: 'Construction',
      image: construction
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      title: 'Fintech',
      image: fintech
    },
    {
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      title: 'Information & Techonology',
      image: information
    },
    ],
    [{
      id: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      title: 'Food & Beverages',
      image: foodAndBeverages
    },
    {
      id: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      title: 'Lending',
      image: lending
    },
    {
      id: 6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
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
      <section className="flex items-center justify-between">
        <TitleText
          direction='left'>
          Areas of Expertise
        </TitleText>

        <div className="mb-auto flex gap-2 mt-2">
          <BsArrowLeft className={cx("text-3xl text-gray-500/30", slider === 'right' && 'text-primary')} onClick={slideLeftHandler} />
          <BsArrowRight className={cx("text-3xl text-gray-500/30", slider === 'left' && 'text-primary')} onClick={slideRightHandler} />
        </div>
      </section>

      <section className={cx('flex flex-col gap-10', tablet && 'flex !flex-row relative overflow-hidden h-[40vh]')}>
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
