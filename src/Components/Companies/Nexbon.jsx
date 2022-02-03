import { Container, Grid, Typography } from "@mui/material";
import { NexbonPhotos } from "./data";
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
export default function Nexbon() {
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
              company={NexbonPhotos}
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
              company={NexbonPhotos}
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
          companyName={"Welcome To Nexbon Lifesciences (P) Ltd."}
          body={
            " The medical needs of the people have been steadily increasing and we decided to start our company to address these needs efficiently. We, Nexbon Lifesciences have been a manufacturer aswell as a supplier with the most comprehensive range of pharmaceutical products since 2019. 15 gm Clobetasol Propionate Gentamicin Iodochlorhydroxyquinoline And Ketoconazole Cream, 1.5gm Cefoperazone And Sulbactam For Injection, Aceclofenac Paracetamol And Thiocolchicoside Tablets, 100 ml Levosalbutamol Guaiphenesin And Ambroxol HCL Syrup, etc., are few of our most effective and quality assured products. After successful formulation of syrups, tablets and injections, our team of quality controllers inspect each item as per the industry standards.“Nexbon Lifesciences” is a well-known Manufacturer of a flawless assortment of Pharmaceutical Injections, Pharmaceutical Tablets,  Pharmaceutical Capsule, etc. Incepted in the year 2019 at Panchkula (Haryana, India), we are a Partnership firm and manufacture the offered products as per the set industry norms.There has always been an increase in the demand for pharmaceuticalitems in the market. However, manufacturers often seem to compromise quality to satisfy the increasing requirements. Whilewe, at, Nexbon Lifesciences, ensure highest standards in our products, such as 60 ml Ambroxol Hydrochloride GuaiphenesinTerbutaline Sulphate And Menthol Syrup, 1.5 gm Ceftriaxone And Sulbactam For Injection, Cefixime Ofloxacin And Lactic Acid Bacillus Tablets, 15 gm Itraconazole Ofloxacin Ornidazole AndClobetasol Propionate Cream, etc. Apart from quality, we also meetthe customers requirements in a timely manner. All of oureffective items are carefully processed in our Panchkula, Haryana,India facility. In order to draw the majority of customers into a business, a company needs to stand out from the rest of itscompetitors. Likewise, our company works according to certainbusiness methodologies such that we remain ahead of the others.Some of the chief factors that best explain them are as follows:We clearly understand the expectations of the customers and help them find the best approaches. We constantly conduct a robust market survey in order to remain ahead of the crowd. We obey the most positive methods when we handle any client in our business. We guarantee that all shipments are completed safely and within the scheduled time."
          }
          address={
            "Plot No. 78, Industrial Area, Phase 2,Amartex Chowk,Panchkula - 134113"
          }
          CEO={"Mr"}
          EYear={"2019"}
        />
      </Container>
    </>
  );
}
