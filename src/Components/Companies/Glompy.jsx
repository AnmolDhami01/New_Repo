import { Container, Grid, Typography } from "@mui/material";
import { GLOMPYPhotos } from "./data";
import ProductMultiCarousel from "./ProductMultiCarousel";
import React from "react";
import FormGroupPage from "../Categories/FormGroupPage";
import ComapnyCarousel from "../ComapnyCarousel";
import Caursal from "../Caursal";
import ProductCarousel from "./ProductCarousel";
import { Box } from "@mui/system";
import DealIn from "./DealIn";
import { makeStyles } from "@mui/styles";
import CaursalCompany from "./CaursalCompany";
export default function Glompy() {
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
              // styles={props.styles}
              company={GLOMPYPhotos}
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
              // styles={props.styles}
              company={GLOMPYPhotos}
              styles={{
                height: "100%",
                width: "265px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          </Box>
        </Box>
        <DealIn
          companyName={"Welcome To Glompy Healthcare (P) Ltd."}
          body={
            "In the year 2019, Dalbet Pharmacy stepped in the Indian pharmaceutical sector. From Chandigarh (India), we are helping and supporting customers with large supply of Fungal Diastase And Papin Syrups, Cefixime Dispersible Tablets IPs, Multivitamin And Multimineral Softgel Capsules, Pain Relief Oils, etc.Vision: To lead the Pharma sector globally by bringing better & innovative therapeutic solutions for the healthier lives of people.SEO Services: To promote and serve the finest grade of affordable drugs to maximum required individuals.Brand Marketing: Our brand represents integrity, quality, innovation and collaboration with latest technology. From various hospitals to clinics, we are serving & supporting all customers in different therapeutic segments."
          }
          CEO={"Mr. Abhiraj Sidhu"}
          address={
            "B No. 136, 140/3, Industrial Area, Near Bhushan, Phase 1, Chandigarh, Chandigarh, 160002, India"
          }
          EYear={"2016"}
        />
      </Container>
    </>
  );
}
