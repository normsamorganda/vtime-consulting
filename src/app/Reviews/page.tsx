import Header from "@/views/Header/Header";
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import Reviews from "@/views/Updates/Events/Reviews/Reviews";
const Review = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <Reviews/>
        <ContactManagement />
        <Footer/>
        <FooterExtras/>
    </div>
    );

}

export default Review;