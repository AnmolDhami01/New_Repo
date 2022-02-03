import { Container, Grid, Typography } from "@mui/material";
import { CynakPhotos } from "./data";
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
export default function Synak() {
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
              company={CynakPhotos}
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
              company={CynakPhotos}
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
          companyName={"Welcome To Cynak Healthcare (P) Ltd."}
          body={
            "Started in the year 2017, we “Cynak Healthcare” has successfully emerged as a major manufacturer of high-quality Pharmaceutical Products. Offered products range consists of Pharmaceutical Tablets, Pharmaceutical Capsules, and Pharmaceutical Injectable. Also, our range is acknowledged due to the features like accurate composition, high purity, effectiveness, and remarkably long life.Being a professional firm, we have quality-focused behavior that helps us in achieving a top position in the market. We are supported by an ultra-modern infrastructure. Further, quality is one of the main elements which provide a notable identity to the pharmaceutical products and makes them different from the others available in the market. Under the headship of our mentor Mr. Sunny Gupta, our organization is moving ahead in this cutting-edge competition. He has knowledge that helped us in design immaculate pharmaceutical products for the clients.We work very hard to bring the good quality focus of our custom. In addition to being the market leader in the antibiotics, it has a presence in very therapeutic segments such was antipyretic, anti-inflammatory, antibiotics, cardiovascular, antilipidemic, Antibes, muscle relaxant, immunosuppressant, antimalarial and anti-infective etc.Every day we make sure that we gain a huge client base and that is done with the help of team of skilled professionals who are specifically trained to analyze highly effective Pharmaceutical products. Our products are appreciated for purity, accurate composition, quick relief and long lasting effect owing to their testing that is carried under strict norms and parameters and also as per guidelines of the industry. Our skilled, manpower has expertise in the wide diversity of fields that makes them one of reason where we stand today. We focus on every parameter starting from procurement of products, to best possible technology."
          }
          CEO={"Mr Rakesh "}
          address={
            "SCF-231, IInd Floor, Sector - 20, Panchkula, Haryana, Panchkula Haryana 134112"
          }
          EYear={"2017"}
        />
      </Container>
    </>
  );
}
