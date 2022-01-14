import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Card2(props) {
  return (
    <Link to="/change" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 845, borderRaduis: "20px" }}>
        <CardMedia
          component="img"
          alt="Photos"
          height="288"
          image={props.image}
          style={props.style}
        />
        <CardContent style={{ paddingBottom: "10px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            fontFamily="Poppins"
            style={{
              textDecoration: "none",
              paddingBottom: "0px",
              fontWeight: "800",
              fontSize: "1.2rem",
            }}
          >
            {props.heading}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
