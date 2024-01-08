import { Formulario } from "@/components";
import { areasData, informationLotes } from "@/helpers";
import { Area } from "@/types";
import { useState } from "react";
import { AreaDialog } from ".";

const Lotes = () => {
  const [open, setOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const onAreaOpen = (areaName: string) => {
    const areaInfo = informationLotes.find((area) => area.name === areaName);
    setSelectedArea(areaInfo ?? null);
    setOpen(true);
  };

  const onAreaClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container mx-auto pt-44 max-sm:pt-20">
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

        <div>
          <div className="flex justify-between relative">
            <div
              className="card bg-gradient-to-br from-green-300 to-green-600 p-6 ml-0 mr-10 mt-40 rounded-lg shadow-2xl mx-6 font-Inter w-[100%]"
              style={{ height: "fit-content", position: "sticky", top: "20px" }}
            >
              <span className="text-white font-bold text-lg">
                Descubre el Lote Verde
              </span>
              <p className="text-white mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img src="./padre_paseo.png" alt="" />
            </div>
            <img
              src="./planosol.png"
              alt="Plano"
              useMap="#mapa-imagen"
              className="mx-auto relative my-12 max-sm:my-10 max-sm:mx-9"
            />
            <div
              className="card bg-gradient-to-br  from-green-400 to-green-700 p-6 ml-10 mr-0 mt-40 rounded-lg shadow-2xl mx-6 font-Inter  w-[100%]"
              style={{ height: "fit-content", position: "sticky", top: "20px" }}
            >
              <span className="text-white font-bold  text-lg">
                Explora el Lote Amarillo
              </span>
              <p className="text-white mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="mx-auto">
              {areasData.map((area) => {
                const areaInfo = informationLotes.find(
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
                    className={`absolute text-center max-sm:w-[200px] sm:w-[1200px]`}
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
