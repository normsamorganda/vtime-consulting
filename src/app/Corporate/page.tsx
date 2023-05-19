import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
import HeroCorporate from "@/views/Hero/HeroCoporate";
import CorporateContainer from "@/views/ServiceContainer/CorporateContainer";
import CorporateOffer from "@/views/ServiceOffer/CorporateOffer";
const Corporate = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroCorporate/>
        <CorporateContainer/>
        <CorporateOffer/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
    </div>);

}

export default Corporate;