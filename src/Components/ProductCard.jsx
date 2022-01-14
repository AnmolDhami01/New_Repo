import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AyurvedicIcon from "../static/AyurvedicIcon.png";

import { Box } from "@mui/system";
export default function ProductCard(props) {
  return (
    <Card
      sx={{
        backgroundColor: "#0c8540",

        maxWidth: 355,
        height: "250px",
        padding: "50px",
        borderRaduis: "20px !important",
      }}
    >
      <CardActionArea>
        <Box textAlign="center">
          <Button
            variant="contained"
            textAlign="center"
            sx={{
              backgroundColor: "#f8b500",
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
            sx={{ color: "white" }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            {props.heading}
          </Typography>
          <Typography
            align="center"
            gutterBottom
            variant="body1"
            component="div"
          >
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
