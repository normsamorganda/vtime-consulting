import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";

const VisaImmigration = () => {

    return (<div className="px-[5px] text-black">
        <Header />
        <div className="flex-col flex w-full h-screen border-2 border-red-900 items-center">
            <Link href={'/'} className="underline mr-auto">Go back Home</Link>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
                <Text size="title">VISA & Immigration page</Text>
                <Text size="title">STILL UNDER CONSTRUCTION</Text>
            </div>

        </div>
    </div>);

}

export default VisaImmigration;