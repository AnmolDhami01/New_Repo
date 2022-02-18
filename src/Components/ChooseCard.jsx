// --- Imports --- //
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
} from "./FullImageCard";
import { makeStyles } from "@mui/styles";
import { CardActionArea, CardMedia, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { borderColor } from "@mui/system";

// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 800,
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 340,
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    // backgroundColor:
    //   "background: linear-gradient(120deg, #f8b500, #e2b400, #cdb100, #b8ae00, #a3ab01, #90a710, #7ca21b, #699d25, #56972d, #429234, #2d8b3a, #0c8540);",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
});

export default function ChooseCard(props) {
  const classes = useStyles();
  return (
    <>
      {/* <Container className={classes.container}> */}
      <Box>
        <FiCard className={classes.card}>
          <FiCardMedia image={props.image} />
          <FiCardContent className={classes.fiCardContent}>
            <Typography
              gutterBottom
              variant="h4"
              component="h5"
              textAlign="center"
            >
              {props.heading}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              // className={classes.fiCardContentTextSecondary}
              component="p"
            >
              {props.body}
            </Typography>
          </FiCardContent>
          <FiCardActions
            className={classes.fiCardContent}
            style={{ placeContent: "center" }}
          >
            <Link to="/company">
              <Button
                size="small"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </Link>
          </FiCardActions>
        </FiCard>
      </Box>
      {/* </Container> */}
    </>
  );
}
