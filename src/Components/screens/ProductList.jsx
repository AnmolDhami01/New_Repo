import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import FileUploadScreen from "./FileUploadScreen";
import { getSingleFiles, getMultipleFiles } from "../data/api";
import {
  Box,
  Grid,
  Input,
  TextField,
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function ProductList() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#0c8540",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  useEffect(() => {
    getSingleFileslist();
    getMultipleFilesList();
  }, []);
  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            pt: 3,
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            sx={{ fontFamily: "Poppins", fontWeight: "800" }}
          >
            All Products!!
          </Typography>
        </Box>

        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {singleFiles.map((file, index) => (
              <>
                <CssBaseline />
                <Grid item container component={Paper} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={12} lg={4}>
                    <img
                      src={`http://localhost:5000/${file.filePath}`}
                      alt="img"
                      style={{ maxWidth: "350px", height: "200" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} lg={7.5}>
                    <Typography
                      component="h2"
                      variant="h4"
                      color="primary"
                      sx={{ fontFamily: "Poppins", fontWeight: "800", pb: 1 }}
                    >
                      {file.name}
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table aria-label="customized table">
                        <TableBody>
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Type of Product
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {file.typeP}
                            </StyledTableCell>
                          </StyledTableRow>

                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Form of Product
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {file.formP}
                            </StyledTableCell>
                          </StyledTableRow>

                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Packaging type of Product
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {file.packagingT}
                            </StyledTableCell>
                          </StyledTableRow>

                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Packaging size of Product
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {file.packagingS}
                            </StyledTableCell>
                          </StyledTableRow>

                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              Compositions
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {file.compositions}
                            </StyledTableCell>
                          </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* <div className="container mt-2">
      <div className="row">
      <div className="col-6">
            <h4 className="text-success font-weight-bold">All Products</h4>
            <div className="row">
              {singleFiles.map((file, index) => (
                <div className="col-6">
                  <h6 className="text-danger font-weight-bold">{file.name}</h6>
                  <div className="card mb-2 border-0 p-0">
                    <img
                      src={`http://localhost:5000/${file.filePath}`}
                      height="200"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProductList;
