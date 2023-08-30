import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
