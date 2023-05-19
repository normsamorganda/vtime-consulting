'use client'
import { ServiceOfferCardProps } from "./types"
import Image from "next/image"
import cx from 'clsx'
import styles from './ListMod.module.css';

const ServiceOfferCard = ({key, title, offer1, offer2, offer3, offer4, offer5, img1, img2} : any) => {
  return (
<div className="w-full mt-12">
    <div className="bg-[#fefefe] text-[10px] flex justify-between w-[350px] shadow-lg mx-auto shadow-brown-500/50 mt-2 rounded-lg md:w-[850px] md:text-xl">
        <div className="mt-5 ml-5">
                <Image src={img2}
                    alt={""}
                    className="w-[30px] md:w-[100px] md:pl-8">
                </Image>
                {key}
                <span className="font-bold mt-12 md:pl-8">{title}</span>
            <ul className="list-disc md:ml-12 pt-2">
                <li className="text-[10px] font-semibold text-left md:text-[15px]">{offer1}</li>
                <li className="text-[10px] font-semibold text-left md:text-[15px]">{offer2}</li>
                <li className="text-[10px] font-semibold text-left md:text-[15px]">{offer3}</li>
                <li className="text-[10px] font-semibold text-left md:text-[15px]">{offer4}</li>
                <li className="text-[10px] font-semibold text-left md:text-[15px]">{offer5}</li>
            </ul>
        </div>
        <div>
            <Image src={img1}
                alt={""}
                className="rounded-tr-3xl rounded-tl-3xl hover:scale-110 transition-all duration-200 cursor-pointer w-[auto] h-[250px] md:h-[auto] md:w-[500px]"></Image>
        </div>
    </div>

</div>


    
    

     
   

  )
}

export default ServiceOfferCard