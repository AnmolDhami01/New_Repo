import { Container, Grid } from "@mui/material";
import React from "react";
import ChooseCard from "./ChooseCard";
import ProductCard from "./ProductCard";
import enterprise from "../static/enterprise.png";
import trophy from "../static/trophy.png";
import toiletries from "../static/toiletries.png";
import customer from "../static/customer.png";
import HappyCilentsCards from "./HappyCilentsCards";
export default function HappyCilents() {
  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3} lg={3}>
            <HappyCilentsCards
              heading={"100+"}
              body={"Our Customer"}
              image={customer}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <HappyCilentsCards
              heading={"3000+ "}
              body={"No.of Unique Products"}
              image={toiletries}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <HappyCilentsCards
              heading={"60+ "}
              body={"Companies"}
              image={enterprise}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <HappyCilentsCards
              heading={"20+ "}
              body={"Awards"}
              image={trophy}
              sx={{ backgroundColor: "#0c8540", color: "white" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
