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
      field: "actions",
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      pageSizeOptions={[pageSize]}
      rows={People}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
