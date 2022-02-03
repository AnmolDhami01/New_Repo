import { Container, Grid, Typography } from "@mui/material";
import { StavicPhotos } from "./data";
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
export default function Stavic() {
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
              company={StavicPhotos}
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
              company={StavicPhotos}
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
          companyName={"Welcome To Stavic Lifesciences (P) Ltd."}
          body={
            "Stavic Lifesciences is a fast growing pharmaceutical company. The organization has been committed to providing a wide range of quality and affordable pharmaceutical drugs to a large number of healthcare professionals and medical facilities. The company started its journey with the honest promise of providing quality medicines at affordable prices.Stavic Lifesciences quality is a journey, not a goal. It continuously sets higher standards and feels passionate to achieve all that. The motto of Stavic Lifesciences quality policy is the provide WHO approved Product.As a trustworthy and responsible pharmaceutical company, we have made it a point to create a trustworthy brand, where our customers always associate us with innovation, quality, reliability, sustainability and excellent customer service.One of our specializations is to provide quality, reliability, sustainability and excellent Products. Our team of professionals combined with our infrastructure is always ready for it. We offer a wide range of solutions where we have the experience of developing pharmaceutical formulations for our some of the country’s best pharmaceutical companies."
          }
          CEO={"Mr Rakesh "}
          address={
            "Plot No. 78, 1st Floor Industrial Area, Phase – 2 Panchkula – 134113 Haryana"
          }
          EYear={"2017"}
        />
      </Container>
    </>
  );
}
