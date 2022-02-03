import { Container, Grid, Typography } from "@mui/material";
import { ElkosPhotos } from "./data";
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
export default function Alencure() {
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
              company={ElkosPhotos}
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
              company={ElkosPhotos}
            />
          </Box>
        </Box>
        <DealIn
          companyName={"Welcome To Alencure Biotech (P) Ltd."}
          body={
            "Welcome To Alencure Biotech  PCD Pharma Franchise Industry is going through a great transformation and India gained a reputed position in the fields of Science & technology. Today, there is a great demand for Indian doctor and medicines. Elkos is a prominent name in the Pharma Franchise world and emerging as a big brand Indian Pharma sector.PCD Pharma Franchise in India It is one of the Leading Pharma Franchise Company in India. It is a multi-facet and technology-driven healthcare Pharma Franchise Company. Elkos was established with an aim to provide the best Pharma solutions within the best affordable price range. We are engaged in manufacturing, trading, supply, distribution and marketing of Pharma products. We are a wholesale distributor and supplier of Pharma formulation and cosmeceuticals. We use the best API (Active Pharma Ingredients) and follow GMP (Goods Manufacturing Practice) as the industry norms. Elkos Healthcare Private Limited provide the best healthcare products within the affordable range. Its WHO-GMP-ISO 9001:2015 certified Pharma Franchise company. The company focuses on providing top quality, affordably priced product to its clients and dedicated customer service. Elkos Healthcare Private Limited has a wide PAN India network. We deal in over 1500 products. Your search for Top PCD Pharma Franchise company ends here."
          }
          CEO={"Mr Balinder Gupta "}
          address={
            "Plot NO.246 HSIIDC Industrial Estate Alipur, Barwala, Panchkula-134118 Haryana, India."
          }
          EYear={"2016"}
        />
      </Container>
    </>
  );
}
