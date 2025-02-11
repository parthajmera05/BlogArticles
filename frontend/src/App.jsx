
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlesID from "./pages/ArticleID";
import AddArticles from "./pages/AddArticle";
import {createBrowserRouter,RouterProvider} from "react-router-dom";


function App() {
  const Router = createBrowserRouter([
    {
        path: "https://blog-articles-sigma.vercel.app/",
        element: <Home />,
    },
    {
        path: "https://blog-articles-sigma.vercel.app/articles",
        element: <Articles />,
    },
    {
        path: "https://blog-articles-sigma.vercel.app/articles/:id",
        element: <ArticlesID />,
    },
    {
        path:"https://blog-articles-sigma.vercel.app/articles/add",
      element: <AddArticles />,
    },
    
]);
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
