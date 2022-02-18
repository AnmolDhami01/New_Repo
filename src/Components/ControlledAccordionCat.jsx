import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  links: {
    display: "flex",
    flexDirection: "column",
    color: "white ",
    textDecoration: "none",
    fontSize: "15px",
    lineHeight: 2.2,
    fontWeight: 700,

    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  links1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(1),
  padding: "0px 0px 13px 20px",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ControlledAccordionCat(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div>
      <Accordion
        sx={{ color: "white ", backgroundColor: "#0c8540 " }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1d-header"
        >
          <Typography fontFamily="Poppins">
            <MenuIcon />
            {props.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.links}>
            <Link to="/company">
              <HealthAndSafetyIcon />
              PCD Pharma Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Third Party Manufacturing
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Cosematic Derma Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Allopathic Drug Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Ayurvedic PCD Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Cardiac Daibatic Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Pediatric Range Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              ENT Medicine Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Pharma Business
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Pediatric Range
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Medicine Manufacturing
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Ayurvedic Herbal
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Critical Care
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Allopathic Drug Franchise
            </Link>
            <Link to="/company">
              <HealthAndSafetyIcon />
              Ayurvedic PCD Franchise
            </Link>
            <Box textAlign="center">
              <center>
                <Link to="/company">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "#f8b500" }}
                  >
                    View More
                  </Button>
                </Link>
              </center>
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
