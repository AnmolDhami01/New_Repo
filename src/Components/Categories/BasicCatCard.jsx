import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import NexbonLifesciences from "../../static/NexbonLifesciences.png";
import CallIcon from "@mui/icons-material/Call";
import BungalowIcon from "@mui/icons-material/Bungalow";
import AddLocationIcon from "@mui/icons-material/AddLocation";
export default function BasicCatCard(props) {
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="green iguana"
          style={props.sxCard}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Button
            size="small"
            sx={{ color: "black" }}
            startIcon={<AddLocationIcon />}
          >
            Panchkula
          </Button>
          <Typography variant="subtitle2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#0c8540" }}
          startIcon={<CallIcon />}
        >
          Contact
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#F8B500" }}
          startIcon={<BungalowIcon />}
        >
          Catlog
        </Button>
      </CardActions>
    </Card>
  );
}