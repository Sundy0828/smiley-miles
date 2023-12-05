import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridEventListener,
  GridRowParams,
} from "@mui/x-data-grid";
import { rows2023 } from "./2023";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Link,
  styled,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
}));

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
  { field: "name", headerName: "Name of Event", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 150 },
  { field: "address", headerName: "Address", flex: 1, minWidth: 150 },
  { field: "state", headerName: "State", flex: 1, minWidth: 150 },
  { field: "information", headerName: "Information", flex: 1, minWidth: 150 },
  { field: "signup", headerName: "Signup Link", flex: 1, minWidth: 150 },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "time",
    headerName: "Time",
    flex: 1,
    minWidth: 150,
  },
];

export function Calendar() {
  const [modalParams, setModalParams] = useState<GridRowParams>();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    setModalParams(params);
    handleClickOpen();
  };
  return (
    <Box sx={{ width: 1 }}>
      <Typography gutterBottom variant="h4" component="div">
        CALENDAR
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
                information: false,
                signup: false,
              },
            },
          }}
        />
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Extra Info
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>Name of Event:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "right" }}>{modalParams?.row.name}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>Date:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "right" }}>{modalParams?.row.date}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>Time:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "right" }}>{modalParams?.row.time}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>Location:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "right" }}>
                {modalParams?.row.address}
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>City:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ textAlign: "right" }}
              >{`${modalParams?.row.city}, ${modalParams?.row.state}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "left" }}>Signup:</Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ textAlign: "right" }}>
                <Link href={modalParams?.row.signup}>Click Here</Link>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ textAlign: "left" }}>Information:</Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ textAlign: "left" }}>
                {modalParams?.row.information}
              </Item>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}
