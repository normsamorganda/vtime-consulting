'use client'
import React from 'react'
import { TitleText } from '@/components/TitleText'

const PolicyContainer = () => {

   const privacyPolicies = [
        {
            title:'Introduction',
            descrip:'This privacy policy sets out how we collect, use, and protect any personal information that you provide when using our website. We are committed to protecting your privacy and ensuring the security of your personal information.'
        },
        {
            title:'Collection of Personal Information',
            descrip:'We may collect the following information from you when you use our website:'
        },
        {
            title:'Name',
            descrip:'Contact information, including email address and phone number',
            descrip2: 'Demographic information, such as your address and postcode ',
            descrip3 :'Other information relevant to customer surveys and/or offers ',
            descrip4: 'We collect this information to provide you with a better user experience, to process your  orders, and to communicate with you about our products and services.'
        },
        {
            title:'Use of Personal Information',
            descrip:'We use the personal information we collect in the following ways:',
            descrip2:'To process your orders and deliver products to you',
            descrip3:'To communicate with you about your orders and our products and services',
            descrip4: 'To personalize your user experience on our website To improve our website and products',
            descrip5:'To send you promotional emails about our products and services, special offers, or other information that we think may be of interest to you o conduct market research and customer surveys'
        },
        {
            title:'Disclosure of Personal Information',
            descrip:'We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.'
        },
        {
            title:'Security of Personal Information',
            descrip:'We are committed to ensuring the security of your personal information. We have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.'
        },
        {
            title:'Cookies',
            descrip:'We use cookies to improve your user experience on our website. A cookie is a small file that asks permission to be placed on your computers hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.'
        },
        {
            title:'Links to Other Websites',
            descrip:'Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information you provide while visiting such sites, and such sites are not governed by this privacy statement.'
        },
        {
            title:'Changes to this Privacy Policy',
            descrip:'We reserve the right to update or change this privacy policy at any time. You should check this page periodically to ensure that you are happy with any changes.'
        },
    ]

  return (
    <div className='absolute top-12 w-full'>
    <div className='w-4/5 bg-white pt-12 mx-auto'>
        <div className='lg:w-2/5 lg:ml-[10rem] mx-auto'>
        <TitleText
                      size='head'
                      direction='left'>
                      Privacy Policy
            </TitleText>
            {privacyPolicies.map((policy, index) => {
              return (
                <>
                    <p className='font-bold my-6 text-center text-sm lg:text-left lg:text-base'>{policy.title}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip2}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip3}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip4}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip5}</p>


                </>
              )
            })}

                    <p className='font-bold my-6 text-center text-sm lg:text-left lg:text-base'>Contact Us</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>If you have any questions or concerns about this privacy policy, please contact us at <span className='text-[#2a9df4]'>+64 2625-0632 / +632 831-9272</span></p>
        </div>
    </div>
  </div>
  )
}

export default PolicyContainer