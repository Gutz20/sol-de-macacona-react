import { getLotesRequest } from "@/api/lotes";
import { Formulario } from "@/components";
import { areasData } from "@/helpers";
import { Area } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AreaDialog } from ".";

const Lotes = () => {
  const [open, setOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const { data: informationLotes } = useQuery({
    queryFn: async () => await getLotesRequest(),
    queryKey: ["lotesInformation"],
  });

  const onAreaOpen = (areaName: string) => {
    const areaInfo = informationLotes?.find((area) => area.name === areaName);
    setSelectedArea(areaInfo ?? null);
    setOpen(true);
  };

  const onAreaClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container mx-auto pt-44 max-sm:pt-20 ">
        <div className="flex flex-col items-center justify-center gap-4 bg-orange-300 bg-opacity-70 max-sm:mx-6 font-Itim">
          <h1 className="text-red-400 text-6xl font-bold text-center my-10 max-sm:text-4xl max-sm:my-1 max-sm:mt-6">
            Lotes Disponibles
          </h1>
          <p className="text-2xl font-bold text-center w-[80%] my-4 mb-14 max-sm:text-lg max-sm:mx-3">
            Tu próximo capítulo comienza aquí: elige el lote que mejor cuadre
            con tu visión y construye el futuro que mereces.
          </p>
        </div>
        <p className="ml-6 mb-4">Revisa el estado de cada lote dando click*</p>

        <div className="relative">
          <div className="flex justify-between relative">
          <div
              className="card bg-gradient-to-br from-green-300 to-green-600 p-6 ml-0 mr-8 mt-40 rounded-lg shadow-2xl mx-6 font-Inter w-[100%] max-sm:hidden"
              style={{ height: "fit-content", position: "sticky", top: "20px" }}
            >
              <span className="text-white font-bold text-lg">
                Construye tus Sueños en Familia
              </span>
              <p className="text-white mt-3 text-justify">
                Un lote es más que solo tierra; es el lienzo en blanco para
                construir los sueños de tu familia. Imagina un espacio donde
                cada rincón refleje tus deseos, desde la acogedora sala de estar
                hasta el jardín donde los niños corren libres. Comprar un lote
                es la oportunidad de dar vida a tus visiones y crear recuerdos
                duraderos en el hogar perfecto.
              </p>
              <img src="./padre_paseo.png" alt="" />
            </div>
            <img
              src="./planosol.png"
              alt="Plano"
              useMap="#mapa-imagen"
              className="mx-auto relative my-12 max-sm:my-10 max-sm:mx-2 max-sm:h-[3000px] max-sm:w-[430px]"
            />
             <div
              className="card bg-gradient-to-br  from-green-400 to-green-700 p-6 ml-8 mr-0 mt-40 rounded-lg shadow-2xl mx-6 font-Inter w-[100%] max-sm:hidden"
              style={{ height: "fit-content", position: "sticky", top: "20px" }}
            >
              <span className="text-white font-bold  text-lg">
                Tu Espacio de Calidad y Libertad
              </span>
              <p className="text-white mt-3 text-justify">
                Sumérgete en la serenidad de "Sol de Maconacona", donde cada
                rincón es más que un simple espacio, es la promesa de momentos
                familiares inolvidables. Este enclave excepcional no solo ofrece
                la libertad de diseñar tu hogar ideal, sino también la
                oportunidad de compartir momentos de calidad bajo el cálido sol.
                Imagina risas en el jardín, cenas al aire libre y memorias que
                perdurarán para siempre.
              </p>
              <img src="./quality-time.svg" alt="" />
            </div>
            <div className="mx-auto">
              {areasData.map((area) => {
                const areaInfo = informationLotes?.find(
                  (info) => info.name === area.id
                );
                const statusText = areaInfo ? areaInfo.state : "Desconocido";
                const colorStatusText =
                  areaInfo?.state === "Libre"
                    ? "green"
                    : areaInfo?.state === "Separado"
                    ? "yellow"
                    : areaInfo?.state === "Vendido"
                    ? "red"
                    : "black";

                const coordsArray = area.coords
                  .split(",")
                  .map((coord) => parseInt(coord));
                const top =
                  Math.min(
                    ...coordsArray.filter((_, index) => index % 2 === 1)
                  ) + 100;
                const left =
                  Math.min(
                    ...coordsArray.filter((_, index) => index % 2 === 0)
                  ) - 20;

                return (
                  <div
                    key={area.id}
                    className={`absolute text-center max-sm:w-[120px] sm:w-[1200px]`}
                    style={{ top: `${top}px`, left: `${left}px` }}
                  >
                    <p
                      className={`text-${colorStatusText}-500 font-bold `}
                    >{`${statusText}`}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <map name="mapa-imagen">
          {areasData.map((area) => (
            <area
              key={area.id}
              target="_blank"
              alt={area.id}
              title={area.id}
              className="cursor-pointer"
              onClick={() => onAreaOpen(area.id)}
              coords={area.coords}
              shape={area.shape}
            />
          ))}
        </map>
      </div>

      <AreaDialog
        open={open}
        onAreaClose={onAreaClose}
        selectedArea={selectedArea}
      />

      <Formulario />
    </>
  );
};

export default Lotes;
