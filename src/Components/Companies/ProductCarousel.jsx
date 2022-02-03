import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BootstrapMultiCarousel from "../BootstrapMultiCarousel";
import ProductMultiCarousel from "./ProductMultiCarousel";
import { AcuminPhotos } from "./data";
export default function ProductCarousel(props) {
  // const { company } = props;
  return (
    <>
      <Container maxWidth="xl">
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
            count={props.count}
            styles={props.styles}
            company={AcuminPhotos}
          />
        </Box>
      </Container>
    </>
  );
}
