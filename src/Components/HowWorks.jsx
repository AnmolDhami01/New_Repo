import * as React from "react";

import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";

import { Box, Grid, Hidden, Typography } from "@mui/material";

import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";

export default function HowWorks() {
  return (
    <>
      <Hidden smDown>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                style={{ color: "#0c8540" }}
                fontFamily="Poppins"
              >
                How it Works
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Stack
          sx={{ pt: 4, pb: 5 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            startIcon={<MapsUgcRoundedIcon />}
            style={{
              background: "#0c8540",
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="contained"
          >
            Post your demands
          </Button>

          <Button
            startIcon={<SecurityRoundedIcon />}
            style={{
              background: "#0c8540",
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="contained"
          >
            Your enquiry is verified
          </Button>

          <Button
            startIcon={<RocketLaunchIcon />}
            style={{
              background: "#0c8540",
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="contained"
          >
            Your requirements are sent to right suppliers
          </Button>

          <Button
            startIcon={<ThumbUpAltSharpIcon />}
            style={{
              background: "#0c8540",
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="contained"
          >
            Suppliers will contact you
          </Button>
        </Stack>
      </Hidden>
    </>
  );
}
