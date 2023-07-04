'use client'
import { ServiceOfferCardProps } from "./types"
import Image from "next/image"

const ServiceOfferCard = ({key, title, offer1, offer2, offer3, offer4, offer5, img1, img2} : any) => {
  return (
<div className="w-full mt-12">
    <div className="bg-[#fefefe] flex flex-col justify-between w-[350px] shadow-lg mx-auto shadow-brown-500/50 mt-2 rounded-lg md:w-[850px] md:flex-row">
        <div className="mt-5 ml-5 order-2 md:order-1">
                <Image src={img2}
                    alt={""}
                    className="hidden md:block md:w-[100px] md:pl-8">
                </Image>
                {key}
                <span className="font-bold mt-12 md:pl-8">{title}</span>
            <ul className="list-disc marker:text-primary ml-6 py-4 md:ml-12 pt-2">
                <li className="text-sm text-left">{offer1}</li>
                <li className="text-sm text-left">{offer2}</li>
                <li className="text-sm text-left">{offer3}</li>
                <li className="text-sm text-left">{offer4}</li>
                <li className="text-sm text-left">{offer5}</li>
            </ul>
        </div>
        <div className="mx-auto order:1 md:order-2">
            <Image src={img1}
                alt={""}
                className="w-[380px] rounded-tr-3xl rounded-tl-3xl hover:scale-110 transition-all duration-200 md:h-[auto] md:w-[500px]"></Image>
        </div>
    </div>
</div>

  )
}

export default ServiceOfferCard