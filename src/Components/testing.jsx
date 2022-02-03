import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [
  {
    id: 1,
    link: "/1",
  },
  {
    id: 2,
    link: "/2",
  },
  {
    id: 3,
    link: "/3",
  },
  {
    id: 4,
    link: "/4",
  },
  {
    id: 5,
    link: "/5",
  },
  {
    id: 6,
    link: "/6",
  },
  {
    id: 7,
    link: "/7",
  },
  {
    id: 8,
    link: "/8",
  },
];

export default function Testing() {
  return (
    <>
      <CssBaseline>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.link} size="small">
                      View
                    </Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CssBaseline>
    </>
  );
}
