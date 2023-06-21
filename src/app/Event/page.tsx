import Header from "@/views/Header/Header";
import ArticleBlogs from "@/views/Updates/Events/ArticlesBlogs/ArticlesBlogs";
import News from "@/views/Updates/Events/News/News";
import Reviews from "@/views/Updates/Events/Reviews/Reviews";
import ContactManagement from "@/views/Contact/ContactManagement"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import Events from "@/views/Updates/Events/Events"

const Event = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <Events />
        <ContactManagement />
        <Footer/>
        <FooterExtras/>

    </div>
    );

}

export default Event;