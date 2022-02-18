import { Container, Grid } from "@mui/material";
import React from "react";
import ChooseCard from "./ChooseCard";
import CHOOSEUSE1 from "../static/CHOOSEUSE1.jpg";
import CHOOSEUSE2 from "../static/CHOOSEUSE2.jpg";
import CHOOSEUSE3 from "../static/CHOOSEUSE3.jpg";

export default function ChooseUs() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ py: 5 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ChooseCard
              image={CHOOSEUSE1}
              heading={"Why Choose Pharma Web"}
              body={
                "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer can choose accordingly and the seller can get the relevant lead. From the Buyers point of view, we have listed ."
              }
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          {/* <Grid container item xs={12} md={8} lg={8} spacing={2}> */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ChooseCard
              image={CHOOSEUSE2}
              heading={"PCD/PHARMA Franchise"}
              body={
                "In Pharma industry, PCD is used for marketing and distribution rights. Basically, PCD (Propaganda cum Distribution) is a franchise business. Let's understand what a franchise business is. When a company gives permission to person or other company to sell their products  "
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ChooseCard
              image={CHOOSEUSE3}
              heading={"Third Party Manufacture"}
              body={
                "Third-party manufacturing is process of manufacter Drugs and products from other parties. In this process, signing an agreement is done between the company and the manufacturing company, and the manufacturing company manufacture the products  the contract"
              }
            />
          </Grid>
          {/* <Grid item xs={12} md={4} lg={4}>
              <ChooseCard
                heading={"Pharma Web"}
                body={
                  "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer ,we have listed the top-rated pharmaceutical companies, we have listed the top-rated pharmaceutical companies, "
                }
              />
            </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
