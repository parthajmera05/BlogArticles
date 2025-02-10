


function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 h-20 sticky  top-0 z-50 w-full backdrop-transparent">
            <h1 className="text-2xl font-bold text-pink-500 ml-10" ><a href="http://localhost:5173/">BlogArticles</a></h1>
            <nav className="ml-20 mr-10">
                <ul className="flex gap-7">
                    <li className="text-gray-200 hover:text-pink-500"><a href="http://localhost:5173/">Home</a></li>
                    <li className="text-gray-200 hover:text-pink-500"><a href="http://localhost:5173/articles">Articles</a></li>
                    <li className="text-gray-200 hover:text-pink-500"><a href="">About</a></li>
                </ul>
            </nav>
        </div>
    )
};



export default Navbar;