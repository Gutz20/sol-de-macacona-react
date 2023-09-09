export type Models = "A" | "B";
export type Views = "A" | "B" | "C";

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
  A: {
    A: "./casa1.jpg", // Modelo
    B: "./casa2.jpg", // Modelo
  },
  B: {
    A: "./casa3.jpg",
    B: "./casa4.jpg",
  },
  C: {
    A: "./casa5.jpg",
    B: "./casa1.jpg",
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
