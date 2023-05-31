'use client'
import React from 'react'
import { TitleText } from '@/components/TitleText'

const TermsConditionContainer = () => {

   const termsCondition = [
        {
            title:'Terms and Conditions for Business Asia Consulting',
            descrip:'Welcome to BUSINESS ASIA AND CONSULTING! These terms and conditions ("Terms") govern your use of our website, located at ("Website"). You agree to be bound by these terms by accessing our website. If you do not agree to these Terms, you may not use our website.'
        },
        {
            title:'Use of Website',
            descrip:'You may use our website only for lawful purposes and by these Terms. You may not use our website:',
            descrip2: 'In any way that violates any applicable Philippine law or regulation, including without limitation the Data Privacy Act of 2012 (Republic Act No. 10173); ',
            descrip3 :'To transmit any data, content, or material that is illegal, obscene, defamatory, libelous, threatening, abusive, invasive of privacy or publicity rights, or otherwise objectionable; ',
            descrip4: 'To interfere with or disrupt the operation of our website or the servers or networks connected to our website;',
            descrip5: 'To attempt to gain unauthorized access to our website, other user accounts, or computer systems or networks connected to our website;',
            descrip6: 'To impersonate or attempt to impersonate BUSINESS ASIA CONSULTING, our employees, another user, or any other person or entity;',
            descrip7: 'To engage in any other conduct that restricts or inhibits anyone use or enjoyment of the Website, or which, as determined by us, may harm BUSINESS ASIA CONSULTING or users of the Website or expose them to liability.',

        },
        {
            title:'Intellectual Property',
            descrip:'The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection, and arrangement thereof), are owned by BUSINESS ASIA CONSULTING, its licensors, or other providers of such material and are protected by Philippine and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.',
        },
        {
            title:'Data Privacy',
            descrip:'We are committed to protecting your personal information through the Data Privacy Act of 2012. By using our website, you agree to our Privacy Policy, which is incorporated by reference into these Terms. Our Privacy Policy describes how we collect, use, and disclose your personal information.'
        },
        {
            title:'Disclaimer of Warranties',
            descrip:'THE WEBSITE AND ALL CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE WEBSITE ARE PROVIDED “AS IS” AND “AS AVAILABLE” FOR YOUR USE. THE WEBSITE AND ALL CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE WEBSITE ARE PROVIDED WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE OR ANY OF ITS CONTENT WILL BE ACCURATE, RELIABLE, UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.'
        },
        {
            title:'Limitation of Liability',
            descrip:'IN NO EVENT SHALL BUSINESS ASIA CONSULTING, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN, AND SUFFERING, EMOTIONAL DIST'
        }
    ]

  return (
    <div className='absolute top-12'>
    <div className='w-4/5 bg-white pt-12 mx-auto'>
        <div className='lg:w-2/5 lg:ml-[10rem]'>
        <TitleText
                      size='head'
                      direction='left'>
                      Terms & Condition
            </TitleText>
            {termsCondition.map((policy, index) => {
              return (
                <>
                    <p className='font-bold my-6 text-center text-sm lg:text-left lg:text-base'>{policy.title}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip2}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip3}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip4}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip5}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip6}</p>
                    <p className='font-semibold text-xs text-justify px-4 text-[10px] lg:text-left lg:p-0'>{policy.descrip7}</p>
                </>
              )
            })}

        </div>
    </div>
  </div>
  )
}

export default TermsConditionContainer