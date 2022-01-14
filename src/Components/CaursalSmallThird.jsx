import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import THIRDBANNER1 from "../static/THIRDBANNER1.png";
import THIRDBANNER2 from "../static/THIRDBANNER2.png";
import THIRDBANNER3 from "../static/THIRDBANNER3.png";
import { Container } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: `${THIRDBANNER1}`,
  },
  {
    imgPath: `${THIRDBANNER2}`,
  },
  {
    imgPath: `${THIRDBANNER3}`,
  },
];

export default function CaursalSmallThird() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <Box sx={{ maxWidth: 1520, flexGrow: 1 }}>
    <Container maxWidth="xl" sx={{ pt: 5 }}>
      <div>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            //   height: 50,

            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    height: "20%",
                    overflow: "hidden",
                    width: "100%",
                    //   width: 600,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        {/* </Box> */}
      </div>
    </Container>
  );
}
