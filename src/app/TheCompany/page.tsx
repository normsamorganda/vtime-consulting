import React from 'react'
import Header from "@/views/Header/Header";
import { bgHoping } from "@/assets/TheCompany";
import HeroCorporate from "@/views/Corporate/HeroCoporate";
import CompanyContainer from '@/views/TheCompany/CompanyContainer';

const TheCompany = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroCorporate imgHero = {bgHoping}/>
        <CompanyContainer/>
      
    </div>);
}

export default TheCompany