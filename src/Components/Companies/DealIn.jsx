import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Card, Typography, Divider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  links: {
    display: "flex",
    flexDirection: "column",
    color: "white ",
    backgroundColor: "#0c8540",
    textDecoration: "none",
    fontSize: "15px",
    lineHeight: 2.2,
    fontWeight: 700,
    paddingLeft: 10,

    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
});

export default function DealIn(props) {
  const links = [
    {
      id: 1,
      name: "Anti Allegric, Anti Cold",
      linkes: "AntiAllegric",
    },
    {
      id: 2,
      name: "Anti Vertigo",
      linkes: "AntiVertigo",
    },
    {
      id: 3,
      name: "Antibiotics",
      linkes: "Antibiotics",
    },
    {
      id: 4,
      name: "Capsules",
      linkes: "Capsules",
    },
    {
      id: 5,
      name: "Cardiology & Anti Diabetics",
      linkes: "CardiologyAntiDiabetics",
    },
    {
      id: 6,
      name: "Dermatological Range",
      linkes: "DermatologicalRange",
    },
    {
      id: 7,
      name: "Energy Drink",
      linkes: "EnergyDrink",
    },
    {
      id: 8,
      name: "Gyencological Range",
      linkes: "GyencologicalRange",
    },
    {
      id: 9,
      name: "Herbal Range",
      linkes: "HerbalRange",
    },
    {
      id: 10,
      name: "Infusion Range",
      linkes: "InfusionRange",
    },
    {
      id: 11,
      name: "Injectable",
      linkes: "Injectable",
    },
    {
      id: 12,
      name: "Nasal Drops",
      linkes: "NasalDrops",
    },
    {
      id: 12,
      name: "Nourology Range",
      linkes: "NourologyRange",
    },
    {
      id: 12,
      name: "Neuropsychiatric",
      linkes: "Neuropsychiatric",
    },
    {
      id: 12,
      name: "Ointments",
      linkes: "Ointments",
    },
    {
      id: 12,
      name: "Opthalmic Range",
      linkes: "OpthalmicRange",
    },
    {
      id: 12,
      name: "Oral Liquids",
      linkes: "OralLiquids",
    },
  ];
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} xs={12}>
        <Grid container item lg={12} xs={12}>
          <Grid item xs={12} lg={12}>
            <Typography
              variant="h5"
              align="left"
              sx={{
                backgroundColor: "#F8B500",
                color: "white",
                pl: 2,
              }}
              fontFamily="Poppins"
            >
              We Deal In
            </Typography>
            {links.map((link) => (
              <div className={classes.links} key={link.id}>
                <Link to={link.linkes}>
                  <HealthAndSafetyIcon />
                  {link.name}
                </Link>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={9} xs={12}>
        <Card>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            direction="column"
            sx={{ p: 2 }}
          >
            <Grid item xs={12} lg={12}>
              <Typography
                sx={{ color: "#0c8540", fontWeight: "800", pt: 2 }}
                align="center"
                variant="h4"
                component="div"
              >
                {props.companyName}
              </Typography>
            </Grid>

            <Grid item lg={6} xs={12}>
              {props.body}
            </Grid>

            <Grid item lg={6} xs={12}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>Company Facts</TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Nature of Business
                      </TableCell>
                      <TableCell align="right">
                        PCD/Pharma Franchise and Manufacturer
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Additional Business
                      </TableCell>
                      <TableCell align="right">
                        Wholesaler, Service Provider
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Company CEO
                      </TableCell>
                      <TableCell align="right">{props.CEO}</TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Registered Address
                      </TableCell>
                      <TableCell align="right">{props.address}</TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Additional Business
                      </TableCell>
                      <TableCell align="right">
                        Wholesaler, Service Provider
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Total Number of Employees
                      </TableCell>
                      <TableCell align="right">50 to 100</TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Establishment Year
                      </TableCell>
                      <TableCell align="right">{props.EYear}</TableCell>
                    </TableRow>

                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Legal Status
                      </TableCell>
                      <TableCell align="right">Individual-Proprietor</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
