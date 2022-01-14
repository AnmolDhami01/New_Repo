import { Container, Grid, makeStyles, Box, Paper } from "@mui/material";
import React from "react";
import Card2 from "./Card2";

import ControlledAccordionCat from "./ControlledAccordionCat";

export default function SidebarTesting3(props) {
  return (
    <Container sx={{ pt: 5 }} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid container item xs={12} md={3} lg={3}>
          <Grid item xs={12}>
            <ControlledAccordionCat heading={props.heading} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12} lg={8}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={props.body}
                image={props.image}
              />
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={props.body1}
                image={props.image1}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={props.body2}
                image={props.image2}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={8}>
              <Card2
                sx={{ mx: 5 }}
                style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
                heading={props.body3}
                image={props.image3}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
