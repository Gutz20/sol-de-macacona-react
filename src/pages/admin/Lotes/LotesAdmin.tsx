import { getLotesRequest } from "@/api/lotes";
import { columnsLotes } from "@/helpers/columnsGrid";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LotesAdmin = () => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: lotes } = useQuery({
    queryFn: async () => await getLotesRequest(),
    queryKey: ["lotes"],
  });

  // const { mutateAsync: deleteCatMutation } = useMutation({
  //   mutationFn: deleteLoteRequest,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["lotes"] });
  //   },
  // });

  const rowsLotes = lotes
    ? lotes?.map((lote) => ({
        id: lote.id,
        name: lote.name,
        state: lote.state,
        area: lote.area,
        adjacentAreas: lote.adjacentAreas,
      }))
    : [];

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/lotes/${selectedRowIds[0]}`);
    }
  };

  // const handleDeleteClick = () => {
  //   if (selectedRowIds !== null) {
  //     if (selectedRowIds.length === 1) {
  //       deleteCatMutation(selectedRowIds[0] as number);
  //       toast("Fila eliminada", {
  //         position: "bottom-right",
  //         type: "success",
  //       });
  //     }
  //   }
  // };

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex flex-row justify-between mb-4 ">
        <h2 className="text-4xl font-bold">Lotes</h2>
        <div className="flex gap-4">
          <Button onClick={handleEditClick} color="inherit" variant="contained">
            Editar
          </Button>
        </div>
      </div>

      <div>
        <DataGrid
          rows={rowsLotes}
          columns={columnsLotes}
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

export default LotesAdmin;
