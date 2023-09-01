import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";

const ProjectsForSale = () => {
  return (
    <>
      {/* <div className="flex justify-between h-[160px] py-4 px-10 absolute">
        <img src={Logo} alt="Logo" />
      </div> */}

      <div className="flex justify-end">
        <nav className="flex sm:justify-center space-x-4 py-8 px-10 gap-3">
          {linksNavar.map(({ label, path }) => (
            <Link
              to={path}
              className="relative rounded-lg px-3.5 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default ProjectsForSale;
