import { informationLotes } from "@/helpers";
import { Area } from "@/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";

type AreaInfoDialogProps = {
  open: boolean;
  onAreaClose: () => void;
  selectedArea: Area | null;
};

const AreaDialog = ({
  open,
  onAreaClose,
  selectedArea,
}: AreaInfoDialogProps) => {
  const getAdjacentAreas = () => {
    if (!selectedArea) return [];

    const { adjacentAreas } = selectedArea;

    if (!adjacentAreas || adjacentAreas.length === 0) return [selectedArea];

    return adjacentAreas.map((areaName) =>
      informationLotes.find((area) => area.name === areaName)
    );
  };

  const adjacentAreas = getAdjacentAreas();

  return (
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
        <div className="flex justify-between gap-4">
          <span>
            Estado:
            <span
              className={`${
                selectedArea?.state === "Libre"
                  ? "text-green-500"
                  : selectedArea?.state === "Separado"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {selectedArea?.state}
            </span>
          </span>
          <div className="flex gap-4">
            <span className="text-red-500">Vendido</span>
            <span className="text-yellow-500">Separado</span>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {adjacentAreas.map((area, index) => (
            <div
              key={index}
              className={`${
                area?.state === "Libre"
                  ? "bg-green-200"
                  : area?.state === "Separado"
                  ? "bg-yellow-200"
                  : "bg-red-200"
              } text-slate-950 font-semibold h-64 flex flex-col items-center justify-center p-4 border-dashed border-2 ${
                area?.state === "Libre"
                  ? "border-green-500"
                  : area?.state === "Separado"
                  ? "border-yellow-500"
                  : "border-red-500"
              }`}
            >
              <span>{area?.name}</span>
              <span>Area {area?.area} m²</span>
            </div>
          ))}
        </div>
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
  );
};

export default AreaDialog;
