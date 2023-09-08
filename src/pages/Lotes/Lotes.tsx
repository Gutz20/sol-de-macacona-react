import { Formulario } from "@/components";
import { Popover, PopperPlacementType } from "@mui/material";
import { MouseEvent, useState } from "react";

const Lotes = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  //TODO TERMINAR EL POPOVER
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
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
          <area
            target="_blank"
            alt="Area46"
            title="Area46"
            className="cursor-pointer"
            onClick={() => handleClick("top")}
            coords="232,1642,356,1641,357,1810,232,1770"
            shape="poly"
          />
          <area
            target="_blank"
            alt="Area45"
            title="Area45"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="231,1571,356,1639"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area44"
            title="Area44"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="230,1506,357,1570"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area43"
            title="Area43"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="231,1438,356,1503"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area42"
            title="Area42"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="231,1372,356,1436"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area41"
            title="Area41"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="230,1304,355,1369"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area40"
            title="Area40"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="233,1237,355,1299"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area39"
            title="Area39"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="233,1170,356,1234"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area38"
            title="Area38"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="234,1104,355,1167"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area37"
            title="Area37"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="235,1036,357,1101"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area36"
            title="Area36"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="234,970,355,1033"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area35"
            title="Area35"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="234,903,355,966"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area34"
            title="Area34"
            className="cursor-pointer"
            onClick={() => console.log("first")}
            coords="237,834,355,900"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area33"
            title="Area33"
            className="cursor-pointer"
            onClick={() => console.log("area 33")}
            coords="236,768,356,833"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area32"
            title="Area32"
            className="cursor-pointer"
            onClick={() => console.log("area 32")}
            coords="238,701,354,764"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area31"
            title="Area31"
            className="cursor-pointer"
            onClick={() => console.log("area 31")}
            coords="238,636,353,697"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area30"
            title="Area30"
            className="cursor-pointer"
            onClick={() => console.log("area 30")}
            coords="239,567,353,633"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area29"
            title="Area29"
            className="cursor-pointer"
            onClick={() => console.log("area 29")}
            coords="239,499,354,564"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area28"
            title="Area28"
            className="cursor-pointer"
            onClick={() => console.log("area 28")}
            coords="239,434,354,496"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area27"
            title="Area27"
            className="cursor-pointer"
            onClick={() => console.log("area 27")}
            coords="240,365,353,430"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area26"
            title="Area26"
            className="cursor-pointer"
            onClick={() => console.log("area 26")}
            coords="239,297,353,361"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area25"
            title="Area25"
            className="cursor-pointer"
            onClick={() => console.log("area 25")}
            coords="241,231,353,294"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area24"
            title="Area24"
            className="cursor-pointer"
            onClick={() => console.log("area 24")}
            coords="18,173,15,15,351,94,353,229,244,229,243,193,237,171,222,156,203,147,190,147,170,157,150,173"
            shape="poly"
          />
          <area
            target="_blank"
            alt="Area23"
            title="Area23"
            className="cursor-pointer"
            onClick={() => console.log("area 23")}
            coords="18,178,149,230"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area22"
            title="Area22"
            className="cursor-pointer"
            onClick={() => console.log("area 22")}
            coords="19,235,148,295"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area21"
            title="Area21"
            className="cursor-pointer"
            onClick={() => console.log("area 21")}
            coords="148,363,17,298"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area20"
            title="Area20"
            className="cursor-pointer"
            onClick={() => console.log("area 20")}
            coords="19,365,147,430"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area19"
            title="Area19"
            className="cursor-pointer"
            onClick={() => console.log("area 19")}
            coords="16,430,148,497"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area18"
            title="Area18"
            className="cursor-pointer"
            onClick={() => console.log("area 18")}
            coords="17,498,147,564"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area17"
            title="Area17"
            className="cursor-pointer"
            onClick={() => console.log("area 17")}
            coords="17,567,146,631"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area16"
            title="Area16"
            className="cursor-pointer"
            onClick={() => console.log("area 16")}
            coords="17,632,147,698"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area15"
            title="Area15"
            className="cursor-pointer"
            onClick={() => console.log("area 15")}
            coords="17,701,147,765"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area14"
            title="Area14"
            className="cursor-pointer"
            onClick={() => console.log("area 14")}
            coords="17,767,146,831"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area13"
            title="Area13"
            className="cursor-pointer"
            onClick={() => console.log("area 13")}
            coords="17,835,146,897"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area12"
            title="Area12"
            className="cursor-pointer"
            onClick={() => console.log("area 12")}
            coords="17,901,146,964"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area11"
            title="Area11"
            className="cursor-pointer"
            onClick={() => console.log("area 11")}
            coords="17,967,144,1030"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area10"
            title="Area10"
            className="cursor-pointer"
            onClick={() => console.log("area 10")}
            coords="18,1034,143,1100"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area9"
            title="Area9"
            className="cursor-pointer"
            onClick={() => console.log("area 9")}
            coords="17,1102,145,1166"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area8"
            title="Area8"
            className="cursor-pointer"
            onClick={() => console.log("area 8")}
            coords="16,1168,145,1232"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area7"
            title="Area7"
            className="cursor-pointer"
            onClick={() => console.log("area 7")}
            coords="17,1235,144,1300"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area6"
            title="Area6"
            className="cursor-pointer"
            onClick={() => console.log("area 6")}
            coords="17,1303,143,1367"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area5"
            title="Area5"
            className="cursor-pointer"
            onClick={() => console.log("area 5")}
            coords="17,1369,143,1432"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area4"
            title="Area4"
            className="cursor-pointer"
            onClick={() => console.log("area 4")}
            coords="17,1437,141,1501"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area3"
            title="Area3"
            className="cursor-pointer"
            onClick={() => console.log("area 3")}
            coords="18,1506,141,1570"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area2"
            title="Area2"
            className="cursor-pointer"
            onClick={() => console.log("area 2")}
            coords="18,1573,140,1630"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Area1"
            title="Area1"
            className="cursor-pointer"
            onClick={() => console.log("area 1")}
            coords="17,1635,19,1703,137,1739,138,1635"
            shape="poly"
          />
        </map>
      </div>

      <Formulario />
    </>
  );
};

export default Lotes;
