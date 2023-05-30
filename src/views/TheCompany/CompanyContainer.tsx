'use client'
import { Text } from "@/components/Text"
import { TitleText } from "@/components/TitleText"
import cx from 'clsx'
import Image from "next/image"
import {meeting, bgFade} from "@/assets/TheCompany"

const CompanyContainer = () => {
  return (
    <>
    <div className="w-3/4 mx-auto text-justify">
        <div className="flex justify-center">
            <TitleText
                size='head'
                direction='center'>
                About Us
            </TitleText>
        </div>
        <h1>
        The Company
        </h1>   
        <p className="mt-8">Established in the year 2000, <span className="text-[#2a9df4]">Business Asia Consulting </span>is a distinguished business consultancy firm that extends its services to aid aspiring entrepreneurs in setting up their businesses in the <span className="text-[#2a9df4]">PHILIPPINES</span>. Our areas of expertise include legal and accounting advisory and HR outsourcing services.</p>
        <p className="mt-8">Having served as a pioneering industry player for almost two decades, our firm has been instrumental in facilitating numerous enterprises and corporations to effectively penetrate the <span className="text-[#2a9df4]">PHILIPPINE</span> market by capitalizing on our unwavering professionalism.</p>
        <p className="mt-8">We acknowledge that there is no one-size-fits-all approach when it comes to business strategies. Thus, we take pride in our personalized approach, catering to each business unique and specific requirements. Our bespoke solutions guarantee a smooth and successful establishment and expansion of your business in the <span className="text-[#2a9df4]">PHILIPPINES</span>.</p>
        <div className="my-12 flex flex-col justify-between md:flex-row">
            <div className="flex flex-col order-2 md:order-1 md:w-2/5 ">
                <div className="">
                    <h1 className="py-6 font-semibold">Our Mission</h1>
                    <p className="text-base mb-6">As one of the first business consulting firms to be established within the PHILIPPINES, our mission is to confidently commit and deliver the best service that our customers need.</p>
                    <p className="text-base">We treat every clients business as if it were our own, which is why we are the most trusted one-stop consultancies for both local and foreign  businesses and individuals.</p>
                </div>

                <div>
                    <h1 className="py-6 font-semibold">Our Vision</h1>
                    <p className="text-base mb-6">Our vision is to become the go-to consulting company for all local and foreign businesses in the country.</p>
                    <p className="text-base">We also aim to expand our locations globally, especially in Asia, to meet our growing clients demands.</p>
                </div>

            </div>

            <div className="order-1 md:order-2">
                <Image src={meeting} alt="huddle">
                </Image>
            </div>
        </div>
    </div>
    
    {/* desktop */}
    <section style={{
        backgroundImage: `url(${bgFade.src})`,
        clipPath:'polygon(90% 0, 100% 88%, 0 100%, 0 15%)',
        }} 
        className="hidden md:block h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center relative top-[-176px] z-[-10]">
            <div className="w-3/4 mx-auto flex justify-center relative top-[150px]">
                <TitleText
                    size='head'
                    direction='center'>
                    Our Leaders
                </TitleText>
            </div>
            

    </section>  
{/* mobile version */}
        <section style={{
        backgroundImage: `url(${bgFade.src})`,
        clipPath:'polygon(100% 0, 100% 85%, 0 100%, 0 15%)',
        backgroundPosition:'-645px, 0px'
        }} 
        className="h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center opacity-10 relative top-[-72px] z-[-10] lg:hidden">
            
        </section>  
    </>
  )
}

export default CompanyContainer