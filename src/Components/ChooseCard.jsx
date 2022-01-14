import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CardActionArea } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ChooseCard(props) {
  return (
    <CardActionArea>
      <Card sx={props.sx} variant="outlined" raised>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography
            variant="h3"
            align="center"
            component="div"
            sx={{ pb: 2, pt: 2 }}
          >
            {props.heading}
          </Typography>

          <Typography align="center" variant="subtitle1">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Box textAlign="center">
            <Button variant="contained" sx={{ backgroundColor: "#f8b500" }}>
              Learn More
            </Button>
          </Box>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}
