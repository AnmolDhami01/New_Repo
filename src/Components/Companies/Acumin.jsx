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
          companyName={"Welcome To Acumin Labs (P) Ltd."}
          body={
            "Accuminn Labs is a leading marketing and pharma manufacturing company providing a wide range of Alopathic, Herbal & Nutraceutical medicines. Since 2008, we are working with a well-defined goal to serve the patients who need high-quality medicines. The products we marketed and manufacture include Tablets, Capsules, Injections, Ayurvedic Medicines, Syrups, Softgel, Creams, Powders and Dental Solutions.We are the best marketing and manufacturing company of the herbal medicines to provide a great health care to our customers without any side effects. Accuminn Labs is established with a single aim of providing high-quality medicines to the customers. Because of our crystal clear business policies we have a wide range of satisfied customers that include distributors, doctors, clinics, marketers etc.Sincerity and honesty are our core values and a good health for all is our prime goal."
          }
          CEO={"Mr Rakesh "}
          address={
            "SCF-321, First Floor, Motor Market, Manimajra, 160101, Chandigarh, India"
          }
          EYear={"2016"}
        />
      </Container>
    </>
  );
}
