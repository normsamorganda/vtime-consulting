import { Text } from "@/components/Text";
import HeroContactUs from "@/views/ContactUs/HeroContactUs";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
const ContactUs = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroContactUs/>
        <Footer/>
        <FooterExtras/>
    </div>);
}

export default ContactUs;