import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
import HeroVisa from "@/views/VisaImmigration/HeroVisa/HeroVisa"
import ContainerVisa from "@/views/VisaImmigration/ContainerVisa/ContainerVisa"

const VisaImmigration = () => {

    return (<div className="px-[5px] text-black">
        <Header />
        <HeroVisa/>
        <ContainerVisa/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
    </div>);

}

export default VisaImmigration;