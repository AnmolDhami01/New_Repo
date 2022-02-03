import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Link } from "react-router-dom";

export default function HoveredLinks(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "350px",
        maxWidth: 400,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        // maxHeight: 300,
        color: "#0c8540",
        "& ul": { padding: 0 },
        "& Icon": { color: "#0c8540" },
      }}
      subheader={<li />}
    >
      <Link style={{ textDecoration: "none", color: "#0c8540" }} to="/company">
        <ListItemButton>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text1} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text2} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text3} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text4} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text5} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text6} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text7} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text8} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text9} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "#0c8540" }} />
          </ListItemIcon>
          <ListItemText primary={props.text10} />
        </ListItemButton>
      </Link>
    </List>
  );
}
