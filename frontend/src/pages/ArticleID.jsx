import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ArticleID() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching article:", error));
    }, [id]);

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <Navbar />
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                    <p className="text-gray-700 mb-4">{article.description}</p>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.markdown }}></div>
                </div>
            )}
        </div>
    );
}
