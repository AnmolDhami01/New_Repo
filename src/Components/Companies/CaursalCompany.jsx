import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import NexbonBanner from "../../static/NexbonTesting.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "1",
    imgPath: `${NexbonBanner}`,
  },
  {
    label: "2",
    imgPath: `${NexbonBanner}`,
  },
  {
    label: "3",
    imgPath: `${NexbonBanner}`,
  },
];

function CaursalCompany() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <Box sx={{ maxWidth: 1520, flexGrow: 1 }}>
    <div>
      <Paper
        square
        sx={{
          display: "flex",
          alignItems: "center",
          //   height: 50,

          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
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
                  // height: "575px",
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
  );
}

export default CaursalCompany;
