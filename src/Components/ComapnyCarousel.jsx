import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BootstrapMultiCarousel from "./BootstrapMultiCarousel";

export default function ComapnyCarousel(props) {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: "rgb(218, 221, 226)", pb: 3 }}>
          <Typography
            sx={{ color: "#0c8540", fontWeight: "800", pt: 2 }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            Featured Pharma Franchise Companies
          </Typography>
          <BootstrapMultiCarousel
            styles={props.styles}
            count={props.count}
            styles={props.styles}
          />
        </Box>
      </Container>
    </>
  );
}
