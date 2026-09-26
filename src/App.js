import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import BiographyPage from "./pages/BiographyPage";
import BlogPage from "./pages/BlogPage";
import KapetanidisPage from "./pages/KapetanidisPage";
import ContactPage from "./pages/ContactPage";
import BlogPostPage from "./pages/BlogPostPage";
import RootLayout from "./components/Global/RootLayout";
import ErrorPage from "./components/Global/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "book",
        element: <BookPage />,
      },
      {
        path: "biography",
        element: <BiographyPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <BlogPostPage />,
      },
      {
        path: "kapetanidis",
        element: <KapetanidisPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
