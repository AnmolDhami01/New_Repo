import { Button, Container, Hidden } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mainlogo from "../static/mainlogo.png";
import HoverLinks from "./HoverLinks";
import PersonIcon from "@mui/icons-material/Person";
import LoginTesting from "./SiginTesting";

import ContactusTesting from "./ContactusTesting";
import CreateUser from "./CreateUser";
import SiginTesting from "./SiginTesting";
import SiginTesting1 from "./SiginTesting1";
import LogoutIcon from "@mui/icons-material/Logout";
import Swal from "sweetalert2";
import LoadingBar from "react-top-loading-bar";
import UserButton from "./UserButton";
import Profile from "./Profile";
export default function Navbar({ setProgress }) {
  const handleLogout = async (params) => {
    localStorage.removeItem("token");
    // navigate.push("/");
    await navigate("../", { replace: true });
    await Swal.fire({
      title: "Logged Out!",
      text: "Logged Out Succesfully!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
    });
  };
  let location = useLocation();
  let navigate = useNavigate();
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
              {/* <Hidden smDown>
                <HoverLinks
                  heading={"Categories"}
                  text="PCD Pharma FRANCHISE"
                  text1="Third Party Manufacturing"
                  text2="Cosmetics Derma FRANCHISES"
                  text3="Ayurvedic PCD FRANCHISE"
                  text4="Cardiac Diabetic Manufacturing"
                  text5="Allopathic Drug Manufacturing"
                  text6="Ent Medicine Manufacturing"
                  text7="Ayurvedic Herbal Manufacturing"
                  text8="Pediatric Range Franchise"
                  text9="Critical Care  Franchise"
                  text10="Medicine Manufacturing Companies"
                />
              </Hidden> */}
              <input type="search" placeholder="Search here" />
              <span className="fa fa-search"></span>
            </div>
            <ol>
              {!localStorage.getItem("token") ? (
                <>
                  <li>
                    <CreateUser setProgress={setProgress} />
                  </li>
                  <li>
                    <SiginTesting1 setProgress={setProgress} />
                  </li>
                  <li>
                    <ContactusTesting setProgress={setProgress} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <ContactusTesting setProgress={setProgress} />
                  </li>
                  <li>
                    {/* <Button
                      sx={{
                        color: "white",
                        borderColor: "white",
                      }}
                      variant="outlined"
                      onClick={handleLogout}
                      endIcon={<LogoutIcon />}
                    >
                      Logout
                    </Button> */}
                    <UserButton
                      handleLogout={handleLogout}
                      setProgress={setProgress}
                    />
                  </li>
                </>
              )}
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
