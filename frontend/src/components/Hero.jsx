import { motion } from "framer-motion";

const Hero = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0], // Floating effect
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-black text-white py-20 text-center w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Floating Animated Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-30"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 right-32 w-24 h-24 bg-cyan-400 rounded-full opacity-20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-64 w-12 h-12 bg-pink-500 rounded-full opacity-40"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-6xl font-bold relative z-10">
          <span className="text-pink-500">Explore</span> the World of
          <span className="text-cyan-400"> Ideas</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4 relative z-10">
          Your daily source for insightful articles, thought-provoking discussions, and creative inspiration.
        </p>
        <div className="mt-6 flex justify-center space-x-4 relative z-10">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full text-lg" onClick={() => window.location.href = "http://localhost:5173/articles"}>
            Start Reading
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-6 py-3 rounded-full text-lg" onClick={() => window.location.href = "http://localhost:5173/articles/add"}>
            Add Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
