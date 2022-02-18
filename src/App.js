import "./App.css";
import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import Chartjs from "./Components/dashboard/Chartjs";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import CreateUser from "./Components/CreateUser";
import { Box } from "@mui/system";
import UserButton from "./Components/UserButton";
import Profile from "./Components/Profile";
import CreateComapany from "./Components/CreateCompany";
import FileUploadScreen from "./Components/screens/FileUploadScreen";
import MainScreen from "./Components/screens/MainScreen";
import Main from "./Components/screens/Main";
import Poppins from "./fonts/Poppins-Black.ttf";
import ProductList from "./Components/screens/ProductList";
import DashboardSidebar from "./Components/dashboard/DashboardSidebar";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0C8540",
    },
    secondary: {
      main: "#F8B500",
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  },
});

export default function App() {
  const [progress, setProgress] = useState(0);
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  const apiKey = process.env.REACT_APP_NEXBON_TOKEN; // TAKING VALUE FROM .env.local
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <LoadingBar color="red" progress={progress} height={3} />
          <Topbar />
          <Navbar setProgress={setProgress} />

          {/* <Box sx={{ py: 5 }} display={{ xs: "none", lg: "none" }}>
            <CreateUser  />
          </Box> */}

          <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
            {/* <DashboardSidebar /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/contactus" element={<ContactUs2 />}></Route>

              <Route path="/newCompany" element={<CreateComapany />}></Route>

              <Route path="/test" element={<MainScreen />}></Route>
              <Route path="/testing" element={<Main />}></Route>

              <Route
                path="/company/AddProduct"
                element={<ProductList />}
              ></Route>

              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/profile" element={<Profile />}></Route>

              <Route path="/company" element={<BasicCat />}></Route>
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
      </ThemeProvider>
    </>
  );
}
