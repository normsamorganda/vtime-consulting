'use client'
import React from 'react'
import Header from "@/views/Header/Header";
import Events from "@/views/Updates/Events/Events"
import HeroCorporate from "@/views/Corporate/HeroCoporate";
import { businessman } from "@/assets/FAQ";
import FaqContainer from '@/views/FAQ/FaqContainer';
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import Link from 'next/link';
const OurLeaders = () => {
    return (<div className="px-[5px] text-black">
                <Header />
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl uppercase mb-6'>Our Leaders Page</h1>
             <h1 className='text-center text-2xl uppercase'>This is under construction</h1>
             <Link href="/" className='text-2xl underline mt-6'>Go Home</Link>
            </div>
            <Footer/>
            <FooterExtras/>
    
</div>);
}

export default OurLeaders