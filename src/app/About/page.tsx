import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import { workingTeamBg } from "@/assets/Hero";
// import  { Services } from "@/components/Services";
const About = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <div className="flex-col flex w-full h-screen">
            <section style={{
                backgroundImage: `url(${workingTeamBg.src})`,
                }} className="h-screen w-screen bg-no-repeat bg-cover bg-center">
            </section>
                <div>
                    <h1>Our Services</h1>
                        <p>Being a one-stop service shop, we offer a wide range of services, from a company's incorporation to populating it to actual operations and physical locations.</p>
                     <p>We offer a wide range of services that span from a company's incorporation to actual operations.</p>
                </div>
            
            <Link href={'/'} className="underline mr-auto">Go back Home</Link>




        </div>
    </div>);
}

export default About;