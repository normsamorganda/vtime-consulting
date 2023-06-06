'use client';
import {
    YP,
    Visa,
    MF,
    cased,
    outsource,
    passport
  } from "@/assets/Service"
  import ServiceOfferCard from "@/components/ServiceOfferCard/ServiceOfferCard";
const ServiceOffer = () => {

    let servOffer = [
        {
            id:1,
            title:'Corporate',
            offer1:'Business Setup',
            offer2:'Sole Proprietor',
            offer3:'Corporation',
            offer4:'Licenses & Permits',
            offer5:'Real Estate Management',
            img1:MF,
            img2:cased
        },
        {   id:2,
            title:'Visa & Immigration',
            offer1:'Tourist Visa',
            offer2:'Working Visa',
            offer3:'Immigrant Visa(SRRV, SIRV)',
            offer4:'Visa on Arrival',
            offer5:'Airport VIP Escort',
            img1:Visa,
            img2:outsource
        },
        {   
            id:3,
            title:'Outsourcing',
            offer1:'Recruitement',
            offer2:'HR and Payroll',
            offer3:'Bookkeeping & Tax Compliance',
            offer4:'Shared Office',
            offer5:'Legal',
            img1:YP,
            img2:passport
        }
    ]
  return (
    <>
        {servOffer.map((offer) => {
            return (
                
                    <ServiceOfferCard key={offer.id} title={offer.title} offer1={offer.offer1} offer2={offer.offer2} offer3={offer.offer3} offer4={offer.offer4} offer5={offer.offer5} img1={offer.img1} img2={offer.img2}/>
                
            )
        })}
    </>
  )
}

export default ServiceOffer