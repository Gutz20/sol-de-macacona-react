import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import { About, Home, ProjectsForSale, Ubication } from "./pages";

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
              element={<About />}
            />
            <Route
              path="/ubication"
              element={<Ubication />}
            />
            <Route
              path="/proyects"
              element={<ProjectsForSale />}
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
