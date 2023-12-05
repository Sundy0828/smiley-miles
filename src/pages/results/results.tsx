import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridEventListener,
} from "@mui/x-data-grid";
import { rows2023 } from "./2023";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
  { field: "race", headerName: "Race", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 150 },
  { field: "state", headerName: "State", flex: 1, minWidth: 150 },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    minWidth: 150,
  },
];

export function Results() {
  const navigate = useNavigate();
  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    navigate("2023/race-name");
  };
  return (
    <Box sx={{ width: 1 }}>
      <Typography gutterBottom variant="h4" component="div">
        RESULTS
      </Typography>
      <Box>
        <DataGrid
          onRowClick={handleEvent}
          columns={columns}
          rows={rows2023}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableColumnMenu
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              csvOptions: { disableToolbarButton: true },
              printOptions: { disableToolbarButton: true },
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 250 },
            },
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                id: false,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
