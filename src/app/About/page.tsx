import Header from "@/views/Header/Header";
import ServiceContainer from "@/views/AboutUsOurService/ServiceContainer/ServiceContainer";
import ServiceOffer from "@/views/AboutUsOurService/ServiceOffer/ServiceOffer"
import HeroService from "@/views/AboutUsOurService/Hero/HeroService"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import ContactManagement from "@/views/Contact/ContactManagement"
const About = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        {/* <HeroService/> */}
        <ServiceContainer/>
        <ServiceOffer /> 
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
    </div>
    );
}

export default About;