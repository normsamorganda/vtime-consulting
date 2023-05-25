import { Text } from "@/components/Text";
import Header from "@/views/Header/Header";
import Link from "next/link";
import Events from "@/views/Updates/Events/Events"
import { bg } from "@/assets/Updates"
import ArticleBlogs from "@/views/Updates/Events/ArticlesBlogs/ArticlesBlogs";
import BlogsCard from "@/components/ArticleBlogsCard/BlogsCard";

const Updates = () => {
    return (
    <div className="px-[5px] text-black">
        <Header />
        <Events />
        <ArticleBlogs/>
      
    </div>
    );

}

export default Updates;