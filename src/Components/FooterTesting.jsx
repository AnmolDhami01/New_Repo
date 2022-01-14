import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "../static/mainlogo.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="http://tru-web.in/">
        PharmaWeb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function FooterTesting(props) {
  return (
    <>
      <div
        style={{ background: "#0c8540", paddingTop: "5px", marginTop: "25px" }}
      >
        <Container
          maxWidth="xl"
          style={{ paddingTop: "25px" }}
          component="footer"
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} lg={3}>
              <Grid container item xs={12} spacing={2} direction="column">
                <Grid item xs={6}>
                  <Link to="/">
                    <img
                      style={{ width: "180px", height: "47px" }}
                      src={mainlogo}
                      alt="mainlogo"
                      srcSet=""
                    />
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    paragraph
                    style={{ color: "white" }}
                    fontFamily="Poppins"
                  >
                    The main purpose of PharmaWeb.com is to bring together
                    entire Pharma Industry at one place and provide a platform
                    to importers, exporters, manufacturers, traders, services
                    providers, distributors, wholesalers and governmental
                    agencies to find trade opportunities and promote their
                    products and services online.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} md={3} lg={3}>
              <Grid container item xs={12} spacing={1} direction="column">
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    paragraph
                    style={{ color: "white" }}
                    fontFamily="Poppins"
                  >
                    Company
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  //   alignItems="center"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <Link style={{ color: "white" }} to="/">
                    ABOUT
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    CONTACT
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    CARRER
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    POLICY
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    TERMS & CONDITIONS
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    DISCLAMER
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    MEMBERSHIP PACKAGES
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    CANCELLATION POLICY
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} md={3} lg={3}>
              <Grid container item xs={12} spacing={2} direction="column">
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    paragraph
                    style={{ color: "white" }}
                    fontFamily="Poppins"
                  >
                    Information
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <Link style={{ color: "white" }} to="/">
                    BLOG
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    HOW TO GET MEMBERSHIP
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    PHARMA CATEGORIES
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    TOP PHARMA COMPANIES
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    ADVERTISING
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    FAQ's
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    PRESS
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    MOLECULES LIST
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Grid container item xs={12} spacing={2} direction="column">
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    paragraph
                    style={{ color: "white" }}
                    fontFamily="Poppins"
                  >
                    Legal
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <Link style={{ color: "white" }} to="/">
                    PRIVACY POLICY
                  </Link>
                  <Link style={{ color: "white" }} to="/">
                    TERMS OF USE
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography
            sx={{ mt: 5, color: "white", pb: 5 }}
            variant="body2"
            color="white"
            align="center"
          >
            {"Copyright © "}
            <Link style={{ color: "white" }} to="http://tru-web.in/">
              PharmaWeb
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </div>
    </>
  );
}
