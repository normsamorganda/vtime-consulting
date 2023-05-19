import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import { workingTeamBg } from "@/assets/Hero";
import ServiceContainer from "@/views/ServiceContainer/ServiceContainer";
import Service from "@/views/Service/Service";
import ServiceOffer from "@/views/ServiceOffer/ServiceOffer"
import HeroService from "@/views/Hero/HeroService"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
const About = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <HeroService/>
        <ServiceContainer/>
        <ServiceOffer /> 
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
      
    </div>
    );
}

export default About;