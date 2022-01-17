import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FormGroupFile(props) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="PCD/PharmaFranchise"
          control={<Checkbox />}
          label=""
          labelPlacement="end"
        />

        <FormControlLabel
          value="3rdPartyManufacture"
          control={<Checkbox />}
          label=""
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
