import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
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

export default function LinksTesting() {
  const links = [
    {
      id: 1,
      name: "Anti Allegric, Anti Cold",
    },
    {
      id: 2,
      name: "Anti Vertigo",
    },
    {
      id: 3,
      name: "Antibiotics",
    },
    {
      id: 4,
      name: "Capsules",
    },
    {
      id: 5,
      name: "Cardiology & Anti Diabetics",
    },
    {
      id: 6,
      name: "Dermatological Range",
    },
    {
      id: 7,
      name: "Energy Drink",
    },
    {
      id: 8,
      name: "Gyencological Range",
    },
    {
      id: 9,
      name: "Herbal Range",
    },
    {
      id: 10,
      name: "Infusion Range",
    },
    {
      id: 11,
      name: "Injectable",
    },
    {
      id: 12,
      name: "Nasal Drops",
    },
    {
      id: 12,
      name: "Nourology Range",
    },
    {
      id: 12,
      name: "Neuropsychiatric",
    },
    {
      id: 12,
      name: "Ointments",
    },
    {
      id: 12,
      name: "Opthalmic Range",
    },
    {
      id: 12,
      name: "Oral Liquids",
    },
  ];

  const classes = useStyles();
  return (
    <>
      <Grid container item lg={12} xs={12}>
        <Grid item xs={12} lg={3}>
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
              <Link to={link.name}>
                <HealthAndSafetyIcon />
                {link.name}
              </Link>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
