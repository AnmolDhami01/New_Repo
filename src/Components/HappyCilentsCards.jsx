import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AyurvedicIcon from "../static/AyurvedicIcon.png";

import { Box } from "@mui/system";
export default function HappyCilentsCards(props) {
  return (
    <Card
      sx={{
        maxWidth: 455,
        minHeight: 250,
        height: "250px",
        padding: "35px",
        borderRaduis: "20px !important",
      }}
    >
      <Box textAlign="center">
        <Button
          variant="contained"
          textAlign="center"
          sx={{
            backgroundColor: "#0c8540",
            height: "86px",
            borderRadius: "45px",
          }}
        >
          <CardMedia
            component="img"
            height="62px"
            image={props.image}
            alt="green iguana"
          />
        </Button>
      </Box>
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          sx={{ fontFamily: "Poppins", fontWeight: "700" }}
          component="div"
        >
          {props.heading}
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="body1"
          sx={{ fontFamily: "Poppins", fontWeight: "600" }}
          component="div"
        >
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
