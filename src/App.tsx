import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import { Home, ProjectsForSale } from "./pages";

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
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
