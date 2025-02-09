export default function FeaturedArticles() {
    const articles = [
      {
        category: "Technology",
        title: "The Future of AI in Content Creation",
        description:
          "Exploring how artificial intelligence is revolutionizing the way we create and consume content.",
        author: "John Doe",
        readTime: "5 min read",
      },
      {
        category: "Lifestyle",
        title: "Mindful Living in a Digital Age",
        description:
          "Practical tips for maintaining balance and wellness in our increasingly connected world.",
        author: "Jane Smith",
        readTime: "7 min read",
      },
      {
        category: "Creativity",
        title: "The Art of Digital Storytelling",
        description:
          "Learn how to craft compelling narratives that captivate your digital audience.",
        author: "Mark Johnson",
        readTime: "6 min read",
      },
    ];
  
    return (
      <section className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Featured <span className="text-pink-500">Articles</span>
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Discover our most popular and engaging content
          </p>
  
          <div className="grid md:grid-cols-3 gap-6 ">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105"
              >
                <div className="h-40 bg-gray-700"></div>
                <div className="p-6">
                  <p className="text-cyan-400 text-sm font-semibold">
                    {article.category}
                  </p>
                  <h3 className="text-xl font-bold my-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm">{article.description}</p>
                  <div className="flex items-center mt-4">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                    <p className="ml-2 text-gray-300 text-sm">{article.author}</p>
                    <span className="ml-auto text-gray-400 text-xs">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-8">
            <button className="bg-pink-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-pink-600 transition">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    );
  }
  