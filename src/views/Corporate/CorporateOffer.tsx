'use client'
import ServiceOfferCard from "@/components/ServiceOfferCard/ServiceOfferCard"
import {
    CorpBuilding,
    CorpConstruction,
    CorpManagement,
    CorpDriverlicense,
    CorpRegistration,
    CorpTeamWork
  } from "@/assets/Service"
  
const CorporateOffer = () => {


    let offerCorp = [
        {
            id:1,
            title:'Company Registration',
            offer1:'Sole Proprietorship',
            offer2:'Partnership',
            offer3:'Corporation',
            offer4:'Representative Office',
            offer5:'Branch Offices',
            img1:CorpBuilding,
            img2:CorpRegistration
        },
        {   id:2,
            title:'Licenses And Permits',
            offer1:'FDA License (FDA)',
            offer2:'PCAB License',
            offer3:'Environmental Compliance Certificate',
            offer4:'BSP permit (BSP)',
            offer5:'BIR Import and export permit (BIR)',
            img1:CorpTeamWork,
            img2:CorpDriverlicense
        },
        {   
            id:3,
            title:'Real Estate Management',
            offer1:'Office Space',
            offer2:'Condominium Rental',
            offer3:'Real Estate Investment',
            offer4:'Daily House Rent',
            offer5:'Property Management',
            img1:CorpConstruction,
            img2: CorpManagement
        }
    ]



  return (

    <>
    {offerCorp.map((offer) => {
        return (
            <ServiceOfferCard key={offer.id} title={offer.title} offer1={offer.offer1} offer2={offer.offer2} offer3={offer.offer3} offer4={offer.offer4} offer5={offer.offer5} img1={offer.img1} img2={offer.img2}/>
        )
    })}
    </>

    )
}

export default CorporateOffer