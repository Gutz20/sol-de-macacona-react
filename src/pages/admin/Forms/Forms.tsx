import { deleteCorreoRequest, getCorreosRequest } from "@/api/form";
import { columnsCorreos } from "@/helpers/columnsGrid";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forms = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: correos, isLoading } = useQuery({
    queryFn: async () => await getCorreosRequest(),
    queryKey: ["correos"],
  });

  const { mutateAsync: deleteCatMutation } = useMutation({
    mutationFn: deleteCorreoRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["correos"] });
    },
  });

  const rowsCorreos = correos
    ? correos?.map((correo) => ({
        id: correo.id,
        name: correo.name,
        email: correo.email,
        dni: correo.dni,
        phone: correo.phone,
        message: correo.message,
        terms: correo.terms,
        promotions: correo.promotions,
      }))
    : [];

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/forms/${selectedRowIds[0]}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds !== null) {
      if (selectedRowIds.length === 1) {
        deleteCatMutation(selectedRowIds[0] as number);
        toast("Fila eliminada", {
          position: "bottom-right",
          type: "success",
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex flex-row justify-between mb-4 ">
        <h2 className="text-4xl font-bold">Correos</h2>

        {/* <div className="flex gap-4">
          <Link to="/dashboard/correos/new">
            <Button color="info" variant="contained">
              Nuevo
            </Button>
          </Link>
          <Button color="success" variant="contained">
            Guardar
          </Button>
          <Button onClick={handleEditClick} color="inherit" variant="contained">
            Editar
          </Button>
          <Button onClick={handleDeleteClick} color="error" variant="contained">
            Eliminar
          </Button>
        </div> */}
      </div>

      <div>
        <DataGrid
          rows={rowsCorreos}
          columns={columnsCorreos}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection) => {
            setSelectedRowIds(newSelection);
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Forms;
