import { Formulario } from "@/components";
import { HomeCarrusel } from ".";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-fondo1 w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[250px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div
          className="w-auto text-center bg-white text-orange-950 py-20 px-20 grid opacity-60 absolute text-5xl font-Itim drop-shadow-2xl
        max-sm:absolute max-sm:py-5 max-sm:px-5 max-sm:opacity-60 max-sm:font-Itim max-sm:text-xl"
        >
          <h2>Descubre el Placer de vivir</h2>
          <h2> en el entorno perfecto</h2>
        </div>
      </div>
      <div className="bg-amber-50 py-16 max-sm:py-4">
        <div
          className="container mx-auto flex justify-center gap-4 
                 max-sm:container max-sm:mx-auto  max-sm:flex max-sm:justify-center max-sm:gap-1"
        >
          <div
            className="lg:mx-40 mx-20 flex gap-4 
          max-sm:flex-col max-sm:gap-4 max-sm:mx-10 max-sm:items-center max-lg:flex-col"
          >
            <img
              className="bg-cover h-76 w-50 max-sm:h-[220px] max-sm:w-76"
              src="./family-home-section.svg"
              alt="familia"
            ></img>
            <div className="inline-block">
              <h1
                className=" inline-block font-Itim text-4xl text-yellow-600 mb-4
                  max-sm:text-xl max-sm:mb-2 max-sm:inline-block"
              >
                Explora Innovadores Espacios<br></br>
                Residenciales en Ica para Tu Nuevo <br></br>
                Hogar Familiar
              </h1>
              <div className="w-full bg-gray-400 h-[0.5px] my-2"></div>
              <p
                className="font-Itim text-xl w-50 text-gray-500
                max-sm:text-xs max-sm:mb-1 max-sm:inline-block max-sm:mt-2"
              >
                Explora los conjuntos residenciales más vanguardistas en Ica,
                brindando una variedad excepcional de casas y departamentos en
                venta para encontrar el lugar perfecto donde tu familia podrá
                establecer su nuevo hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeCarrusel />
      <div
        className="bg-cover bg-atras h-[500px] bg-center relative flex py-10
                      max-sm:h-[350px]"
      >
        <div className="bg-cover bg-Verde-0 w-96 h-44 static max-sm:bg-cover max-sm:w-40 max-sm:h-[5rem] ">
          <div className="font-Itim text-black my-8 mx-10 text-xl max-sm:my-3 max-sm:mx-2 max-sm:text-xs">
            <p>
              Cada Lote cuenta con un area con piscina y area verde para la
              familia
            </p>
          </div>
        </div>
      </div>
      <Formulario />
    </>
  );
};

export default Home;
