import { Container, Grid } from "@mui/material";
import React from "react";
import FormGroupPage from "../Categories/FormGroupPage";
import ComapnyCarousel from "../ComapnyCarousel";
import Caursal from "../Caursal";
import ProductCarousel from "./ProductCarousel";
import { Box } from "@mui/system";

export default function Nexbon() {
  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Caursal />
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormGroupPage />
          </Grid>
        </Grid>
        <Box sx={{ pt: 5 }}>
          <ProductCarousel count={5} />
        </Box>
      </Container>
    </>
  );
}
