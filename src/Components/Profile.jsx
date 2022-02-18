import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
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
  Button,
  Skeleton,
  Dialog,
  DialogContent,
} from "@mui/material";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile({ setProgress }) {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    state: "",
  });

  const getUser = async () => {
    // API Call
    const response = await fetch(
      `https://pharmawebb.herokuapp.com/api/auth/getuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setUser({
      name: json.name,
      email: json.email,
      phone: json.phone,
      company: json.company,
      city: json.city,
      state: json.state,
    });
    setLoading(false);

    console.log(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        <Button
          onClick={handleClickOpen}
          endIcon={<AccountCircleIcon />}
          sx={{ fontFamily: "Poppins" }}
        >
          Profile
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
              {loading ? (
                <>
                  <Box sx={{ width: 300 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={true} />
                    <CssBaseline />
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "#0c8540" }}>
                      <AccountCircleIcon />
                    </Avatar>
                    <Typography
                      component="h1"
                      variant="h5"
                      fontFamily="Poppins"
                    >
                      User Details
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
                              value={user.name}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} lg={12}>
                            <TextField
                              autoComplete="email"
                              name="email"
                              fullWidth
                              label="Email Address"
                              autoFocus
                              value={user.email}
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
                              value={user.phone}
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
                              value={user.company}
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
                              value={user.city}
                            />
                          </Grid>

                          <Grid item xs={6} sm={6} lg={6}>
                            <TextField
                              autoComplete="state"
                              name="state"
                              fullWidth
                              id="state"
                              label="State Number"
                              autoFocus
                              value={user.state}
                              sx={{ pb: 2 }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
