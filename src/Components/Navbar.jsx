import { Button, Container, Hidden } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "../static/mainlogo.png";
import HoverLinks from "./HoverLinks";
import PersonIcon from "@mui/icons-material/Person";
import LoginTesting from "./SiginTesting";

import ContactusTesting from "./ContactusTesting";
import CreateUser from "./CreateUser";
import SiginTesting from "./SiginTesting";

export default function Navbar() {
  return (
    <>
      <div className="navDiv">
        <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
          <input type="checkbox" id="check" />
          <nav>
            <div className="icon">
              <Link to="/">
                <img
                  style={{ width: "180px", height: "47px" }}
                  src={mainlogo}
                  alt="mainlogo"
                  srcSet=""
                />
              </Link>
            </div>
            <div className="search_box">
              <Hidden smDown>
                <HoverLinks
                  heading={"Categories"}
                  text="DERMA FRANCHISE"
                  text1="HOMOPATHIC FRANCHISE"
                  text2="ALLOPATHIC FRANCHISES"
                  text3="AYURVEDIC FRANCHISE"
                />
              </Hidden>
              <input type="search" placeholder="Search here" />
              <span className="fa fa-search"></span>
            </div>
            <ol>
              <li>
                {/* <Link to="/login">
                  <Button sx={{ color: "white" }} startIcon={<PersonIcon />}>
                    Join Free
                  </Button>
                </Link> */}
                <CreateUser />
              </li>
              <li>
                {/* <Link to="/sigin">
                  <Button sx={{ color: "white" }} startIcon={<PersonIcon />}>
                    Sign In
                  </Button>
                </Link> */}
                <SiginTesting />
              </li>
              <li>
                {/* <Link to="/contactus">
                  <Button sx={{ color: "white" }} startIcon={<PersonIcon />}>
                    Post Requirment
                  </Button>
                </Link> */}
                <ContactusTesting />
              </li>
            </ol>
            <label htmlFor="check" className="bar">
              <span className="fa fa-bars" id="bars"></span>
              <span className="fa fa-times" id="times"></span>
            </label>
          </nav>
        </Container>
        {/* <section></section> */}
      </div>
    </>
  );
}
