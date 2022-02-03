import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import CallIcon from "@mui/icons-material/Call";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import FormGroupPage from "./FormGroupPage";
import StartingCaursal from "../StartingCaursal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MaxWidthContact() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    e.preventDefault();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        size="small"
        variant="contained"
        sx={{ backgroundColor: "#0c8540" }}
        startIcon={<CallIcon />}
      >
        Contact
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#0c8540" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Post Your Requirment
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ pt: 2 }}>
          <FormGroupPage onClick={handleClose} />
        </Box>
      </Dialog>
    </div>
  );
}
