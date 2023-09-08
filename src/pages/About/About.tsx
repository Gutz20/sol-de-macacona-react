import { Formulario } from "@/components";
import { Avatar } from "@mui/material";

const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-fondo1 w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[250px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div className="bg-white mx-96 text-orange-950 p-10 opacity-60 absolute text-5xl font-Itim text-center drop-shadow-2xl max-sm:absolute max-sm:py-5 max-sm:px-5 max-sm:opacity-60 max-sm:font-Itim max-sm:text-xl flex flex-col gap-8 max-md:mx-32 max-sm:mx-8 max-sm:gap-2">
          <h2 className="md:text-4xl">¿Quiénes somos?</h2>
          <p className="text-2xl md:text-xl max-sm:text-xs">
            Somos el equipo detrás de Sol de Macacona, un grupo de profesionales
            altamente capacitados en el sector inmobiliario. Nuestra dedicación
            se centra en descubrir, desarrollar y promover los proyectos más
            sobresalientes a lo largo del país.
          </p>
        </div>
      </div>
      <div className="container mx-auto relative flex justify-center">
        {/* Mision | Vision */}
        <div className="bg-slate-950 text-white p-8 flex gap-4 w-[850px] mx-auto absolute top-1/2 transform -translate-y-1/2 drop-shadow-xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">Misión</h2>
            <span className="font-normal text-xl text-center">
              Proporcionar soluciones inmobiliarias de primera categoría a
              nuestros clientes y socios inversionistas, asegurando diseños
              arquitectónicos innovadores, ambientes contemporáneos y un enfoque
              en la sostenibilidad ambiental.
            </span>
          </div>
          <div className="w-2 bg-white"></div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">Visión</h2>
            <span className="font-normal text-xl text-center">
              Alcanzar el estatus de la empresa inmobiliaria líder en Perú, a
              través de la creación de proyectos que revolucionen su entorno y
              promuevan la preservación del medio ambiente, consolidando así
              nuestra distinguida reputación.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-fondoAboutCenter h-screen mt-12 bg-cover"></div>
      <div className="my-4 flex flex-col gap-4">
        <h3 className="text-center font-bold text-3xl">Valores</h3>
        <div className="flex items-center justify-center gap-8">
          <div className="hover:cursor-pointer">
            <img
              src="./img-valor-1.png"
              alt="BG"
              className="rounded-md"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="./img-valor-1.png"
              alt="BG"
              className="rounded-md"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="./img-valor-1.png"
              alt="BG"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-4">
          <h3 className="font-bold text-3xl ">Nuestro Equipo</h3>
          <div className="flex gap-20">
            <div className="flex flex-col items-center justify-center">
              <Avatar
                alt="gerente"
                sx={{ width: 80, height: 80 }}
                src="https://reqres.in/img/faces/6-image.jpg"
              />
              <span className="text-lg font-semibold">Enrique Zapata</span>
              <span className="text-lg font-semibold">Gerente General</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Avatar
                alt="gerente"
                sx={{ width: 80, height: 80 }}
                src="https://reqres.in/img/faces/8-image.jpg"
              />
              <span className="text-lg font-semibold">Enrique Zapata</span>
              <span className="text-lg font-semibold">Gerente General</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Avatar
                alt="gerente"
                sx={{ width: 80, height: 80 }}
                src="https://reqres.in/img/faces/9-image.jpg"
              />
              <span className="text-lg font-semibold">Enrique Zapata</span>
              <span className="text-lg font-semibold">Gerente General</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Avatar
                alt="gerente"
                sx={{ width: 80, height: 80 }}
                src="https://reqres.in/img/faces/10-image.jpg"
              />
              <span className="text-lg font-semibold">Enrique Zapata</span>
              <span className="text-lg font-semibold">Gerente General</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Avatar
                alt="gerente"
                sx={{ width: 80, height: 80 }}
                src="https://reqres.in/img/faces/11-image.jpg"
              />
              <span className="text-lg font-semibold">Enrique Zapata</span>
              <span className="text-lg font-semibold">Gerente General</span>
            </div>
          </div>
        </div>
      </div>
      <Formulario />
    </>
  );
};

export default About;
