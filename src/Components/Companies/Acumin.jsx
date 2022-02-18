import React from "react";
import FormGroupPage from "../Categories/FormGroupPage";
import ComapnyCarousel from "../ComapnyCarousel";
import Caursal from "../Caursal";
import ProductCarousel from "./ProductCarousel";
import { Box } from "@mui/system";
import DealIn from "./DealIn";
import { makeStyles } from "@mui/styles";
import CaursalCompany from "./CaursalCompany";
import { Container, Grid, Typography } from "@mui/material";
import { AcuminPhotos } from "./data";
import ProductMultiCarousel from "./ProductMultiCarousel";
export default function Acumin() {
  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <CaursalCompany />
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormGroupPage />
          </Grid>
        </Grid>

        <Box sx={{ py: 5 }} display={{ xs: "none", md: "block" }}>
          <Box sx={{ backgroundColor: "rgb(218, 221, 226)", pb: 3 }}>
            <Typography
              sx={{ color: "#0c8540", fontWeight: "800", pt: 2 }}
              align="center"
              variant="h4"
              component="div"
            >
              Our Products
            </Typography>
            <ProductMultiCarousel
              count={5}
              styles={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                marginBottom: "10px",
              }}
              company={AcuminPhotos}
            />
          </Box>
        </Box>

        <Box sx={{ py: 5 }} display={{ xs: "block", md: "none" }}>
          <Box sx={{ backgroundColor: "rgb(218, 221, 226)", pb: 3 }}>
            <Typography
              sx={{ color: "#0c8540", fontWeight: "800", pt: 2 }}
              align="center"
              variant="h4"
              component="div"
            >
              Our Products
            </Typography>
            <ProductMultiCarousel
              count={1}
              styles={{
                height: "100%",
                width: "265px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
              // styles={props.styles}
              company={AcuminPhotos}
            />
          </Box>
        </Box>

        <DealIn
          CompanyToken={process.env.REACT_APP_NEXBON_TOKEN}
          companyNumber={2}
        />
      </Container>
    </>
  );
}
