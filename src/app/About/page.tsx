import Header from "@/views/Header/Header";
import Link from "next/link";

const About = () => {
    return (<div className="px-[5px] text-black">
        <Header />
        <div className="flex-col flex">
            <Link href={'/'} className="underline">Home</Link>
            About

        </div>
    </div>);
}

export default About;