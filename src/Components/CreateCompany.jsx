import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Box, Grid, TextField } from "@mui/material";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import axios from "./Config/axiosConfig";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import LoadingBar from "react-top-loading-bar";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateComapany({ history, match }) {
  const [progress, setProgress] = useState(0);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [mode, setMode] = useState("CREATE");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("../", { replace: true });
    }
    // eslint-disable-next-line
  }, []);

  const formSchema = {
    companyName: Joi.string().min(4).max(30).required().label("Company Name"),
    firstName: Joi.string().min(4).max(30).required().label("First Name"),
    lastName: Joi.string().min(4).max(30).required().label("Last Name"),
    city: Joi.string().min(4).max(30).required().label("City Name"),
    state: Joi.string().min(4).max(30).required().label("State Name"),
    pincode: Joi.string().min(4).max(30).required().label("Pincode Name"),
    natureofbusiness: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label("Nature of Business"),
    additionalbusiness: Joi.string()
      .min(4)
      .max(20)
      .required()
      .label("Additional Business"),
    companyceo: Joi.string().min(5).max(20).required().label("Company CEO"),
    registeredaddress: Joi.string()
      .min(7)
      .max(70)
      .required()
      .label("Registered Address"),
    aboutUs: Joi.string()
      .min(70)
      .max(500)
      .required()
      .label("About the Company"),
    companyregistrationnumber: Joi.string()
      .min(5)
      .max(70)
      .required()
      .label("Company Registration Number"),
    totalnumberofemployees: Joi.string()
      .min(1)
      .max(4)
      .required()
      .label("Total Number of Employees"),
    establishmentyear: Joi.string()
      .min(4)
      .max(5)
      .required()
      .label("Establishment Year"),
    companygstnumber: Joi.string()
      .min(4)
      .max(20)
      .required()
      .label("Company GST Number"),
    legalstatus: Joi.string().min(4).max(20).required().label("Legal Status"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validatino
    let result = Joi.validate(formData, formSchema, { abortEarly: false });
    if (result.error) {
      setErrors(result.error.details);
    } else {
      setErrors(null);

      setProgress(10);
      const response = await fetch(
        "http://localhost:5000/api/company/addcompany",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            nature: formData.natureofbusiness,
            additional: formData.additionalbusiness,
            ceo: formData.companyceo,
            aboutUs: formData.aboutUs,
            companyName: formData.companyName,
            firstName: formData.firstName,
            lastName: formData.lastName,
            Address: formData.registeredaddress,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            gstNumber: formData.companygstnumber,
            crn: formData.companyregistrationnumber,
            noEmployes: formData.totalnumberofemployees,
            yearEstablishment: formData.establishmentyear,
            legalStatus: formData.legalstatus,
          }),
        }
      );
      setProgress(30);
      const json = await response.json();
      console.log(json);
      setProgress(70);
      if (json.success) {
        // Save the auth token and redirect
        await setOpen(false);
        setProgress(100);
        navigate("../dashboard", { replace: true });
        Swal.fire({
          title: "Details Sent!!!",
          text: "Company Detail Sended Succesfully!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
      } else if (response.status === 400) {
        await setOpen(false);
        setProgress(100);
        await Swal.fire({
          title: "Opps!!!",
          text: "A Company with this name already exist. Try Again with diffrent Company name",
          icon: "warning",

          timer: 2000,
          timerProgressBar: true,
        });
      } else {
        await setOpen(false);
        setProgress(100);
        await Swal.fire({
          title: "Opps!!!",
          text: "Something went Wrong. Try Again Later",
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
        });
        setOpen(true);
      }
    }

    //api call
  };

  return (
    <div>
      <LoadingBar color="red" progress={progress} height={3} />
      {/* <Button
        sx={{ color: "white", borderColor: "white" }}
        onClick={handleClickOpen}
        startIcon={<ForwardToInboxIcon />}
        variant="outlined"
      >
        Post Requirment
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent> */}
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0c8540" }}>
            <LocationCityIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily="Poppins">
            Enter Your Company Details!!
          </Typography>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="companyName"
                      name="companyName"
                      fullWidth
                      id="companyName"
                      label="Company Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.companyName}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "companyName")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "companyName" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="firstName"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.firstName}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "firstName")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "firstName" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="lastName"
                      name="lastName"
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.lastName}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "lastName")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) => err.context.key === "lastName" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="city"
                      name="city"
                      fullWidth
                      id="city"
                      label="City Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.city}
                      error={
                        errors && errors.find((er) => er.context.key === "city")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) => err.context.key === "city" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="state"
                      name="state"
                      fullWidth
                      id="state"
                      label="State Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.state}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "state")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) => err.context.key === "state" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="pincode"
                      name="pincode"
                      fullWidth
                      id="pincode"
                      label="Pincode Name"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.pincode}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "pincode")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) => err.context.key === "pincode" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="natureofbusiness"
                      name="natureofbusiness"
                      fullWidth
                      id="natureofbusiness"
                      label="Nature of Business"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.natureofbusiness}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "natureofbusiness"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "natureofbusiness" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="additionalbusiness"
                      name="additionalbusiness"
                      fullWidth
                      label="Additional Business"
                      autoFocus
                      value={formData?.additionalbusiness}
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "additionalbusiness"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "additionalbusiness" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="companyceo"
                      name="companyceo"
                      fullWidth
                      id="companyceo"
                      label="Company CEO"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.companyceo}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "companyceo")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "companyceo" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="registeredaddress"
                      name="registeredaddress"
                      fullWidth
                      id="registeredaddress"
                      label="Registered Address"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.registeredaddress}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "registeredaddress"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "registeredaddress" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="companyregistrationnumber"
                      name="companyregistrationnumber"
                      fullWidth
                      id="companyregistrationnumber"
                      label="Company Registration Number"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.companyregistrationnumber}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "companyregistrationnumber"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "companyregistrationnumber" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="totalnumberofemployees"
                      name="totalnumberofemployees"
                      fullWidth
                      id="totalnumberofemployees"
                      label="Total Number of Employees"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.totalnumberofemployees}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "totalnumberofemployees"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "totalnumberofemployees" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="establishmentyear"
                      name="establishmentyear"
                      fullWidth
                      id="establishmentyear"
                      label="Establishment Year"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.establishmentyear}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "establishmentyear"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "establishmentyear" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="companygstnumber"
                      name="companygstnumber"
                      fullWidth
                      id="companygstnumber"
                      label="Company GST Number"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.companygstnumber}
                      error={
                        errors &&
                        errors.find(
                          (er) => er.context.key === "companygstnumber"
                        )
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "companygstnumber" &&
                            err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={4}>
                    <TextField
                      autoComplete="legalstatus"
                      name="legalstatus"
                      fullWidth
                      id="legalstatus"
                      label="Legal Status"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.legalstatus}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "legalstatus")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) =>
                            err.context.key === "legalstatus" && err.message
                        )
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={12}>
                    <TextField
                      autoComplete="aboutUs"
                      name="aboutUs"
                      fullWidth
                      multiline
                      rows={5}
                      id="aboutUs"
                      label="About the Company"
                      autoFocus
                      InputLabelProps={{
                        shrink: formData ? true : false,
                      }}
                      value={formData?.aboutUs}
                      error={
                        errors &&
                        errors.find((er) => er.context.key === "aboutUs")
                      }
                      helperText={
                        errors &&
                        errors.map(
                          (err) => err.context.key === "aboutUs" && err.message
                        )
                      }
                    />
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end">
                  <Grid item xs={12} sm={12} lg={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, backgroundColor: "#0c8540" }}
                    >
                      CREATE COMPANY PROFILE
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
      {/* </DialogContent>
      </Dialog> */}
    </div>
  );
}
