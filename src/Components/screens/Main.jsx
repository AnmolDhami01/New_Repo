import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Box, Grid, Input, Paper, TextField } from "@mui/material";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

import Joi from "joi-browser";
import Swal from "sweetalert2";
import LoadingBar from "react-top-loading-bar";
import { singleFileUpload } from "../data/api";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main({ history, match }, props) {
  const [name, setName] = useState("");
  const [singleFile, setSingleFile] = useState("");
  const [typeP, setTypeP] = useState("");
  const [formP, setFormP] = useState("");
  const [packagingT, setPackagingT] = useState("");
  const [packagingS, setPackagingS] = useState("");
  const [compositions, setCompositions] = useState("");

  const [singleProgress, setSingleProgress] = useState(0);

  const [progress, setProgress] = useState(0);
  let navigate = useNavigate();

  const [errors, setErrors] = useState(null);
  const [mode, setMode] = useState("CREATE");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };

  const uploadSingleFile = async () => {
    try {
      console.log("hello");
      const formData = new FormData();
      formData.append("name", name);
      formData.append("typeP", typeP);
      formData.append("formP", formP);
      formData.append("packagingT", packagingT);
      formData.append("packagingS", packagingS);
      formData.append("compositions", compositions);
      formData.append("file", singleFile);
      console.log("hello1");
      const resp = await singleFileUpload(formData, singleFileOptions);
      console.log("hello2");
      console.log(resp);
      if (resp.status === 201) {
        await Swal.fire({
          title: "Product Added!!!",
          text: "Product Added Successfully!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/company/AddProduct", { replace: true });
      }
    } catch (error) {
      await Swal.fire({
        title: "Product Not Added!!!",
        text: "A Product with this name already exist OR Enter Fields Carefully!!",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    }
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
      <Container
        component="main"
        maxWidth="lg"
        sx={{ mt: 3 }}
        component={Paper}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 1,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0c8540" }}>
            <MedicalServicesIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily="Poppins">
            Enter Products Details!!
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
                    autoComplete="productName"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    id="name"
                    label="Product Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <TextField
                    autoComplete="typeOfProduct"
                    name="type"
                    onChange={(e) => setTypeP(e.target.value)}
                    fullWidth
                    id="type"
                    label="Type of Product"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <TextField
                    autoComplete="formOfProduct"
                    name="form"
                    onChange={(e) => setFormP(e.target.value)}
                    fullWidth
                    id="form"
                    label="Form of Product"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <TextField
                    autoComplete="packageT"
                    name="packageT"
                    fullWidth
                    onChange={(e) => setPackagingT(e.target.value)}
                    id="packageT"
                    label="Package Type of Product"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <TextField
                    autoComplete="packageS"
                    name="packageS"
                    fullWidth
                    onChange={(e) => setPackagingS(e.target.value)}
                    id="packageS"
                    label="Package Size of Product"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={12}>
                  <TextField
                    autoComplete="compositions"
                    name="compositions"
                    fullWidth
                    onChange={(e) => setCompositions(e.target.value)}
                    id="compositions"
                    label="Compositions of Product"
                    autoFocus
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    label="Compositions of Product"
                    type="file"
                    onChange={(e) => SingleFileChange(e)}
                  />
                  {/* <Button
                      variant="contained"
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      label="Compositions of Product"
                      type="file"
                     
                    >
                      Upload
                    </Button> */}
                </label>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item xs={12} sm={12} lg={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#0c8540" }}
                    onClick={() => uploadSingleFile()}
                  >
                    ADD PRODUCT
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* </DialogContent>
      </Dialog> */}
    </div>
  );
}
