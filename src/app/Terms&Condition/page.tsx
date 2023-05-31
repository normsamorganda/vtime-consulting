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
import TermsAndConditionContainer from '@/views/TermsAndCondition/TermsConditionContainer';
const TermsAndCondition = () => {
    return (<div className="px-[5px] text-black">
    <Header />
        <div className='relative h-[1950px] md:h-[1600px] lg:h-[1900px] xl:h-[1600px] 2xl:h-[1200px]'>
            <HeroCorporate imgHero = {businessman}/>
            <TermsAndConditionContainer/>
        </div>
        <Footer/>
        <FooterExtras/>

        

  
</div>);
}

export default TermsAndCondition