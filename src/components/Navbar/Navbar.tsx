import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";
// import Logo from "../images/logo_SIN FONDO.png";

const Navbar = () => {
  return (
    <>
      <header className="absolute w-full z-10 ">
        
        <div className="container mx-auto ">
          <nav className="flex flex-wrap justify-between space-x-4 py-8 px-10 gap-3  
              max-sm:py-2">
            <Link to="/">
              <img
                src={"/logo-sin-fondo.png"}
                alt="Logo"
                className="w-80 h-40 max-sm:w-10 max-sm:h-5"
              />
            </Link>
            <div>
              {linksNavar.map(({ label, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="relative rounded-lg px-3.5 py-2 text-black font-bold hover:bg-slate-100 hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-[7px]"
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
