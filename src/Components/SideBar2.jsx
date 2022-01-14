import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MedicalServicesTwoToneIcon from "@mui/icons-material/MedicalServicesTwoTone";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import { Link } from "react-router-dom";

export default function SideBar2() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link className="LinkSidebar" to="/pcdfranchise">
            PCD/Pharma Franchise
          </Link>,
          <Link className="LinkSidebar" to="/thirdparty">
            Third Party Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/cosmetics">
            Cosmetics Derma Franchise
          </Link>,
          <Link className="LinkSidebar" to="/ayurvedic">
            Ayurvedic PCD Franchise
          </Link>,
          <Link className="LinkSidebar" to="/heartCardiac">
            Cardiac Diabatic Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/allopathic">
            Allopathic Drug Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/entmedcine">
            ENT Medicine Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/medicine">
            Medicine Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/pharmabusiness">
            Pharma Business Opportunties
          </Link>,
          <Link className="LinkSidebar" to="/herbalAyurvedic">
            Ayurvedic Herbal Manufacturing
          </Link>,
          <Link className="LinkSidebar" to="/cardiacDiabtic">
            Critical Care Franchise
          </Link>,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <MedicalServicesTwoToneIcon />
              ) : (
                <LocalHospitalTwoToneIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* {anchor} */}
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
