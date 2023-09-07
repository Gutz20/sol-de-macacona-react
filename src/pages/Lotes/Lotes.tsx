import { Formulario } from "@/components";

const Lotes = () => {
  return (
    <>
      <div className="container mx-auto pt-40">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-red-600 text-9xl font-bold text-center">
            Lotes Disponibles
          </h1>
          <p className="text-2xl font-bold text-center w-full my-4">
            Tu próximo capítulo comienza aquí: elige el lote que mejor cuadre
            con tu visión y construye el futuro que mereces.
          </p>
        </div>
        <img
          src="./planos-with-lines.png"
          alt="Plano"
          className="mx-auto h-full w-64"
          useMap="#mapa-imagen"
        />

        <map name="mapa-imagen">
          {/* Área 1 */}
          <area
            shape="rect"
            coords="50, 50, 150, 150"
            alt="Área 1"
            className="cursor-pointer bg-red-200"
            onClick={() => console.log("first area")}
          />
        </map>
      </div>
      <Formulario />
    </>
  );
};

export default Lotes;
