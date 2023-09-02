import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";
// import Logo from "../images/logo_SIN FONDO.png";

const Navbar = () => {
  return (
    <>
      {/* <div className="md:flex md:justify-between md:h-[160px] py-4 px-10 absolute">
        <img
          className="w-1/4 md:w-auto lg:w-auto"
          src={Logo}
          alt="Logo"
        />
      </div>

      <div className="flex justify-end md:ml-auto md:mr-4">
        <div className="relative group">
          <button className="block sm:hidden relative rounded-lg px-2 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900 focus:outline-none">
            Menú
          </button>
          <nav className="hidden sm:flex flex-wrap space-x-4 py-4 md:py-8 px-4 md:px-10 gap-3 absolute right-0 top-12 bg-white border border-gray-300 rounded-lg z-10 transition-all duration-300 transform scale-y-0 opacity-0 origin-top">
            {linksNavar.map(({ label, path }) => (
              <Link
                to={path}
                className="block px-2 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div> */}
      <header className="absolute w-full z-10 ">
        
        <div className="container mx-auto ">
          <nav className="flex flex-wrap justify-between space-x-4 py-8 px-10 gap-3 ">
            <Link to="/">
              <img
                src={"/logo-sin-fondo.png"}
                alt="Logo"
                className="w-40 h-20"
              />
            </Link>
            <div>
              {linksNavar.map(({ label, path }) => (
                <Link
                  to={path}
                  className="relative rounded-lg px-3.5 py-2 text-black font-bold hover:bg-slate-100 hover:text-slate-900"
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
