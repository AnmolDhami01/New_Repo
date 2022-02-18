import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import { Box, fontFamily } from "@mui/system";
import React from "react";
import Caursal from "./Caursal";
import ProductCard from "./ProductCard";
import FactoryIcon from "../static/FactoryIcon.png";
import ContactusTesting from "./ContactusTesting";
import NavCat from "./NavCat";
import MaxWidthContact from "./Categories/MaxWidthContact";
import SendEnquiry from "./SendEnquiry";

export default function StartingCaursal(props) {
  return (
    <>
      <Hidden smDown>
        <NavCat />
      </Hidden>
      <Container maxWidth="xl" sx={{ pt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={5} md={12} sm={12} xs={12}>
            <Grid
              item
              container
              lg={12}
              direction="column"
              component={Paper}
              sx={{ p: 1 }}
            >
              <Grid item lg={3}>
                <Typography
                  sx={{
                    color: "#0C8540",
                    fontFamily: "Poppins",
                    fontWeight: "750",
                    pt: 2,
                  }}
                  align="left"
                  variant="h2"
                  gutterBottom
                  component="div"
                >
                  We Connect Buyers and Sellers
                </Typography>
              </Grid>

              <Grid item lg={3}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    display: { md: "flex", lg: "none", xl: "flex" },
                  }}
                  align="left"
                  variant="h6"
                  component="div"
                >
                  PharmaWeb is India's largest online B2B marketplace,
                  connecting buyers with suppliers.
                </Typography>
              </Grid>

              <Grid item lg={3}>
                <SendEnquiry />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={8} lg={7} xs={12}>
            <Caursal />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
