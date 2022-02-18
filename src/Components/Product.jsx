import { Container, Grid } from "@mui/material";
import React from "react";
import ChooseCard from "./ChooseCard";
import ProductCard from "./ProductCard";
import AyurvedicIcon from "../static/AyurvedicIcon.png";
import MedicineIcon from "../static/MedicineIcon.png";
import TherapyIcon from "../static/TherapyIcon.png";
import FactoryIcon from "../static/FactoryIcon.png";
export default function Product() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3} sm={6}>
            <ProductCard
              heading={"Ayurvedic  Products"}
              image={AyurvedicIcon}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sm={6}>
            <ProductCard
              heading={"Drugs & Pharma Products"}
              image={MedicineIcon}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sm={6}>
            <ProductCard
              heading={"Cosmetic Products"}
              image={TherapyIcon}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sm={6}>
            <ProductCard
              heading={"Homeopathic Products"}
              image={FactoryIcon}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
