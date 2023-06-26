'use client'
import { whiteLogo, FHIwhite, fhi, fhiText } from "@/assets/Header"
import { Search } from "@/components/Search"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import {BiChevronRight} from "react-icons/bi"
import {BiChevronDown} from "react-icons/bi"
import React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import {AiOutlineSearch, AiOutlineCloseCircle} from "react-icons/ai"
import {IoCloseSharp} from "react-icons/io5"
import { fhiLogo } from "@/assets/Affiliates"
import { FaSearch } from "react-icons/fa";

const navLinks = [

  {
    id:1,
    text: 'Corporate',
    link: '/Corporate'
  },

  {
    id:2,
    text: 'Visa & Immigration',
    link: '/Visa&Immigration'
  },

  {
    id:3,
    text: 'Outsourcing',
    link: '/Outsourcing'
  },

  // {
  //   id:4,
  //   text: 'Contact Us',
  //   link: '/Contact'
  // },

]

const subCat = [
  {
    id:1,
    text: 'Our Services',
    link: '/About'
  },
  {
    id:2,
    text: 'Advantages',
    link: '/Advantages'
  },
]

const subCatUpdates = [
  {
    id:1,
    text: 'Articles / Blogs',
    link: '/ArticlesBlogs'
  },
  {
    id:2,
    text: 'Events',
    link: '/Event'
  },
  {
    id:3,
    text: 'News',
    link: '/News'
  },
  {
    id:4,
    text: 'Reviews',
    link: '/Reviews'
  },

]

