
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeaturedArticles from "../components/FeaturedArticles";
import Footer from "../components/footer";


export default function Home() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar />
            <Hero />
            <FeaturedArticles />
            <Footer />
        </div>
    );
}