import Link from "next/link";
import { Text } from "../Text";
import { AiOutlineRight } from 'react-icons/ai'
const navLinks = [
    {
        text: 'About us',
        link: '/About'
    },

    {
        text: 'Corporate',
        link: '/Corporate'
    },

    {
        text: 'Visa & Immigration',
        link: '/Visa&Immigration'
    },

    {
        text: 'Outsourcing',
        link: '/Outsourcing'
    },

    {
        text: 'Updates',
        link: '/Updates'
    },

    {
        text: 'Contact Us',
        link: '/Contact'
    },

]



const MobileMenu = () => {
    return (<div className="fixed top-[88px] left-[6px] w-full h-screen bg-primary -translate-x-0 transition-all duration-1000">

        <div className="flex flex-col gap- border mt-5">
            {navLinks.map((links, index) => {
                return <Link key={index} href={links.link} className="flex items-center justify-between">
                    <Text className="text-white p-3 font-bold" size="title">{links.text}</Text>
                    <Text > <AiOutlineRight className="text-3xl text-white font-bold" /> </Text>
                </Link>
            })}
        </div>
    </div>);
}

export default MobileMenu;