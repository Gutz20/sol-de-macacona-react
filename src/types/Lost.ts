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
    "Área construida 112m2 por piso",
    "Lavandería",
    "Comedor",
    "Terraza",
    "Sala",
    "Cocina",
    "Estudio",
    "Área de servicio inc. SH",
    "SH. principal y de visitas",
    "02 Dormitorios con Close empotrados(2do Piso)",
    "01 SH para el segundo piso",
    "01 Dormitorio Principal inc. Close - Wclose / Baño (2do Piso)",
    "01 Sala star (2do Piso)",
  ],
  B: ["Área construida 114m2 por piso",
      "Áreas verdes",
      "Estudio",
      "Área de servicio inc. SH.", 
      "Lavandería", 
      "Comedor", 
      "Terraza",
      "SH. principal y de visitas",
      "02 Dormitorios con Close empotrados(2do Piso)",
      "01 SH para el segundo piso", 
      "01 Dormitorio Principal inc. Close - Wclose / Baño(2do Piso)",
      "01 Family Room(2do Piso)", 
    ],
};
