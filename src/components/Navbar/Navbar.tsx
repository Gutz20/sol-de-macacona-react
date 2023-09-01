import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";
import Logo from "../images/logo_SIN FONDO.png";

const Navbar = () => {
  return (
    <>
      <header className="absolute w-full z-10">
        <div className="container mx-auto">
          <nav className="flex justify-between space-x-4 py-8 px-10 gap-3">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-40 h-20"
              />
            </Link>
            <div>
              {linksNavar.map(({ label, path }) => (
                <Link
                  to={path}
                  className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:bg-slate-100 hover:text-slate-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
