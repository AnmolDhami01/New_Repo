import React from "react";
import HoverLinks from "./HoverLinks";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/material";

const useStyles = makeStyles({
  section1: {
    display: "inline-flex",

    padding: "10px 0px",
  },

  mainDiv: {
    display: "flex",
    // background: "#d9f7e0",
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    display: "flex !important",
    // padding: "0 !important",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default function NavCat() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainDiv} sx={{ p: 1 }}>
        <Container maxWidth="lg" className={classes.Container}>
          <HoverLinks
            heading={"Categories"}
            text="PCD Pharma FRANCHISE"
            text1="Third Party Manufacturing"
            text2="Cosmetics Derma FRANCHISES"
            text3="Ayurvedic PCD FRANCHISE"
            text4="Cardiac Diabetic Manufacturing"
            text5="Allopathic Drug Manufacturing"
            text6="Ent Medicine Manufacturing"
            text7="Ayurvedic Herbal Manufacturing"
            text8="Pediatric Range Franchise"
            text9="Critical Care  Franchise"
            text10="Medicine Manufacturing Companies"
          />

          <HoverLinks
            heading={"PCD/Pharma Franchise"}
            text="Cosmetics Derma Franchise"
            text1="Ayurvedic PCD Franchise"
            text2="Ortho Franchise"
            text3="Ophthalmic Pharma Franchise"
            text4="Cardiac Diabetic Franchise"
            text5="Allopathic Drug Franchise"
            text6="Ent Medicine Franchise"
            text7="Ayurvedic Herbal Franchise"
            text8="Pediatric Range Franchise"
            text9="Critical Care  Franchise"
            text10="Medicine Franchise "
          />

          <HoverLinks
            heading={"Third Party Manufacturing"}
            text="Ortho Manufacturing"
            text1="Ophthalmic Pharma Manufacturing"
            text2="Cosmetics Derma Manufacturing"
            text3="Ayurvedic PCD Manufacturing"
            text4="Cardiac Diabetic Manufacturing"
            text5="Allopathic Drug Manufacturing"
            text6="Ent Medicine Manufacturing"
            text7="Ayurvedic Herbal Manufacturing"
            text8="Pediatric Range Manufacturing"
            text9="Critical Care  Manufacturing"
            text10="Medicine Manufacturing Companies"
          />

          <HoverLinks
            heading={"Products"}
            text="SoftGel Capsules"
            text1="Tablets"
            text2="Capsules"
            text3="Ayurvedic"
            text4="Herbal Medicine"
            text5="Syrup"
            text6="Dry Syrup"
            text7="Injectable"
            text8="Eye Ear Drops"
            text9="Nosal Spray or Drops"
            text10="Sanitizer and Hand Wash"
          />

          <HoverLinks
            heading={"View All "}
            text="PCD Pharma FRANCHISE"
            text1="Third Party Manufacturing"
            text2="Cosmetics Derma FRANCHISES"
            text3="Ayurvedic PCD FRANCHISE"
            text4="Cardiac Diabetic Manufacturing"
            text5="Allopathic Drug Manufacturing"
            text6="Ent Medicine Manufacturing"
            text7="Ayurvedic Herbal Manufacturing"
            text8="Pediatric Range Franchise"
            text9="Critical Care  Franchise"
            text10="Medicine Manufacturing Companies"
          />
        </Container>
      </Box>
    </>
  );
}
