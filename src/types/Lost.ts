export type Models = "A" | "B";
export type Views = "A" | "B" | "C";

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
