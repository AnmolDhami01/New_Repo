import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FullWidthTabs from "./FullWidthTabs";
import Caursal from "./Caursal";
import { Paper } from "@mui/material";
export default function GoalsValues() {
  return (
    <>
      <Box
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                sx={{ color: "#0c8540", fontWeight: "800", pt: 2 }}
                align="center"
                gutterBottom
                variant="h4"
                component="div"
              >
                Tru Web's Goals and Values
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          pt: 2,
          pb: 6,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <FullWidthTabs />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box component={Paper}>
                <Typography
                  sx={{
                    background: "#0c8540",
                    color: "white",
                    fontWeight: "800",
                    py: 1,
                  }}
                  align="center"
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  Trusted by Leading Pharma Brands
                </Typography>

                <Typography
                  align="center"
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ pt: 3 }}
                >
                  When I think of the future, I think of Evaluate Pharma, & When
                  I Think Of Evaluate Pharma, I Think To Work With PharmaWeb.
                  Best Experience
                </Typography>

                <Typography
                  sx={{ color: "#0c8540", fontWeight: "800", py: 2 }}
                  align="center"
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  Jm HealthCare (MD)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
