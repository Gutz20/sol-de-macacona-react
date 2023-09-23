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
        <div className="flex flex-col items-center justify-center gap-4 bg-orange-300 bg-opacity-70 max-sm:mx-6 font-Itim  ">
          <h1 className="text-red-400 text-6xl font-bold  text-center my-10 max-sm:text-4xl max-sm:my-1 max-sm:mt-6">
            Lotes Disponibles
          </h1>
          <p className="text-2xl font-bold text-center w-[80%] my-4 mb-14 max-sm:text-lg max-sm:mx-3">
            Tu próximo capítulo comienza aquí: elige el lote que mejor cuadre
            con tu visión y construye el futuro que mereces.
          </p>
        </div>
        <p className="">Revisa el estado de cada lote dando click*</p>
        <img
          src="./planos-with-lines.png"
          alt="Plano"
          useMap="#mapa-imagen"
          className="mx-auto my-12 max-sm:my-10 max-sm:mx-9"
        />

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
