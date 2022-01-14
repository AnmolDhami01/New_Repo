import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HoveredLinks from "./HoveredLinks";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function HoverLinks(props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <HoveredLinks
              text={props.text}
              text1={props.text1}
              text2={props.text2}
              text3={props.text3}
            />
          </React.Fragment>
        }
      >
        <Button
          variant="outlined"
          sx={{
            color: "#0C8540",
            fontFamily: "Poppins",
            background: "white",
            height: "35px",
            "&:hover": {
              backgroundColor: "white",
            },
            "&:focus": {
              backgroundColor: "white",
            },
          }}
          endIcon={<ExpandMoreIcon />}
        >
          {props.heading}
        </Button>
        {/* <Typography fontFamily="Poppins">{props.heading}</Typography> */}
      </HtmlTooltip>
    </div>
  );
}
