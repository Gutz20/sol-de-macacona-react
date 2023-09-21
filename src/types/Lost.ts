export type Models = "A" | "B";
export type Views = "PRINCIPAL" | "POSTERIOR" | "PRIMER_PISO" | "SEGUNDO_PISO";

export type stateLotes = {
  model: Models;
  view: Views;
  image: string;
  characteristics: string[];
};

export type Area = {
  name: string;
  state: string;
  area: number;
  adjacentAreas: string[];
};

export const updateImage: Record<Views, Record<Models, string>> = {
  // Vista
  PRINCIPAL: {
    A: "./CASA TIPO 1- FACHADA PRINCIPAL.jpg", // Modelo
    B: "./CASA TIPO 2- FACHADA PRINCIPAL.jpg", // Modelo
  },
  POSTERIOR: {
    A: "./CASA TIPO 1- FACHADA POSTERIOR.jpg",
    B: "./CASA TIPO 2 - FACHADA POSTERIOR.jpg",
  },
  PRIMER_PISO: {
    A: "./1er Piso Modelo A.jpg",
    B: "./1er Piso Modelo B.jpg",
  },
  SEGUNDO_PISO: {
    A: "./2do Piso Modelo A.jpg",
    B: "./2do Piso Modelo B.jpg",
  },
};

export const characteristicsData: Record<Models, string[]> = {
  A: [
    "Áreas verdes",
    "Lavandería",
    "Comedor",
    "6 dormitorios",
    "Terraza",
    "Sala",
    "Cocina",
    "Estudio",
  ],
  B: ["Áreas verdes", "Lavandería", "Comedor", "6 dormitorios", "Terraza"],
};
