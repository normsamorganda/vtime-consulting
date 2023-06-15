'use client'
import { Text } from "@/components/Text"
import { TitleText } from "@/components/TitleText"
import Image from "next/image"
import {meeting, bgFade, square} from "@/assets/TheCompany"

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from "react-icons/hi"
import { ceo, marketing, accounting, attorney } from "@/assets/TheCompany"
import useSize from "@/hooks/useSize"

const VIPs = [
    {
        img:ceo,
        name:'Alec Noah Rosenman',
        title:'CEO'
    },
    {
        img:attorney,
        name:'Atty. Vanessa Joyce Monge',
        title:'Vice President and Head of Legal'
    },
    {
        img:accounting,
        name:'Aileenmae Goyal Silverio, CPA',
        title:'Accounting Manager'
    },
    {
        img:marketing,
        name:'Kimberly Claire Acas',
        title:'Marketing Manager'
    },
    {
        img:ceo,
        name:'Alec Noah Rosenman',
        title:'CEO'
    },
    {
        img:attorney,
        name:'Atty. Vanessa Joyce Monge',
        title:'Vice President and Head of Legal'
    },
    {
        img:accounting,
        name:'Aileenmae Goyal Silverio, CPA',
        title:'Accounting Manager'
    },
    {
        img:marketing,
        name:'Kimberly Claire Acas',
        title:'Marketing Manager'
    },
]


const CompanyContainer = () => {

    const { tablet, phone } = useSize()

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
        <h1 className="text-base font-semibold">
        The Company
        </h1>   
        <p className="mt-8 text-xs lg:text-sm">Established in the year 2000, <span className="text-[#2a9df4] text-xs lg:text-sm">Business Asia Consulting </span>is a distinguished business consultancy firm that extends its services to aid aspiring entrepreneurs in setting up their businesses in the <span className="text-[#2a9df4] text-xs lg:text-sm">PHILIPPINES</span>. Our areas of expertise include legal and accounting advisory and HR outsourcing services.</p>
        <p className="mt-8 text-xs lg:text-sm">Having served as a pioneering industry player for almost two decades, our firm has been instrumental in facilitating numerous enterprises and corporations to effectively penetrate the <span className="text-[#2a9df4] text-xs lg:text-sm">PHILIPPINE</span> market by capitalizing on our unwavering professionalism.</p>
        <p className="mt-8 text-xs lg:text-sm">We acknowledge that there is no one-size-fits-all approach when it comes to business strategies. Thus, we take pride in our personalized approach, catering to each business unique and specific requirements. Our bespoke solutions guarantee a smooth and successful establishment and expansion of your business in the <span className="text-[#2a9df4] text-xs lg:text-sm">PHILIPPINES</span>.</p>
        <div className="mt-12 flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col order-2 lg:order-1 lg:w-2/5 ">
                <div>
                    <h1 className="py-6 font-semibold text-base">Our Mission</h1>
                    <p className="text-xs mb-6 lg:text-sm">As one of the first business consulting firms to be established within the PHILIPPINES, our mission is to confidently commit and deliver the best service that our customers need.</p>
                    <p className="text-xs lg:text-sm">We treat every clients business as if it were our own, which is why we are the most trusted one-stop consultancies for both local and foreign  businesses and individuals.</p>
                </div>

                <div>
                    <h1 className="py-6 font-semibold">Our Vision</h1>
                    <p className="text-xs mb-6 lg:text-sm">Our vision is to become the go-to consulting company for all local and foreign businesses in the country.</p>
                    <p className="text-xs lg:text-sm">We also aim to expand our locations globally, especially in Asia, to meet our growing clients demands.</p>
                </div>

            </div>
            <div className="order-1 lg:order-2 bg-cover relative z-[99999] sm:w-[30rem] lg:w-[40rem]">
                <Image src={meeting} alt="huddle">
                </Image>
            </div>
        </div>
    </div>
    {/* desktop */}
    <div className="relative">
        <section style={{
            backgroundImage: `url(${bgFade.src})`,
            clipPath: phone ? 'polygon(100% 0, 100% 85%, 0 100%, 0 15%)' : 'polygon(100% 0px, 100% 78%, 0px 100%, 0px 11%)',
            }} 
            className="phoneSe:h-[843px] xSmall:h-[845px] lg:h-[800px] xl:h-[932px] md:block h-screen w-full bg-no-repeat bg-clip-content bg-cover bg-center mb-[120px]">
                <div className="w-full mx-auto py-[50px] lg:py-[23px] xl:py-[100px]">
                    <div className="w-3/4 mx-auto flex flex-col justify-center items-center mt-12">
                    <TitleText
                        size='head'
                        direction='center'>
                        Our Leaders
                    </TitleText>
                    <p className="text-center text-xs lg:text-sm pb-2">
                    Our team comprises experienced professionals with a passion for innovation and a commitment to excellence. With decades of combined experience 
                        in their respective fields, our leaders bring a wealth of knowledge and expertise to the table, helping to guide our company toward success.
                    </p>
                    <p className="lg:pt-2 xl:pt-8 text-center lg:text-sm text-xs pb-2">
                    By fostering a culture of collaboration, creativity, and accountability, our leadership team sets the tone for our organization and helps to inspire 
                        our employees to reach their full potential. 
                    </p>

                    <p className="lg:pt-2 xl:pt-8 text-center lg:text-sm text-xs">
                    Meet our leaders today and discover the driving force behind our company success.
                    </p>
                    </div>

                    {/* slider */}

                    <div className="pt-2 w-3/4 mx-auto rounded-lg">  
                    <section className="flex items-center justify-center md:justify-end mb-5 mx-auto w-[70%]">
                        <div className="button-prev-slide-vip text-[2rem] text-gray-400 active:text-sky-400">
                        <HiOutlineArrowNarrowLeft/>
                        </div>
                        <div className="button-next-slide-vip text-[2rem] text-gray-400 active:text-sky-400">
                        <HiOutlineArrowNarrowRight/>
                        </div>
                    </section>
                    <section className="flex justify-center items-center mx-auto rounded-3xl w-3/4">
                    <Swiper
                    navigation={{
                        nextEl:".button-next-slide-vip",
                        prevEl:".button-prev-slide-vip",
                    }}
                    pagination={{
                        type: "fraction",
                        el:".swiper-pagination-leader"
                    }}
                    breakpoints={{
                        768: {
                        slidesPerView: 2,
                        },
                        1024: {
                        slidesPerView:2,
                        },
                        1280: {
                        slidesPerView:4,
                        slidesPerGroup:4,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    >
                        {VIPs.map((vip, index) => {
                        return (
                            <SwiperSlide key={index} className="text-center">
                                    <Image src={vip.img} alt="member" height={250} className="mx-auto"></Image>
                                    <h1 className="font-semibold text-sm mt-6">{vip.name}</h1>
                                    <h1 className="text-sm mt-1">{vip.title}</h1>
                            </SwiperSlide>
                        )
                        })}
                    </Swiper>
                    </section>
                    </div>    
                </div>

        </section>  

        <Image src={square} alt="squareInvent" className="absolute recShape hidden xl:block"></Image>


    </div>
 



    </>
  )
}

export default CompanyContainer