import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Collapse from "@mui/material/Collapse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Swal from "sweetalert2";
import { Box, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Profile from "./Profile";

export default function UserButton({ handleLogout, setProgress }) {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem>
          <Profile onClick={handleClose} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
            sx={{ fontFamily: "Poppins" }}
          >
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
