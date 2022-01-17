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

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/contactus" element={<ContactUs2 />}></Route>

          <Route path="/testing" element={<BasicCat />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Container>
      <FooterTesting />
    </>
  );
}

export default App;
