import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { Box } from "@mui/system";
export default function LeadsCard(props) {
  return (
    <Card
      sx={{
        backgroundColor: "#0c8540",

        maxWidth: 455,
        height: "220px",
        padding: "20px",
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
            sx={{ color: "white", fontFamily: "Poppins" }}
            align="center"
            gutterBottom
            variant="h4"
            component="div"
          >
            {props.heading}
          </Typography>
          <Typography
            align="center"
            sx={{ color: "white", fontFamily: "Poppins" }}
            gutterBottom
            variant="h6"
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
