import Header from "@/views/Header/Header";
import News from "@/views/Updates/Events/News/News";
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"

const New = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <News/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
    </div>
    );

}

export default New;