

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-pink-500">BlogFusion</h1>
        <nav className="hidden">[System: Menu will be rendered here]</nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-5xl font-bold text-pink-500 mb-4">
          Explore the World of <span className="text-cyan-500">Ideas</span>
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Your daily source for insightful articles, thought-provoking
          discussions, and creative inspiration.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full">
            Start Reading
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-full">
            Subscribe
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-pink-500">BlogFusion</span>
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          We&apos;re passionate about delivering high-quality content that inspires,
          educates, and entertains. Our platform brings together diverse voices
          and perspectives from across the globe.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-pink-500 w-12 h-12 flex justify-center items-center mx-auto rounded-full mb-4">
              <i className="fas fa-pen text-white"></i>
            </div>
            <h3 className="text-xl font-semibold">Quality Content</h3>
            <p className="text-gray-400 mt-2">
              Carefully curated articles from expert writers and thought
              leaders.
            </p>
          </div>
          <div>
            <div className="bg-pink-500 w-12 h-12 flex justify-center items-center mx-auto rounded-full mb-4">
              <i className="fas fa-users text-white"></i>
            </div>
            <h3 className="text-xl font-semibold">Global Community</h3>
            <p className="text-gray-400 mt-2">
              Join thousands of readers and contributors from around the world.
            </p>
          </div>
          <div>
            <div className="bg-pink-500 w-12 h-12 flex justify-center items-center mx-auto rounded-full mb-4">
              <i className="fas fa-lightbulb text-white"></i>
            </div>
            <h3 className="text-xl font-semibold">Fresh Perspectives</h3>
            <p className="text-gray-400 mt-2">
              Diverse viewpoints and innovative ideas that spark conversations.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-500">50K+</h3>
            <p className="text-gray-400">Monthly Readers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-500">1000+</h3>
            <p className="text-gray-400">Published Articles</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pink-500">100+</h3>
            <p className="text-gray-400">Expert Writers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