const Header = () => {
  const { tablet, phone } = useSize()

  const pathname = usePathname();

//active nav function
  const isActive = (path:any) => {
    return pathname === path.link ? `text-primary`:'';
    
  };

  const [openDiv, setopenDiv] = useState(true)
  const [dropDown, setdropDown] = useState(false)
  const [dropDownUpdates, setdropDownUpdates] = useState(false)
  const [subDropdown, setsubDropdown] = useState(false)
  const [search, setSearch] = useState(true)
  const [burger, setBurger] = useState(false)

  const handleShow = () => {
    setopenDiv(!openDiv)
    console.log(`burger status: ${openDiv}`)
  }
  const handleAboutUs = () => {
    setdropDown(!dropDown)
  }

  const navDropDownHandleUpdates = () => {
    setdropDownUpdates(!dropDownUpdates)
  }
  const handleDropdown  = () => {
    setsubDropdown(!subDropdown)
  }
  const handleSearch = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      setSearch(!search)
    }
  
  }
  const subBurger = () => {
    setBurger(!burger)
  }

  let updateSize = () => {
      if(window.innerWidth > 899 ){
        setopenDiv(true)
        setBurger(false)
        setSearch(true)

      }
  }

  useEffect(() => {
    window.addEventListener("resize",updateSize)
  },[])
  return (
    <>
  
<section className={search ? "block relative" : "hidden"}>
<div className="absolute top-1/2 -translate-y-1/2 w-[180px] laptop:w-[200px] z-10 left-[3%] tablet:left-[6%] ">
{openDiv ? <FaBars className={cx("text-white w-5 h-10 hidden tablet:block", 'phone:w-6')} onClick={handleShow}/> : <AiOutlineClose className={cx("text-white w-6 h-10 font-bold md:text-3xl hidden tablet:block", 'phone:w-6')} onClick={handleShow}/>  } 

<div className="xl:w-[230px] 2xl:w-[17rem] flex justify-center items-center tablet:hidden desktop2:justify-around">
    <div className="md:mr-6">
      {!burger ? <FaBars className="text-white w-5 h-10 block cursor-pointer" onClick={subBurger}/> : <IoCloseSharp className="text-white w-8 h-10" onClick={subBurger}/>}
    </div>
    <Link href={"/"} className="flex items-center">
    <Image src={fhi.src} alt="logo" width={800} height={400} className="w-[50px]"/>
    <Image src={fhiText.src} alt="logo" width={800} height={400} className="w-[100%] desktop:w-[90%] desktop2:hidden"/>
    </Link>
</div>

</div>

<section className="flex justify-between pt-2 relative">
  {/* left */}
  <section className={cx("bg-secondary h-10 flex justify-center rounded-tl-3xl relative w-[20%]", 'tablet:w-full')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -right-[58px]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
  </section>
  {/* links */}

  {!burger ? (
    <div className={cx("flex gap-10 items-center tablet:hidden", "laptopL:!gap-5")}>
    <button onClick={handleAboutUs}  className="text-sm font-medium hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full">
     <span className="active:text-primary hover:text-primary text-black !font-medium transition-all laptop:!text-xs" >About Us</span>
     {dropDown && (
       <div className="absolute top-[40px] left-[-71px] bg-[#fefefe] w-[200px] text-[12px] pb-3 flex flex-col border-t-4 border-[#2a9df4] z-[99999999] shadow-custom">
       <Link 
       className={`${isActive('/TheCompany')} pt-2`}
       href='/TheCompany'
       >
         The Company
         </Link> 
         <Link 
       className={`pt-2`}
       href='/TheCompany'
       >
         Our Mission
         </Link> 
         <Link 
       className={`pt-2`}
       href='/TheCompany'
       >
         Our Vision
         </Link> 
         <Link 
       className={`pt-2`}
       href='/TheCompany'
       >
         Our Leaders
         </Link> 
         {subCat.map(({text, link, id}) => (
       <Link 
       key={id} 
       className={`${isActive({link})} pt-2`}
       href={link} 
       >
         {text}
         </Link> 
     ))}
       </div>
     )}
   </button>
   
       {navLinks.map(({text, link, id}) => {
         return (
           <Link href={link} key={id}>
           <Text size="description" className={cx(`${isActive({link})} hover:text-primary hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full`, " text-black !font-medium transition-all", "laptop:!text-xs")}>{text}</Text>
         </Link>
         )
       })}
       <button onClick={navDropDownHandleUpdates} className="text-sm font-medium hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full">
     <span className="active:text-primary hover:text-primary text-black !font-medium transition-all laptop:!text-xs">Updates</span>
     <div className={dropDownUpdates ? "absolute top-[40px] left-[-71px] bg-[#fefefe] w-[200px] text-[12px] pb-3 flex flex-col border-t-4 border-[#2a9df4] z-[99999999] shadow-custom" : "hidden"}>
       {subCatUpdates.map(({text, link, id}) => (
     <Link 
     key={id} 
     className={`${isActive({link})} pt-2`}
     href={link} 
     >
       {text}
       </Link> 
   ))}
     </div>
   </button>
   <Link href='Contact'>
    <button className="text-sm font-medium hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full">
      <span className="active:text-primary hover:text-primary text-black !font-medium transition-all laptop:!text-xs">Contact Us</span>
    </button> 
   </Link>  
   </div>
  ) : <div className="w-2/4">
  <Search handleSearch={handleSearch}/>
</div> }

  {/* CENTER */}
  {tablet && <div className={cx("absolute top-[11%] translate-y-1/4 w-[19rem] z-10 left-[51%] -translate-x-1/2", 'phone:w-48')}>
  <Link href={"/"} className="flex items-center">
    <Image src={fhi.src} alt="logo" width={800} height={400} className="w-[50px]"/>
    <Image src={fhiText.src} alt="logo" width={800} height={400} className="h-[35px] w-[92%]"/>
  </Link>
  </div>}

  {/* right */}
  <section className={cx("bg-secondary h-10  w-[20%] flex justify-center rounded-tr-3xl relative", 'tablet:w-full')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -left-[58px] scale-x-[-1]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
  </section>
</section>
{!burger && 
      <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[17%]">
        <Search handleSearch={handleSearch}/>
      </div>
}
<section className="bg-secondary h-10 mt-0 flex justify-center" />
{/* <MobileMenu /> */}

</section >
    <section className={search ? "hidden"  : "block w-full pt-2" }>
      <div className="bg-white rounded-t-3xl h-20 flex items-center justify-around">
        <input type="text" className="focus:outline-none h-10 placeholder:text-sm w-64" placeholder="Type to search"/>
        <div className="flex items-center">       
          <AiOutlineClose className={cx("text-black w-6 h-10 font-bold md:text-3xl hidden mr-3 tablet:block", 'phone:w-6')} onClick={handleSearch}/>
          <FaSearch className={cx("text-black ml-3 mr-2", tablet && 'black text-xl')}/>
        </div>
      </div>
    </section>
    <div className="relative w-full">
          <div className={!openDiv || !search ? "absolute bg-[#2a9df4] z-40 h-auto overflow-hidden ease-in-out duration-700 w-full" : "fixed left-[-1000px]" } >
      {/* About Us w/ sub dropdown */}
          <div className="w-11/12 mx-auto py-5">
            <div className="flex justify-between" onClick={handleDropdown}>
                <span className="text-white text-sm font-bold">About Us</span>
              {subDropdown ? <BiChevronDown className="text-white text-3xl"/> : <BiChevronRight className="text-white text-3xl"/> } 
            </div>
                <div className={subDropdown ? "block" : "hidden"}>
                <div className="pt-3 pl-3 text-sm">
                      <Link className="text-white text-sm font-bold active:underline" href='/TheCompany'>
                        The Company
                      </Link> 
                </div>
                <div className="pt-3 pl-3 text-sm">
                      <Link className="text-white text-sm font-bold active:underline" href='/TheCompany'>
                        Our Mission
                      </Link> 
                </div>
                <div className="pt-3 pl-3 text-sm">
                      <Link className="text-white text-sm font-bold active:underline" href='/TheCompany'>
                        Our Vision
                      </Link> 
                </div>
                <div className="pt-3 pl-3 text-sm">
                      <Link className="text-white text-sm font-bold active:underline" href='/TheCompany'>
                        Our Leaders
                      </Link> 
                </div>
                {subCat.map(({text, link, id}) => (
                  <div className="pt-3 pl-3 text-sm"  key={id} >
                      <Link 
                      className="text-white text-sm font-bold active:underline"
                      href={link} 
                      >
                        {text}
                      </Link> 
                  </div>
                  ))}
                </div>
          </div>

      {/* Nav Link */}
          {navLinks.map((link) => {
            return (
              <div className="flex w-11/12 mx-auto justify-between py-5" key={link.id}>
              <Link href={link.link}  className="text-white text-sm font-bold"> {link.text}</Link>
                <BiChevronRight className="text-white text-3xl"/>
              </div>
            )
          })}
      </div> 
    </div>
 

    {burger && (
          <div className="w-screen h-auto bg-[#e6e6e6] absolute z-[99999] flex">

          <div className=" w-3/12 text-black">
              <div className="ml-12">
              <div className="w-11/12 mx-auto py-5">
                <div className="flex justify-between border-b-2 divide-y divide-slate-200" onClick={handleDropdown}>
                    <span className=" text-sm font-bold">About Us</span>
                  {subDropdown ? <BiChevronDown className="text-3xl"/> : <BiChevronRight className="text-3xl"/> } 
                </div>
                    <div className={subDropdown ? "block" : "hidden"}>
                    <div className="pt-3 pl-3 text-sm flex flex-col">
                          <Link 
                          className=" text-sm font-bold pt-4 active:underline "
                          href='/TheCompany'
                          >
                            The Company
                          </Link>
                          <Link 
                          className=" text-sm font-bold pt-4 active:underline "
                          href='/TheCompany'
                          >
                            Our Mission
                          </Link> 
                          <Link 
                          className=" text-sm font-bold pt-4 active:underline "
                          href='/TheCompany'
                          >
                            Our Vision
                          </Link> 
                          <Link 
                          className=" text-sm font-bold pt-4 active:underline "
                          href='/TheCompany'
                          >
                            Our Leaders
                          </Link> 
                          {subCat.map(({text, link, id}) => (
                                <Link 
                                className=" text-sm font-bold pt-4 active:underline "
                                href={link} 
                                key={id}
                                >
                                  {text}
                                </Link> 
                            ))}
                      </div>
                    </div>
              </div>
              {navLinks.map((link) => {
                    return (
                      <div className="flex w-11/12 mx-auto justify-between py-5 border-b-2 divide-y divide-slate-200" key={link.id}>
                      <Link href={link.link}  className="text-sm font-bold"> {link.text}</Link>
                        <BiChevronRight className="text-3xl"/>
                      </div>
                    )
                  })}
                
              </div>
          </div>
          <div className=" w-9/12">
            
            </div>

          </div>
    ) }

    
    </>
   

  )
}

export default Header



// -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);
// clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);


