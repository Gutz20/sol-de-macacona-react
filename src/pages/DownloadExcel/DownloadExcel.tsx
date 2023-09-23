import { getExcelReport } from "@/api";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DownloadExcel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function getExcel() {
      try {
        const response = await getExcelReport();

        if (response.status === 200 && response.data instanceof Blob) {
          const url = window.URL.createObjectURL(response.data);

          const a = document.createElement("a");
          a.href = url;
          a.download = "reporte";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          navigate("/");
        } else {
          console.log("La respuesta de la API no contiene un blob valido.");
        }
      } catch (error) {
        console.log("Error al descargar el archivo Excel: ", error);
      }
    }
    getExcel();
  }, [navigate]);

  // return <Navigate to="/" />;
  return (
    <div>
      <h1>Descargando</h1>
    </div>
  );
};

export default DownloadExcel;
