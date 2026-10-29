import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import BiographyPage from "./pages/BiographyPage";
import BlogPage from "./pages/BlogPage";
import KapetanidisPage from "./pages/KapetanidisPage";
import ContactPage from "./pages/ContactPage";
import BlogPostPage from "./pages/BlogPostPage";
import N_BiographyPage from "./pages/N_BiographyPage";
import PaperPage from "./pages/PaperPage";
import PaperPage1 from "./pages/PaperPage1";
import PaperPage2 from "./pages/PaperPage2";
import PaperPage3 from "./pages/PaperPage3";
import PaperPage4 from "./pages/PaperPage4";
import PaperPage5 from "./pages/PaperPage5";
import PaperPage6 from "./pages/PaperPage6";
import PhotosNKPage from "./pages/PhotosNKPage";
import PhotosPage from "./pages/PhotosPage";
import RelicPage from "./pages/RelicPage";
import HistoryPage from "./pages/HistoryPage";
import ActionPage from "./pages/ActionPage";
import ArchitecturePage from "./pages/ArchitecturePage";
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
        path: "n_biography",
        element: <N_BiographyPage />,
      },
      {
        path: "paper",
        element: <PaperPage />,
      },
      {
        path: "paper1",
        element: <PaperPage1 />,
      },
      {
        path: "paper2",
        element: <PaperPage2 />,
      },
      {
        path: "paper3",
        element: <PaperPage3 />,
      },
      {
        path: "paper4",
        element: <PaperPage4 />,
      },
      {
        path: "paper5",
        element: <PaperPage5 />,
      },
      {
        path: "paper6",
        element: <PaperPage6 />,
      },
      {
        path: "photos",
        element: <PhotosPage />,
      },
      {
        path: "photosNK",
        element: <PhotosNKPage />,
      },
      {
        path: "relic",
        element: <RelicPage />,
      },
      {
        path: "architecture",
        element: <ArchitecturePage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "action",
        element: <ActionPage />,
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
