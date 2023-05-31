'use client'
import React from 'react'
import { TitleText } from '@/components/TitleText'
const FaqContainer = () => {

  const QandA = [
    {
      question: 'Why do I need a business consulting service?',
      answer: 'If you do not have any idea how to enter and build a business in the Philippines, consulting services will provide you with a roadmap that will serve as your gateway to success. A Business Consulting company job is to provide expert advice on every business issue, guide you with all the necessary documents to set up your business and ensure that the business runs smoothly and successfully.'
    },
    {
      question: 'What results can I expect from working with your firm?',
      answer: 'The result that our client has on their mind combined with the ideas of our experts. Our company will provide you with the quality of services you deserve along with the right tools you can use to maintain and continually step up the ladder of success in your chosen industry.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer various services that will help you become successful in the Philippines; from planning, strategizing, developing, and setting up your business, processing the licenses and permits needed, looking for the right office/s where you can start your future empire, looking for the right people whom you can trust and help on your business, we also can help you process your visas depending on what type of visa you need, and more. If you want to know more about how we can assist you, please do not hesitate to contact us.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How experienced are your consultants?',
      answer: 'Our organization comprises skilled experts who are zealous about innovation and dedicated to achieving excellence. With their vast experience spanning several decades in various fields, our leaders provide a wealth of knowledge and proficiency to steer our company toward triumph. Through promoting a culture of responsibility, collaboration, and originality, our leadership team sets the pace for our organization and motivates our workforce to achieve their maximum potential. Get to know our leaders today and uncover the impetus behind our company accomplishments.'
    },
    {
      question: 'How long does a consulting engagement typically last?',
      answer: 'The consulting engagement will only last if you stopped availing of our services. As long as you continue the partnership with us, the consulting engagement will continue and be available anytime.'
    },
    {
      question: 'How do you ensure confidentiality?',
      answer: 'The contract includes an agreement that will protect our partners data and/or information.'
    },
    {
      question: 'Do you provide training to clients?',
      answer: 'We do. In BAC, we believe that providing the right training and support will somehow dictate the result of the business.'
    },
    {
      question: 'How do you keep clients updated on progress?',
      answer: 'Our company will provide progress reports every quarter, mid-year, and annually to update our partners on the status of the service/s they availed.'
    },
    {
      question: 'Can you work remotely?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]

  return (
    <div className='absolute top-12'>
      <div className='w-4/5 bg-white pt-12 mx-auto'>
          <div className='lg:w-2/5 lg:ml-[10rem]'>
          <TitleText
                        size='head'
                        direction='center'>
                        FAQ
              </TitleText>
              {QandA.map((qa, index) => {
                return (
                  <>
                      <p className='text-[#2a9df4] font-bold my-6 text-center text-sm lg:text-left lg:text-base'>Q: {qa.question}</p>
                      <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>A: {qa.answer}</p>
                  </>
                )
              })}

          </div>
      </div>
    </div>
   
  )
}

export default FaqContainer