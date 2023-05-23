import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Events from "@/views/Updates/Events"
import { bg } from "@/assets/Updates"

const Updates = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <Events />
        
    </div>
    );

}

export default Updates;