import { Carrusel, Formulario } from "@/components";
import { slidesHome } from "@/helpers";

const Home = () => {
  return (
    <>
      <div className="bg-cover w-full h-[100] bg-center relative flex items-center justify-center max-sm:w-full max-sm:bg-cover max-sm:h-[250px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center">
        <img
          src="/primera_impresion.jpg"
          className="w-full h-full object-cover"
          alt="Primera impresión"
        />
        <div className="w-auto mb-4 ml-2 text-center bg-white text-orange-950 py-2 px-4 grid opacity-60 absolute text-[120%] font-Itim drop-shadow-2xl max-sm:absolute max-sm:py-2 max-sm:px-2 max-sm:opacity-50 max-sm:font-Itim max-sm:text-xl right-28 max-sm:right-auto">
          <h2 className="text-[1.5em] max-sm:text-xs">
            H.O. Constructores E.I.R.L
          </h2>
          <h2 className="text-[1.2em] max-sm:text-xs">
            -------------------------------
          </h2>
          <h2 className="text-[1.5em] max-sm:text-xs">
            Descubre el Placer de vivir
          </h2>
          <h2 className="text-[1.5em] max-sm:text-xs">
            en el entorno perfecto
          </h2>
        </div>
      </div>

      <div className="bg-white py-8 max-sm:py-4">
        <div className="container mx-auto flex justify-center gap-4 max-sm:flex-col">
          <div className="lg:mx-20 mx-4 flex flex-col gap-4 max-sm:flex-col max-sm:gap-4 max-sm:mx-2 max-sm:items-center max-lg:flex-col">
            <img
              className="bg-cover h-52 w-full max-sm:h-[220px] max-sm:w-full max-lg:h-64"
              src="./family-home-section.svg"
              alt="Familia"
            />
            <div className="text-center">
              <h1 className="font-Itim text-2xl text-yellow-600 mb-2 max-sm:text-xl max-sm:mb-2 max-lg:text-3xl">
                Explora Innovadores Espacios Residenciales en Ica para Tu Nuevo
                Hogar Familiar
              </h1>
              <div className="w-16 bg-gray-400 h-[0.5px] my-2 mx-auto"></div>
              <p className="font-Itim text-sm text-gray-500 max-sm:text-xs max-sm:mb-2">
                Explora los conjuntos residenciales más vanguardistas en Ica,
                brindando una variedad excepcional de casas y departamentos en
                venta para encontrar el lugar perfecto donde tu familia podrá
                establecer su nuevo hogar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-neutral-700 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <Carrusel slides={slidesHome} />
            <div className="flex gap-4 justify-center max-sm:flex-col">
              <div className="w-[0.5px] bg-white max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-3 max-sm:mt-2"></div>
              <div className="text-slate-50 text-center max-sm:w-full">
                <h3 className="text-[200%] font-bold max-sm:text-xs max-sm:font-bold">
                  Cada lote ofrece un amplio espacio perfecto para tu familia.
                </h3>
              </div>
              <div className="w-[0.5px] bg-white max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-3 max-sm:mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cover bg-atras h-[500px] bg-center relative flex py-8 max-sm:h-[350px]">
        <div className="bg-cover bg-Verde-0 w-64 h-32 static max-sm:w-full max-sm:h-[5rem]">
          <div className="font-Itim text-black my-2 mx-4 text-sm max-sm:my-1 max-sm:mx-2 max-sm:text-xs">
            <p>
              Cada lote te brinda la libertad de disfrutar de un amplio espacio
              verde para tu familia, y si lo deseas, también podemos incorporar
              una piscina a medida de tus gustos y necesidades.
            </p>
          </div>
        </div>
      </div>

      <Formulario />
    </>
  );
};

export default Home;
