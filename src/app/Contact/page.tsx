import { Text } from "@/components/Text";
import HeroContactUs from "@/views/ContactUs/HeroContactUs";
import Header from "@/views/Header/Header";
import Link from "next/link";

const ContactUs = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroContactUs/>
       
    </div>);
}

export default ContactUs;