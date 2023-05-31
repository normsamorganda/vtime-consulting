import React from 'react'
import Header from "@/views/Header/Header";
import { bgHoping } from "@/assets/TheCompany";
import HeroCorporate from "@/views/Corporate/HeroCoporate";
import CompanyContainer from '@/views/TheCompany/CompanyContainer';
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
const TheCompany = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroCorporate imgHero = {bgHoping}/>
        <CompanyContainer/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
      
    </div>);
}

export default TheCompany