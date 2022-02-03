import { Container, Grid, Typography } from "@mui/material";
import { JMPhotos } from "./data";
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
export default function JM() {
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
              // styles={props.styles}
              company={JMPhotos}
              styles={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                marginBottom: "10px",
              }}
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
              company={JMPhotos}
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
          companyName={"Welcome To JM Healthcare (P) Ltd."}
          body={
            "We,JM Healthcare from 1997 are famous amongst the esteemed wholesaler and trader of an exceptional quality assortment of Pharmaceutical Products. Offered products range consists of Pharmaceutical Tablets, Pharma Tablets, Nano Shot Oral Solution, Pharmaceutical Sachet, Paracetamol Suspension, Protein Powder, Pharmaceuticals Syrup, Dry Syrup, Pharmaceutical Capsules, Softgel Capsules, Pharma Drops etc. The offered range is prepared using high-quality ingredients at our vendors end under the direction of pharma experts. Also, we offered these products to clients in various packaging options. As per quality principles, we are committed to the core values of ethical practices, and responsibility towards patrons. We have established a strong relationship with vendors. They have installed all the automatic machine for faster production with the set quality norms. In addition to this, with the support of our professionals and vendors base, we have a strong relationship with clients in a short span of time.Managed under the headship of our mentor “Rakesh Vijay Kumar”, our firm has covered the foremost share in the market. Owing to his organizational skills, we are famous in this domain"
          }
          CEO={"Mr Rakesh Vijay Kumar"}
          address={
            "SCF 434, 1st Floor, Motor Market, Sector 5 Manimajra, Chandigarh - 160101, India"
          }
          EYear={"2011"}
        />
      </Container>
    </>
  );
}
