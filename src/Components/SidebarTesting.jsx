import { Container, Grid, makeStyles } from "@mui/material";
import React from "react";
import Card2 from "./Card2";
import Monoply from "../static/istockphoto-486763752-612x612.jpg";
import Cancer from "../static/c13c84ef12b0467ca0ba883951aa11ec.jpg";
import EyeDrops from "../static/download.jpg";
import Dental from "../static/dental.jpg";
import Injectable from "../static/Injectable.jpg";
import Ophthalmic from "../static/Ophthalmic.jpg";

import ControlledAccordion from "./ControlledAccordions";

export default function SidebarTesting(props) {
  //   const classes = useStyles;
  return (
    <div>
      <Grid container spacing={2} sx={{ py: 5 }}>
        <Grid item xs={12} md={3} lg={3}>
          <ControlledAccordion heading={props.heading} />
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Monopoly Franchise"}
            body={
              "Propaganda cum Distribution. In the Pharma industry, PCD is used for marketing and distribution rights."
            }
            image={Monoply}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Cancer Drugs Franchise "}
            body={
              "Anti-Cancer Drugs is an international medical journal, which aims to promote and encourage research "
            }
            image={Cancer}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Eye's  Drops  Franchises"}
            body={
              "Problems like dry eyes, amblyopia, strabismus, age-related macular degeneration etc. become common."
            }
            image={EyeDrops}
          />
        </Grid>

        <Grid item xs={12} md={3} lg={3} direction="column">
          <ControlledAccordion heading="PCD/Pharma Franchise" />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Denatal Products Franchise"}
            body={
              "Dental franchises are owned and operated by a managing company or investor.Dental Service Organizations "
            }
            image={Dental}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Injectable Franchise "}
            body={
              "Anti-Cancer Drugs is an international medical journal, which aims to promote and encourage research on anti-cancer agents"
            }
            image={Injectable}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card2
            sx={{ mx: 5 }}
            style={{ height: "    230px", borderRadius: "10px 10px 0 0" }}
            heading={"Ophthalmic  Franchise "}
            body={
              "India is a home for approximately world’s 30% blind people. Half among these people are blind due to cataracts and others "
            }
            image={Ophthalmic}
          />
        </Grid>
      </Grid>
    </div>
  );
}
