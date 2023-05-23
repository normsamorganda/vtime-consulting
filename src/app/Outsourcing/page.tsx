import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Recruitement from "@/views/Outsourcing/Recruitment/Recruitement";
import HeroOutsourcing from "@/views/Outsourcing/HeroOutsourcing/HeroOutsourcing";
import HRContainer from "@/views/Outsourcing/HRContainer/HRContainer";
import Payroll from "@/views/Outsourcing/Payroll/Payroll";
import OutsourcingServices from "@/views/Outsourcing/OutsourcingServices/OutsourcingServices";
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"

const Outsourcing = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroOutsourcing/>
        <Recruitement/>
        <HRContainer/>
        <Payroll/>
        <OutsourcingServices/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>


     
    </div>);

}

export default Outsourcing;