import React from "react";

import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";
import { Mail, PhoneInTalkSharp } from "@mui/icons-material";
import { Container, Hidden, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles({
  section1: {
    display: "inline-flex",

    padding: "10px 0px",
  },

  mainDiv: {
    display: "flex",
    background: "#d9f7e0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Container: {
    display: "flex !important",
    // padding: "0 !important",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
function Topbar() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Container maxWidth="xl" className={classes.Container}>
        <div className={classes.section1}>
          <Typography pr={2}>
            <a
              href="mailto:Info@tru-web.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                paddingRight: "15px",
              }}
            >
              <Mail
                style={{
                  color: "#0c8540",
                  marginLeft: "25px",
                  marginRight: "7px",
                }}
              />
              <Hidden smDown>Info@tru-web.com</Hidden>
            </a>
          </Typography>
          <Typography>
            <a
              href="tel:8628825697"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                // paddingRight: "908px",
              }}
            >
              <PhoneInTalkSharp
                style={{ color: "#0c8540", marginRight: "7px" }}
              />
              <Hidden smDown>+91-8628825697</Hidden>
            </a>
          </Typography>
        </div>

        <div className={classes.section1}>
          <Typography>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                paddingRight: "25px",
              }}
            >
              <FacebookIcon style={{ color: "#0c8540" }} />
              {/* <Hidden smDown>Fb.com/tru-webmedia</Hidden> */}
            </a>
          </Typography>

          <Typography>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                paddingRight: "25px",
              }}
            >
              <InstagramIcon style={{ color: "#0c8540" }} />
              {/* <Hidden smDown>Instagram.com/tru-webmedia</Hidden> */}
            </a>
          </Typography>

          <Typography>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                paddingRight: "25px",
              }}
            >
              <TwitterIcon style={{ color: "#0c8540" }} />
              {/* <Hidden smDown>Twitter.com/tru-webmedia</Hidden> */}
            </a>
          </Typography>

          <Typography>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0c8540",
                textDecoration: "none",
                paddingRight: "25px",
              }}
            >
              <LinkedInIcon style={{ color: "#0c8540" }} />
              {/* <Hidden smDown>LinkedIn.com/tru-webmedia</Hidden> */}
            </a>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
export default Topbar;
