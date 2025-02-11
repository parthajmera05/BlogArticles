import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddArticle() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [markdown, setMarkdown] = useState("");
    const [photo, setPhoto] = useState(""); 
    const [author, setAuthor] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        
        const article = { title, description, markdown, photo, author };
        console.log(article);

        try {
            const response = await fetch("https://blogarticlesbackend.onrender.com/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(article),
            });
            
            const data = await response.json();
            if (response.ok) {
                setMessage("🎉 Article added successfully!");

                // Clear form fields after submission
                setTitle("");
                setDescription("");
                setMarkdown("");
                setPhoto("");
                setAuthor("");

                // Redirect to articles page
                window.location.href = "/articles";
            } else {
                setMessage(`❌ Error: ${data.message}`);
            }
        } catch (error) {
            console.log("Error adding article:", error);
            setMessage("⚠️ Failed to add article");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-screen-2xl  mx-auto ">
            <Navbar />
        <div className="w-full h-screen flex flex-col items-center  p-4">
            <h1 className="text-3xl font-bold text-center text-pink-400 my-6">
                Add New Article
            </h1>
            {message && <p className="text-center text-red-400">{message}</p>}
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title Field */}
                    <div>
                        <label className="block text-gray-300">Title</label>
                        <input 
                            type="text" 
                            className="w-full bg-neutral-800 border border-gray-600 p-2 rounded focus:outline-none focus:border-pink-500" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Description Field */}
                    <div>
                        <label className="block text-gray-300">Description</label>
                        <textarea 
                            className="w-full bg-neutral-800 border border-gray-600 p-2 rounded focus:outline-none focus:border-pink-500" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Markdown Field */}
                    <div>
                        <label className="block text-gray-300">Markdown</label>
                        <textarea 
                            className="w-full bg-neutral-800 border border-gray-600 p-2 rounded focus:outline-none focus:border-pink-500" 
                            value={markdown} 
                            onChange={(e) => setMarkdown(e.target.value)} 
                            required
                        ></textarea>
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label className="block text-gray-300">Photo URL</label>
                        <input 
                            type="text" 
                            className="w-full bg-neutral-800 border border-gray-600 p-2 rounded focus:outline-none focus:border-pink-500" 
                            value={photo} 
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Enter image URL"
                        />
                    </div>

                    {/* Author Field */}
                    <div>
                        <label className="block text-gray-300">Author Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-neutral-800 border border-gray-600 p-2 rounded focus:outline-none focus:border-pink-500" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Enter author name"
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium transition"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add Article"}
                    </button>
                </form>
            </div>
            </div>
        </div>
    );
}
