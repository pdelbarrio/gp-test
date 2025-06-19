import React, { useState } from "react";
import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5;

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: pageSize,
  });

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.field}</>,
    },
  ];

  return (
    <div>
      <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[pageSize]}
        rows={People}
        columns={columns}
      />
    </div>
  );
};

export default Home;
