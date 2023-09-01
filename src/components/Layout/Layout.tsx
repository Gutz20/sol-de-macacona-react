import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
