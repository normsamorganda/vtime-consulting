'use client'
import { BsChatLeftText } from 'react-icons/bs'
import {message} from "@/assets/Service"
import Image from 'next/image'
const ContactManagement = () => {
  return (
    <div className="w-full">
    <div className='flex flex-col justify-around items-center mx-auto my-8 p-10 lg:flex-row'>
      <div className='invisible'>      
        </div>
        <div className='bg-[#f7f8fc] w-[full] p-8 text-center rounded-lg lg:w-[1050px]'>
              <h3 className='text-[#2a9df4] font-bold'>Connect with Management Team</h3>
              <button className="bg-[#2a9df4] text-white px-5 py-2 rounded-lg mt-3 hover:bg-[#208ada]">Contact</button>
          </div>
          <div className='mt-7 md:flex md:mt-0 md:items-center md:h-full'>
              <span className='shadow-[#6b6b6b] px-4 py-2 rounded-lg text-[#43a5f5]'  style={{
            boxShadow: "-1px -1px 6px 1px rgba(0,0,0,0.75)"
          }}>Chat with us!</span>
              <span>
                  <Image src={message} alt='message' className='w-[60px] cursor-pointer mx-auto mt-5 hover:-translate-y-2 animate-bounce md:mt-0 md:ml-3'></Image>
              </span>
          </div>   
    </div>
    </div>
  )
}

export default ContactManagement