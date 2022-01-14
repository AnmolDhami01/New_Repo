import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FullWidthTabs from "./FullWidthTabs";

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
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                style={{ color: "#0c8540" }}
                fontFamily="Poppins"
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
          <FullWidthTabs />
        </Container>
      </Box>
    </>
  );
}
