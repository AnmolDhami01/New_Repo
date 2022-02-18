import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0c8540",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  Mobile,
  Whatsapp,
  Location,
  Category,
  Email,
  Remark,
  Company
) {
  return { name, Mobile, Whatsapp, Location, Category, Email, Remark, Company };
}

const rows = [
  createData(
    "Rajat",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Anmol",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Nitin",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Abhishek",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Nikhil",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Aman",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Mukul",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
  createData(
    "Prince",
    6283988827,
    6283988827,
    "Chandigarh",
    "Third Party",
    "rajat@gmail.com",
    "In 15 Days",
    "NexBon"
  ),
];

export default function DashboardTables() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ pb: 2, fontFamily: "Poppins", fontWeight: "800" }}
      >
        Recent Trancsation
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Mobile</StyledTableCell>
                <StyledTableCell align="right">Whatsapp</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Company</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Mobile}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Whatsapp}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Location}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">{row.Remark}</StyledTableCell>
                  <StyledTableCell align="right">{row.Company}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
