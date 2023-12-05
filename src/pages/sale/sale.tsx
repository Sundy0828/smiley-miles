import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Dialog,
  styled,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export function Sale() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div">
        SALE
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="/medal.jpeg" title="medal" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Running Medal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available in Gold, Silver and Bronze
          </Typography>
        </CardContent>
        <CardActions sx={{ flex: 1, justifyContent: "space-between" }}>
          <Button size="small" onClick={handleClickOpen}>
            Learn More
          </Button>
          <Typography variant="body2">$3.00 per Medal</Typography>
        </CardActions>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Why buy
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
          <Typography gutterBottom>We buy back all unused medals.</Typography>
          <Typography gutterBottom>No shipping and handling costs.</Typography>
          <Typography gutterBottom>Ribbons included.</Typography>
          <br />
          <Typography gutterBottom>
            Send email to bonnherb@yahoo.com to order
          </Typography>
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
