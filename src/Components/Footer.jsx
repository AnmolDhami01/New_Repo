import React from "react";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Container from "@mui/material/Container";

const footers = [
  {
    title: "PharmaWeb",
    description: [
      "The main purpose of PharmaWeb.com is to bring together entire Pharma Industry at one place and provide a platform to importers, exporters, manufacturers, traders, services providers, distributors, wholesalers and governmental agencies to find trade opportunities and promote their products and services online.",
    ],
  },
  {
    title: "Company",
    description: [
      "ABOUT",
      "CONTACT",
      "CARRER",
      "POLICY",
      "TERMS & CONDITIONS",
      "DISCLAMER",
      "MEMBERSHIP PACKAGES",
      "CANCELLATION POLICY",
    ],
  },
  {
    title: "Information",
    description: [
      "BLOG",
      "HOW TO GET MEMBERSHIP",
      "PHARMA CATEGORIES",
      "TOP PHARMA COMPANIES",
      "ADVERTISING",
      "FAQs",
      "PRESS",
      "MOLECULES LIST",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="http://tru-web.in/">
        PharmaWeb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  return (
    <>
      <div style={{ background: "#0c8540" }}>
        <Container
          maxWidth="xl"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
            background: "#0c8540",
            color: "white",
          }}
        >
          <Grid container spacing={2} justifyContent="space-around">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="white" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        variant="subtitle1"
                        sx={{ color: "white" }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </>
  );
}
