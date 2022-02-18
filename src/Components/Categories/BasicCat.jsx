import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Container,
  Card,
  Typography,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  TextField,
  CardMedia,
} from "@mui/material";
import BasicCatCard from "./BasicCatCard";
import FormControl from "@mui/material/FormControl";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { makeStyles } from "@mui/styles";
import CaursalSmall from "../CaursalSmall";
import NexbonLifesciences from "../../static/NexbonLifesciences.png";
import ACCUMIN from "../../static/ACCUMIN.png";
import ELKOS from "../../static/ELKOS.png";
import JMLOGO from "../../static/JMLOGO.png";
import STAVIC from "../../static/STAVIC.png";
import SYNAK from "../../static/SYNAK.png";
import CYNAKLIFESCIENCES from "../../static/CYNAKLIFESCIENCES.png";
import GLOMPY_LOGO from "../../static/GLOMPY_LOGO.jpg";
import CMPNY from "../../static/CMPNY.jpeg";
import { Link, useNavigate } from "react-router-dom";
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

export default function BasicCat() {
  const classes = useStyles();
  return (
    <>
      <CaursalSmall />
      <Container maxWidth="xl" style={{ paddingTop: "25px" }}>
        <Grid container spacing={2}>
          <Grid item container lg={3} xs={12} spacing={2}>
            <Grid item lg={12} xs={12} direction="column">
              <Grid item lg={6}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ backgroundColor: "#0c8540", color: "white" }}
                  fontFamily="Poppins"
                >
                  PCD/Pharma Franchise
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <div className={classes.links}>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    PCD Pharma Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Third Party Manufacturing
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Cosematic Derma Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Allopathic Drug Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Ayurvedic PCD Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Cardiac Daibatic Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pediatric Range Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    ENT Medicine Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pharma Business
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pediatric Range
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Medicine Manufacturing
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Ayurvedic Herbal
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Critical Care
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Allopathic Drug Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Ayurvedic PCD Franchise
                  </Link>
                </div>
              </Grid>
            </Grid>

            <Grid item lg={12} xs={12} direction="column">
              <Grid item lg={6}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ backgroundColor: "#0c8540", color: "white" }}
                  fontFamily="Poppins"
                >
                  Third Party Manufacturing
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <div className={classes.links}>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    PCD Pharma Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Third Party Manufacturing
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Cosematic Derma Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Allopathic Drug Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Ayurvedic PCD Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Cardiac Daibatic Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pediatric Range Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    ENT Medicine Franchise
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pharma Business
                  </Link>
                  <Link to="/company/nexbon">
                    <HealthAndSafetyIcon />
                    Pediatric Range
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <Grid item container lg={12} xs={12} spacing={1}>
              <Grid item lg={4} xs={12} md={3}>
                <BasicCatCard
                  name={"NexBon LifeSciences"}
                  body={"Welcome To NexBon LifeSciences Pvt. Ltd. "}
                  image={NexbonLifesciences}
                  location={"Panchkula"}
                  sxCard={{
                    width: "228px",
                    height: "56px",
                    // marginTop: "24px",
                    marginLeft: "2px",
                  }}
                  linkes={"/company/Nexbon"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"JM Healthcare"}
                  body={"Welcome To JM Healthcare Pvt. Ltd. "}
                  image={JMLOGO}
                  location={"Chandigarh"}
                  sxCard={{
                    maxWidth: "78px",
                    marginLeft: "65px",
                  }}
                  linkes={"/company/JM"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Accuminn Labs"}
                  body={"Welcome To Accuminn Labs Pvt. Ltd. "}
                  image={ACCUMIN}
                  location={"Chandigarh"}
                  sxCard={{
                    width: "228px",
                    height: "77px",

                    marginLeft: "2px",
                  }}
                  linkes={"/company/Acumin"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Stavic LifeSciences"}
                  body={"Welcome To Stavic LifeSciences Pvt. Ltd. "}
                  image={STAVIC}
                  location={"Panchkula"}
                  sxCard={{
                    height: "71px",
                    marginTop: "12px",
                    marginLeft: "53px",
                    width: "108px",
                  }}
                  linkes={"/company/Stavic"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Cynak  Healthcare"}
                  body={"Welcome To Cynak  Healthcare Pvt. Ltd. "}
                  image={SYNAK}
                  location={"Panchkula"}
                  sxCard={{
                    width: "116px",

                    marginLeft: "62px",
                  }}
                  linkes={"/company/Synak"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Elkos LifeSciences"}
                  body={"Welcome To Elkos LifeSciences Pvt. Ltd. "}
                  image={ELKOS}
                  location={"Panchkula"}
                  sxCard={{
                    width: "134px",

                    marginLeft: " 38px",
                  }}
                  linkes={"/company/Elkos"}
                />
              </Grid>

              <Grid
                item
                lg={4}
                md={3}
                sx={{ display: { lg: "flex", md: "none" } }}
              >
                <BasicCatCard
                  name={"Vasoderma Healthcare"}
                  body={"Welcome To Vasoderma Healthcare Pvt. Ltd. "}
                  image={NexbonLifesciences}
                  location={"Panchkula"}
                  sxCard={{
                    width: "228px",
                    height: "56px",
                    marginTop: "24px",
                    marginLeft: "2px",
                  }}
                  linkes={"/company/Vasoderma"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Glomphy Biotech"}
                  body={"Welcome To Glomphy Biotech Pvt. Ltd. "}
                  image={GLOMPY_LOGO}
                  location={"Chandigarh"}
                  sxCard={{
                    width: "190px",
                    height: "97px",
                    marginTop: "14px",
                    marginLeft: "18px",
                  }}
                  linkes={"/company/Glompy"}
                />
              </Grid>

              <Grid item lg={4} md={3} xs={12}>
                <BasicCatCard
                  name={"Cynak LifeSciences"}
                  location={"Chandigarh"}
                  body={"Welcome To Cynak LifeSciences Pvt. Ltd. "}
                  image={CYNAKLIFESCIENCES}
                  sxCard={{
                    width: "147px",

                    marginLeft: "52px",
                  }}
                  linkes={"/company/CYNAKLIFESCIENCES "}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={3} md={12} xs={12}>
            <Card>
              <Grid container item lg={12} spacing={1} direction="column">
                <Grid item lg={6}>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{ backgroundColor: "#F8B500", color: "white" }}
                    fontFamily="Poppins"
                  >
                    Post Your Requirment
                  </Typography>
                </Grid>
                <Grid item lg={6}>
                  <div style={{ padding: "15px" }}>
                    You are looking for?
                    <br />
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="PCD/PharmaFranchise"
                          control={<Checkbox />}
                          label="PCD Franchise"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          value="3rdPartyManufacture"
                          control={<Checkbox />}
                          label="3rd Party"
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </FormControl>
                    <br />
                    Requirment Emergency
                    <br />
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="PCD/PharmaFranchise"
                          control={<Checkbox />}
                          label="Imediate"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          value="3rdPartyManufacture"
                          control={<Checkbox />}
                          label="In a Month"
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </FormControl>
                    <br />
                    Call Time Preference
                    <br />
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="PCD/PharmaFranchise"
                          control={<Checkbox />}
                          label="Morning"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          value="3rdPartyManufacture"
                          control={<Checkbox />}
                          label="Evening"
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </FormControl>
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="number"
                      autoComplete="number"
                    />
                    <TextField
                      sx={{ pt: 2 }}
                      required
                      fullWidth
                      id="phone"
                      label="Enter Your Message"
                      name="number"
                      autoComplete="number"
                    />
                  </div>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "#0c8540" }}
                    endIcon={<NavigateNextIcon />}
                    fullWidth
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Card>
            <Grid sx={{ pt: 2 }} item lg={12}>
              <CardMedia
                component="img"
                alt="Photos"
                // height="288"
                image={CMPNY}
                // style={props.style}
              />
            </Grid>
          </Grid>
        </Grid>
        <Box
          component={Paper}
          sx={{ my: 5, pl: 2 }}
          style={{ padding: "40px" }}
        >
          <Typography
            variant="h4"
            align="center"
            color="text.secondary"
            paragraph
            style={{ color: "#0c8540", fontWeight: "800" }}
            fontFamily="Poppins"
          >
            PCD Pharma Franchise | Top PCD Pharma Companies in India Price List
            Available
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            PCD Pharma Franchise Company in India - Want to do business with the
            top PCD Pharma franchise companies in India. If yes then you are at
            the right place. PharmaWeb is the only online directory and B2B
            Pharma Marketplace that can provide you with genuine companies and
            pharmaceutical distributors of Pharma PCD and monopoly pharma
            franchise. At PharmaWeb we are focusing on providing you the genuine
            buyers and suppliers who provide Pharma PCD across PAN India. Those
            people who are willing to start a new pharmaceutical company should
            have a PCD franchise business model in their minds. The reason
            behind the planning of a franchise business is the immense benefits
            of this business model. Also, the reputed Pharma PCD companies
            provide several promotional gifts for marketing. Promotional gifts
            may include product samples, company products visual aids, Products
            LBLs, MR Guide, Company uniforms, literature, and the most important
            thing is company product training for Free of cost. Once the product
            is finalized then you have to get the Pharmaceutical drug license
            and GST Number so that you can start selling your products on the
            market to different states or locations. When you get the drug
            license then you can able to provide the medicine franchise of your
            brand with proper marketing agreements with the two parties.
          </Typography>

          <Typography variant="h5" align="left" paragraph fontFamily="Poppins">
            Total Categories Served by the Company for Pharma PCD Franchise
            Business
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Here is the list of major pharmaceutical categories which the
            companies registered at PharmaWeb Provides.
          </Typography>

          <ol>
            <li>Derma Range.</li>
            <li>Ayurvedic Range.</li>
            <li>Allopathic Range.</li>
            <li>Homeopathic Range.</li>
            <li>Veterinary Range.</li>
            <li>Gynae Range.</li>
            <li>Neuropsychiatric Range.</li>
            <li>Ortho Range.</li>
            <li>Pediatric Range.</li>
            <li>Dental Range & Many more.</li>
          </ol>

          <Typography variant="h5" align="left" paragraph fontFamily="Poppins">
            About PCD Business
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            PCD is also known as Propaganda Cum distributorship. It is the
            modern business model that almost 100% of the pharmaceutical
            industry companies are following because the benefits of the PCD
            Pharma franchise co index are immense. In this Business model, every
            individual is the owner of their own. There are no sales targets
            like other franchise business models. Also if you are looking to
            start a new business then the companies listed at PharmaWeb also
            help you in setting new Pharma PCD businesses in your state.
            PharmaWeb is on the verge to provide you with certified and verified
            PCD companies in India that do not only provide their branded
            products. But also provide PCD business from their division of most
            reputed multinational pharma PCD franchise company like
          </Typography>

          <Typography variant="h5" align="left" paragraph fontFamily="Poppins">
            Benefits Offered to the Companies In PCD Model
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            The benefits of Pharma PCD franchise business opportunities are
            immense. You can easily get a profit margin of a minimum of 30-40%.
            Here are the other benefits
          </Typography>

          <ol>
            <li>No Tension of Minimum Investments:</li>
            <li>
              Rights of monopoly in Your Area. It means you are the legal
              distributor of that who you take medicine franchise.
            </li>
            <li>
              Relief from the sales target. As we all know that in most of the
              franchises there is a burden of achieving the sales target. But in
              the PCD medicine Franchise business, there is no burden of
              achieving the sales targets. You are the owner of your own.{" "}
            </li>
            <li>No need for promotional activities:.</li>
          </ol>

          <Typography
            variant="subtitle1"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Doing promotional activities is a major need for any business. But
            in this franchise model, you don't need to worry about that. You
            just have to follow the basic steps to generate sales revenue on
            your own.
          </Typography>

          <Typography variant="h5" align="left" paragraph fontFamily="Poppins">
            Important Faqs
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q1.) How Many Companies Listed at PharmaWeb For Franchise?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 1.) More than 600+ Companies Listed at PharmaWeb.
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q2.) How Many Products do these Companies Have?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 2.) We don't know about the exact numbers but around 60000+
            product lists available.
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q 3.) How can we Approach Pharmaceutical Companies for Medicine
            Franchise at PharmaWeb?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 3.) You just have to submit your inquiry in the portal. We have
            an automated system where inquiries are distributed to the relevant
            pharmaceutical companies who provide you medicine franchise
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q 4.) What are the Documents Required For Medicine Franchise
            Opportunity?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 4.) If you want a franchise then the following document needed
            like drug license, GST Number, TIN number of your company.
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q 5.) What types of Pharma PCD Provided by the Companies?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 5.) The Pharma companies listed at PharmaWeb provide pharma PCD
            for the following Range like Derma Range PCD, Dental Range,
            Allopathic, Homeopathic, Veterinary Range, Gyne Range,
            Neuropsychiatric, Ortho Range, Pediatric Range.
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q 6.) Who can take the PCD Pharma Franchise?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 6.) Chemists, Doctors, Medical representatives, medicine
            retailers, and wholesalers who have experience in the pharma
            industry.
          </Typography>

          <Typography variant="h6" align="left" fontFamily="Poppins">
            Q 7.) What is the minimum investment required and how much space do
            I need to establish my own Company in PCD?
          </Typography>

          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            fontFamily="Poppins"
          >
            Ans 7.) If you really want to start on a basic level then the
            minimum investment required by you varies from 35000 to 50000. In
            this amount, you can easily get products of a well-reputed brand
            with promotional materials. Regarding space, it totally depends on
            you that how much inventory you can manage by keeping the expiry
            dates in your mind.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
