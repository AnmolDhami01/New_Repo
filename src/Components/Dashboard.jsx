import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Chartjs from "./dashboard/Chartjs";

import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

import ProductCard from "./ProductCard";
import TRANACTION from "../static/TRANACTION.png";
import INCOME from "../static/INCOME.png";
import DATA from "../static/DATA.png";
import LEADS from "../static/LEADS.png";
import LeadsCard from "./dashboard/LeadsCard";
import DashboardTables from "./dashboard/DashboardTables";
import DashboardTabs from "./dashboard/DashboardTabs";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const classes = useStyles();

  let navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("../", { replace: true });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={3} lg={12} sm={12}>
            <Typography
              variant="h5"
              sx={{ pt: 2, fontFamily: "Poppins", fontWeight: "800" }}
            >
              Dashboard
            </Typography>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper sx={{ pt: 3, pb: 8, px: 3 }}>
              <Chartjs />
            </Paper>
          </Grid>
          <Grid container item spacing={5} xs={12} lg={6}>
            <Grid item xs={12} md={3} lg={6} sm={12}>
              <LeadsCard
                heading={"42"}
                body={"Total Leads"}
                image={LEADS}
                sx={{ backgroundColor: "#0c8540", color: "white" }}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={6} sm={12}>
              <LeadsCard
                heading={"26"}
                body={"Transcation"}
                image={TRANACTION}
                sx={{ backgroundColor: "#0c8540", color: "white" }}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={6} sm={12}>
              <LeadsCard
                heading={"₹42000"}
                body={"Income"}
                image={INCOME}
                sx={{ backgroundColor: "#0c8540", color: "white" }}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={6} sm={12}>
              <LeadsCard
                heading={"42"}
                body={"Total Data"}
                image={DATA}
                sx={{ backgroundColor: "#0c8540", color: "white" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <DashboardTables />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={6}>
            <DashboardTabs />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={6}>
            <DashboardTabs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
