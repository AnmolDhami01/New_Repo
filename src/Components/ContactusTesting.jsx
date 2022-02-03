import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PersonIcon from "@mui/icons-material/Person";
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
import EmailIcon from "@mui/icons-material/Email";
import axios from "./Config/axiosConfig";
import Joi from "joi-browser";
import Swal from "sweetalert2";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactusTesting({ history, match }) {
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

  const formSchema = {
    name: Joi.string().min(4).max(30).required().label("Name"),
    phone: Joi.string().min(10).max(14).required().label("phone"),
    message: Joi.string().min(15).max(300).required().label("message"),
    email: Joi.string().email().min(7).max(30).required().label("Email"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validatino
    let result = Joi.validate(formData, formSchema, { abortEarly: false });
    if (result.error) {
      setErrors(result.error.details);
    } else {
      setErrors(null);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        await setOpen(false);
        Swal.fire({
          title: "Message Sent!!!",
          text: "Message Sended Succesfully!",
          icon: "question",
          timer: 2000,
          timerProgressBar: true,
        });
      } else if (response.status === 400) {
        await setOpen(false);
        await Swal.fire({
          title: "Opps!!!",
          text: "Your Query has been already Submitted. We will try to contact you as soon as possible",
          icon: "warning",

          timer: 2000,
          timerProgressBar: true,
        });
      } else {
        await setOpen(false);
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
      <Button
        sx={{ color: "white", borderColor: "white" }}
        onClick={handleClickOpen}
        startIcon={<PersonIcon />}
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
                <EmailIcon />
              </Avatar>
              <Typography component="h1" variant="h5" fontFamily="Poppins">
                Get in Touch!!
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
                              (err) =>
                                err.context.key === "email" && err.message
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
                              (err) =>
                                err.context.key === "phone" && err.message
                            )
                          }
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} lg={12}>
                        <TextField
                          fullWidth
                          id="password"
                          multiline
                          rows={5}
                          label="Message"
                          label="message"
                          name="message"
                          autoComplete={false}
                          InputLabelProps={{
                            shrink: formData ? true : false,
                          }}
                          error={
                            errors &&
                            errors.find((er) => er.context.key === "message")
                          }
                          value={formData?.message}
                          helperText={
                            errors &&
                            errors.map(
                              (err) =>
                                err.context.key === "message" && err.message
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
              </form>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
