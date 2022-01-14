import { Container } from "@mui/material";
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

export default function Home() {
  return (
    <>
      <Container sx={{ padding: "0 !important" }} maxWidth="xl">
        <Caursal />

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
        <CaursalSmall />

        <HappyCilents />
        <ContactUs />
        <GoalsValues />
      </Container>
    </>
  );
}
