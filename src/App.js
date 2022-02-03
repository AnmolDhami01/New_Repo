import "./App.css";
import Navbar from "./Components/Navbar";
import { createTheme } from "@mui/material/styles";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

import FooterTesting from "./Components/FooterTesting";

import ContactUs2 from "./Components/ContactUs";

import { Container } from "@mui/material";
import SiginTesting from "./Components/SiginTesting";
import BasicCat from "./Components/Categories/BasicCat";
import Nexbon from "./Components/Companies/Nexbon";
import Testing from "./Components/testing";
import LinksTesting from "./Components/LinksTesting";
import JM from "./Components/Companies/JM";
import Acumin from "./Components/Companies/Acumin";
import Stavic from "./Components/Companies/Stavic";
import Synak from "./Components/Companies/Synak";
import Elkos from "./Components/Companies/Elkos";
import Vasoderma from "./Components/Companies/Vasoderma";
import Glompy from "./Components/Companies/Glompy";
import Alencure from "./Components/Companies/Alencure";
import NavCat from "./Components/NavCat";
import CreateUserTesting from "./Components/CreateUserTesting";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SiginTesting1 from "./Components/SiginTesting1";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0C8540",
    },
    secondary: {
      main: "#F8B500",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default function App() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <>
        <Topbar />
        <Navbar />

        <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/contactus" element={<ContactUs2 />}></Route>

            <Route
              path="/company"
              element={<BasicCat />}
              preload={scrollTop}
            ></Route>

            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="test" element={<SiginTesting1 />}></Route>

            <Route path="/company/Nexbon" element={<Nexbon />}></Route>
            <Route path="/company/JM" element={<JM />}></Route>
            <Route path="/company/Acumin" element={<Acumin />}></Route>
            <Route path="/company/Stavic" element={<Stavic />}></Route>
            <Route path="/company/Synak" element={<Synak />}></Route>
            <Route path="/company/Elkos" element={<Elkos />}></Route>
            <Route path="/company/Vasoderma" element={<Vasoderma />}></Route>
            <Route path="/company/Glompy" element={<Glompy />}></Route>
            <Route
              path="/company/CYNAKLIFESCIENCES"
              element={<Alencure />}
            ></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Container>
        <FooterTesting />
      </>
      <>
        <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
          <Routes></Routes>
        </Container>
      </>
    </>
  );
}
