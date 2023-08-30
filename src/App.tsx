import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import { About, Home, ProjectsForSale } from "./pages";

function App() {

  const user = "asd";

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
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
