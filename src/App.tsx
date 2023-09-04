import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import { Home, ProjectsForSale, Ubication } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
            errorElement={<NotFound />}
          >
            <Route
              index={true}
              element={<Home />}
            />
            <Route
              path="/about"
              element={<ProjectsForSale />}
            />
            <Route
              path="/ubication"
              element={<Ubication />}
            />
            <Route
              path="/lotes"
              element={<Ubication />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
