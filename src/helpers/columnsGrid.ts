import { GridColDef } from "@mui/x-data-grid";

export const columnsCorreos: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Nombre",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "dni",
    headerName: "DNI",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Telefono",
    flex: 1,
  },
  {
    field: "message",
    headerName: "Mensaje",
    flex: 1,
  },
  {
    field: "terms",
    headerName: "Terminos",
    flex: 1,
  },
  {
    field: "promotions",
    headerName: "Promociones",
    flex: 1,
  },
];

export const columnsLotes: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Nombre",
    flex: 1,
  },
  {
    field: "state",
    headerName: "Estado",
    flex: 1,
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
  },
  {
    field: "adjacentAreas",
    headerName: "Areas Adyacentes",
    flex: 1,
  },
];
