import { Formulario } from "@/components";
import { areasData, informationLotes } from "@/helpers";
import { Area } from "@/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const Lotes = () => {
  const [open, setOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  //TODO Falta hacer dinamico el contenido del dialog pero ya solamente es jalar del selectedArea
  const onAreaOpen = (areaName: string) => {
    const areaInfo = informationLotes.find((area) => area.name === areaName);

    setSelectedArea(areaInfo || null);
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

      <Dialog
        open={open}
        onClose={onAreaClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedArea
            ? `Información de ${selectedArea.name}`
            : "Informacion de Lote"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="flex justify-between gap-4">
              <span>
                Estado: <span className="text-green-500">Libre</span>
              </span>
              <div className="flex gap-4">
                <span className="text-red-500">Vendido</span>
                <span className="text-yellow-500">Separado</span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="bg-gray-300 text-slate-950 font-semibold h-64 flex flex-col items-center justify-center p-4 border-dashed border-yellow-500 border-2">
                <span>Lote 21</span>
                <span>Area 276.41 m²</span>
              </div>
              <div className="bg-green-300 text-slate-950 font-semibold h-64 flex flex-col items-center justify-center p-4 border-dashed border-green-500 border-2">
                <span>Lote 20</span>
                <span>Area 287.67 m² </span>
              </div>
              <div className="bg-gray-300 text-slate-950 font-semibold h-64 flex flex-col items-center justify-center p-4 border-dashed border-red-500 border-2">
                <span>Lote 19</span>
                <span>Area 286.86 m²</span>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onAreaClose}
            autoFocus
          >
            Salir
          </Button>
        </DialogActions>
      </Dialog>

      <Formulario />
    </>
  );
};

export default Lotes;
