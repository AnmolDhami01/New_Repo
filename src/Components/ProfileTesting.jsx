import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SiginTesting from "./SiginTesting";
import axios from "./Config/axiosConfig";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import LoadingBar from "react-top-loading-bar";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateUser({ history, match, setProgress }) {
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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const formSchema = {
    name: Joi.string().min(4).max(30).required().label("Name"),
    phone: Joi.string().min(10).max(14).required().label("phone"),
    password: Joi.string().min(7).max(30).required().label("Password"),
    email: Joi.string().email().min(7).max(30).required().label("Email"),
    company: Joi.string().min(3).max(30).required().label("Company"),
    city: Joi.string().min(3).max(30).required().label("City"),
    state: Joi.string().min(3).max(30).required().label("State"),
  };

  return (
    <div>
      <Button
        sx={{ color: "white", borderColor: "white" }}
        onClick={handleClickOpen}
        variant="outlined"
        startIcon={<PersonAddAltSharpIcon />}
      >
        Join Free
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#0c8540" }}>
                <PersonAddAltSharpIcon />
              </Avatar>
              <Typography component="h1" variant="h5" fontFamily="Poppins">
                Create An Account
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        autoComplete="name"
                        name="name"
                        fullWidth
                        id="name"
                        label="Full Name"
                        autoFocus
                        InputLabelProps={{
                          shrink: formData ? true : false,
                        }}
                        value={formData?.name}
                        error={
                          errors &&
                          errors.find((er) => er.context.key === "name")
                        }
                        helperText={
                          errors &&
                          errors.map(
                            (err) => err.context.key === "name" && err.message
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        autoComplete="email"
                        name="email"
                        fullWidth
                        label="Email Address"
                        autoFocus
                        value={formData?.email}
                        InputLabelProps={{
                          shrink: formData ? true : false,
                        }}
                        error={
                          errors &&
                          errors.find((er) => er.context.key === "email")
                        }
                        helperText={
                          errors &&
                          errors.map(
                            (err) => err.context.key === "email" && err.message
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        autoComplete="company"
                        name="company"
                        fullWidth
                        id="company"
                        label="Company Name"
                        autoFocus
                        InputLabelProps={{
                          shrink: formData ? true : false,
                        }}
                        value={formData?.company}
                        error={
                          errors &&
                          errors.find((er) => er.context.key === "company")
                        }
                        helperText={
                          errors &&
                          errors.map(
                            (err) =>
                              err.context.key === "company" && err.message
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={6} sm={6} lg={6}>
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
                          errors &&
                          errors.find((er) => er.context.key === "city")
                        }
                        helperText={
                          errors &&
                          errors.map(
                            (err) => err.context.key === "city" && err.message
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={6} sm={6} lg={6}>
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

                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        autoComplete="phone"
                        name="phone"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        autoFocus
                        InputLabelProps={{
                          shrink: formData ? true : false,
                        }}
                        value={formData?.phone}
                        error={
                          errors &&
                          errors.find((er) => er.context.key === "phone")
                        }
                        helperText={
                          errors &&
                          errors.map(
                            (err) => err.context.key === "phone" && err.message
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete={false}
                        InputLabelProps={{
                          shrink: formData ? true : false,
                        }}
                        error={
                          errors &&
                          errors.find((er) => er.context.key === "password")
                        }
                        value={formData?.password}
                        helperText={
                          errors &&
                          errors.map(
                            (err) =>
                              err.context.key === "password" && err.message
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
                        {mode === "CREATE" ? "SIGN UP" : "UPDATE"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
