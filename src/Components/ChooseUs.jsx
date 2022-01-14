import { Container, Grid } from "@mui/material";
import React from "react";
import ChooseCard from "./ChooseCard";

export default function ChooseUs() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ py: 5 }}>
          <Grid item xs={12} md={4} lg={4}>
            <ChooseCard
              heading={"Why Choose Pharma Web"}
              body={
                "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer can choose accordingly and the seller can get the relevant lead. From the Buyers point of view, we have listed the top-rated pharmaceutical companies, the Third party Manufacturing Pharma companies and other different product categories so that they can get the genuine company."
              }
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid container item xs={12} md={8} lg={8} spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <ChooseCard
                heading={"Why Choose Pharma Web"}
                body={
                  "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer can choose accordingly and the seller can get the relevant lead. From the Buyers point of view, "
                }
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <ChooseCard
                heading={"Why Choose Pharma Web"}
                body={
                  "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer can choose accordingly and the seller can get the relevant lead. From the Buyers point of view, "
                }
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <ChooseCard
                heading={"Why Choose Pharma Web"}
                body={
                  "Well we work on a model to provide you genuine buyers and sellers of the pharmaceutical industry. We have listed several categories in the portal which the buyer can choose accordingly and the seller can get the relevant lead. From the Buyers point of view, "
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
