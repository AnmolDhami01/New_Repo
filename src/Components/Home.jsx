import { Box, Container, Hidden } from "@mui/material";
import React from "react";
import Caursal from "./Caursal";
import ChooseUs from "./ChooseUs";
import Product from "./Product";
import SidebarTesting3 from "./SidebarTesting3";
import Monoply from "../static/Monoply.jpg";

import EyeDrops from "../static/download.jpg";
import Dental from "../static/dental.jpg";
import Injectable from "../static/Injectable.jpg";
import Derma from "../static/Derma.jpg";
import Pharma from "../static/Pharma.jpg";
import Contract from "../static/Contract.jpg";
import HandWash from "../static/HandWash.jpg";
import CaursalSmall from "./CaursalSmall";
import HappyCilents from "./HappyCilents";
import ContactUs from "./ContactUs";

import GoalsValues from "./GoalsValues";
import HowWorks from "./HowWorks";
import CaursalSmallThird from "./CaursalSmallThird";
import CaursalSmallDerma from "./CaursalSmallDerma";
import ComapnyCarousel from "./ComapnyCarousel";
import StartingCaursal from "./StartingCaursal";
import NavCat from "./NavCat";

export default function Home() {
  return (
    <>
      <Container sx={{ padding: "0 !important" }} maxWidth="xl">
        <StartingCaursal />

        <HowWorks />

        <ChooseUs />

        <Product />
        <CaursalSmall />

        <SidebarTesting3
          heading={"Categories"}
          body={"Monopoly Franchise"}
          body1={"Eye's  Drops  Franchises"}
          body2={"Denatal Products Franchise"}
          body3={"Injectable Franchise "}
          image={Monoply}
          image1={EyeDrops}
          image2={Dental}
          image3={Injectable}
        />
        <CaursalSmallThird />

        <SidebarTesting3
          heading={"PCD Pharma Franchise"}
          body={"Pharma Manufacture"}
          body1={"Derma Manufacture"}
          body2={"Contract Manufacture"}
          body3={"HandWash Manufacture "}
          image={Pharma}
          image1={Derma}
          image2={Contract}
          image3={HandWash}
        />
        <CaursalSmallDerma />

        <HappyCilents />

        <ContactUs />

        <GoalsValues />

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <ComapnyCarousel
            count={5}
            styles={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none" },
          }}
        >
          <ComapnyCarousel
            count={2}
            styles={{
              height: "100%",
              width: "265px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
        >
          <ComapnyCarousel
            count={1}
            styles={{
              height: "100%",
              width: "265px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
        </Box>
      </Container>
    </>
  );
}
