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
import { ProtectedRoute } from "./components";
import { AdminLayout } from "./components/AdminLayout";
import { useAuthStore } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Forms } from "./pages/admin";
import { Login } from "./pages/auth";
import LotesAdmin from "./pages/admin/Lotes/LotesAdmin";
import FormsActions from "./pages/admin/Forms/components/FormsActions";
import LotesActions from "./pages/admin/Lotes/components/LotesActions";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const queryClient = new QueryClient();

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
    {
      path: "/login-admin",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isAllowed={isAuth}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Forms />,
        },
        { 
          path: "/dashboard/correos/new",
          element: <FormsActions />,
        },
        {
          path: "/dashboard/correos/:id",
          element: <FormsActions />,
        },
        {
          path: "/dashboard/lotes",
          element: <LotesAdmin />,
        },
        {
          path: "/dashboard/lotes/new",
          element: <LotesActions />,
        },
        {
          path: "/dashboard/lotes/:id",
          element: <LotesActions />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
