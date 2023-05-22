import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Recruitement from "@/views/Outsourcing/Recruitment/Recruitement";
import HeroOutsourcing from "@/views/Outsourcing/HeroOutsourcing/HeroOutsourcing";
import HRContainer from "@/views/Outsourcing/HRContainer/HRContainer";
import Payroll from "@/views/Outsourcing/Payroll/Payroll";

const Outsourcing = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <HeroOutsourcing/>
        <Recruitement/>
        <HRContainer/>
        <Payroll/>



     
    </div>);

}

export default Outsourcing;