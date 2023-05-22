import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
import HeroCorporate from "@/views/Corporate/HeroCoporate";
import CorporateContainer from "@/views/Corporate/CorporateContainer";
import CorporateOffer from "@/views/Corporate/CorporateOffer";
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