import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Container, TextField, Paper, Typography, Button } from "@mui/material";
import { padding } from "@mui/system";

export default function FormGroupPage(props) {
  return (
    <Container
      maxWidth="md"
      sx={{ maxWidth: "480px !important", padding: "0 !important" }}
      component={Paper}
    >
      <div style={{ border: "2px solid #0c8540", padding: "20px" }}>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ backgroundColor: "#0c8540", color: "white" }}
          fontFamily="Poppins"
        >
          Post your Requirement
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            You are looking for?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="PCDFranchise"
              control={<Radio />}
              label="PCD/Pharma Franchise"
            />
            <FormControlLabel
              value="3rdPartyManufacture"
              control={<Radio />}
              label="3rd Party Manufacture"
            />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">
            Drug Licence?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

          <TextField
            sx={{ pb: 2 }}
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="number"
            autoComplete="number"
          />

          <TextField
            required
            fullWidth
            id="phone"
            multiline
            rows={5}
            label="Message"
            name="number"
            autoComplete="number"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#0c8540", color: "white", mt: 2 }}
            onClick={props.onClick}
          >
            Send Requirement
          </Button>
          {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
        </FormControl>
      </div>
    </Container>
  );
}
