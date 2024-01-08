import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import {
  About,
  DownloadExcel,
  Home,
  ProjectsForSale,
  Ubication,
} from "./pages";
import { Lotes } from "./pages/Lotes";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/ubication",
          element: <Ubication />,
        },
        {
          path: "/proyects",
          element: <ProjectsForSale />,
        },
        {
          path: "/lotes",
          element: <Lotes />,
        },
        {
          path: "/descargar-excel",
          element: <DownloadExcel />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
