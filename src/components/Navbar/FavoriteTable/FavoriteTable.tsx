import type { Person } from "@/models";
import { removeFavorite } from "@/redux/states";
import type { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: pageSize,
  });

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <Delete />
            </IconButton>
          }
        </>
      ),
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
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
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
      rows={stateFavorites}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
