import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("http://localhost:3000/articles");
                console.log(response.data.message);

                if (response.data.message === "No Articles") {
                    setMessage("No Articles");
                } else {
                    setArticles(response.data);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setMessage("Failed to load articles");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto ">
            <Navbar />
            <h1 className="text-3xl font-bold text-center text-pink-400 my-6">
                Articles
            </h1>
            
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : message ? (
                <p className="text-center text-lg text-gray-500">{message}</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6 px-6 py-4">
                    {articles.map((article) => (
                        <div
                            key={article._id}
                            className="bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
                        >
                            <div className="h-40 bg-gray-700"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white my-2">{article.title}</h3>
                                <p className="text-gray-400 text-sm">{article.description}</p>
                                <div className="flex items-center mt-4">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                    <p className="ml-2 text-gray-300 text-sm">Unknown Author</p>
                                    <span className="ml-auto text-gray-400 text-xs">5 min read</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            
        </div>
    );
}
