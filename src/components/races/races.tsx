import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import { randomTraderName, randomCity } from "@mui/x-data-grid-generator";
import { Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "Place", flex: 1, minWidth: 150 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 150 },
  {
    field: "bib",
    headerName: "Bib No",
    type: "number",
    flex: 1,
    minWidth: 150,
  },
  { field: "age", headerName: "Age", type: "number", flex: 1, minWidth: 150 },
  {
    field: "gender",
    headerName: "Gender",
    type: "number",
    flex: 1,
    minWidth: 150,
  },
  { field: "ageGroup", headerName: "Age Group", flex: 1, minWidth: 150 },
  { field: "time", headerName: "Total Time", flex: 1, minWidth: 150 },
  { field: "pace", headerName: "Pace", flex: 1, minWidth: 150 },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "1 Top Fin",
    time: "4:48.33",
    pace: "4:48/M",
    age: 25,
  },
  {
    id: 2,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "2 Top Fin",
    time: "4:51.33",
    pace: "4:51/M",
    age: 36,
  },
  {
    id: 3,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "3 Top Fin",
    time: "5:07.33",
    pace: "5:07/M",
    age: 19,
  },
  {
    id: 4,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "1 20-29",
    time: "5:14.33",
    pace: "5:14/M",
    age: 28,
  },
  {
    id: 5,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "2 20-29",
    time: "5:24.33",
    pace: "5:24/M",
    age: 23,
  },
  {
    id: 6,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "3 20-29",
    time: "5:27.33",
    pace: "5:27/M",
    age: 27,
  },
  {
    id: 7,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "1 16-19",
    time: "5:28.33",
    pace: "5:28/M",
    age: 18,
  },
  {
    id: 8,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "1 30-39",
    time: "5:30.33",
    pace: "5:30/M",
    age: 31,
  },
  {
    id: 9,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "4 20-29",
    time: "5:41.33",
    pace: "5:41/M",
    age: 24,
  },
  {
    id: 10,
    name: randomTraderName(),
    city: randomCity(),
    bib: Math.floor(Math.random() * 25),
    gender: "M",
    ageGroup: "2 30-39",
    time: "5:46.33",
    pace: "5:46/M",
    age: 35,
  },
];

export function Races() {
  return (
    <Box sx={{ width: 1 }}>
      <Typography gutterBottom variant="h4" component="div">
        RACES
      </Typography>
      <Box>
        <DataGrid
          columns={columns}
          rows={rows}
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
        />
      </Box>
    </Box>
  );
}
