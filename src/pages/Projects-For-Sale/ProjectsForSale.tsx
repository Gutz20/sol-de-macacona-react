import Formulario from "@/components/Formulario/Formulario";
import ProyectCarrusel from "./ProyectCarrusel/ProyectCarrusel";
import Vista_A from "./ModeloA/Vista A/Vista_A";


const ProjectsForSale = () => {
  return (
    <>
      <div
        className=" bg-cover bg-fondo1 w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[250px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div
          className="w-auto text-center text-red-900 py-20 px-20 grid  absolute text-8xl font-bold drop-shadow-2xl
        max-sm:absolute max-sm:py-5 max-sm:px-5  max-sm:font-Itim max-sm:text-xl"
        >
          <h2>PROYECTOS EN</h2>
          <h2>VENTA</h2>
        </div>
      </div>
      <Vista_A />
      <ProyectCarrusel />
      <Formulario />
    </>
  );
};

export default ProjectsForSale;
