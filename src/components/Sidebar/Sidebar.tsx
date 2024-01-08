import { useAuthStore } from "@/store";
import { Fab } from "@mui/material";
import { useState } from "react";
import {
  RiBarChart2Line,
  RiCloseLine,
  RiLogoutCircleRLine,
  RiMenu3Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondaryBackColor2 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all `}
      >
        <div>
          <div className="flex flex-col items-center justify-center mb-2">
            <img
              src="/logo-sin-fondo.png"
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />

            <h1 className="font-bold text-3xl text-white">Sol de Macacona</h1>
          </div>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiBarChart2Line className="text-green-300" /> Correos
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/lotes"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiBarChart2Line className="text-green-300" /> Lotes
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
            onClick={onLogout}
          >
            <RiLogoutCircleRLine className="text-green-300" /> Cerrar Sesion
          </Link>
        </nav>
      </div>
      <div className="xl:hidden fixed bottom-4 right-4 text-black rounded-full z-50">
        <Fab
          onClick={() => setShowMenu(!showMenu)}
          color="success"
          size="medium"
          aria-label="add"
        >
          {showMenu ? (
            <RiCloseLine className="text-lg" />
          ) : (
            <RiMenu3Line className="text-lg" />
          )}
        </Fab>
      </div>
    </>
  );
};

export default Sidebar;
