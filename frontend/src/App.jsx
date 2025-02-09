import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedArticles from "./components/FeaturedArticles";
import Footer from "./components/footer";









function App() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar />
      <Hero />
      <FeaturedArticles />
     
      <Footer />
    </div>
  );
}

export default App;
