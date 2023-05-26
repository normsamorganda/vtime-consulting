import HeroAdvantage from "@/views/AdvantagesPage/HeroAdvantage";
import Header from "@/views/Header/Header";
import Advantage from "@/views/Advantages/Advantages"
import Consulting from "@/views/AdvantagesPage/Consulting";
import Affiliates from "@/views/Affiliates/Affilitates"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
const Advantages = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <HeroAdvantage/>
        <Advantage />
        <Consulting/>
        <Affiliates />
        <Footer />
        <FooterExtras />

    </div>
    );
}

export default Advantages;