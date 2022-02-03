import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BootstrapMulti.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { data, multiData } from "./data";

import Rating from "@mui/material/Rating";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ backgroundColor: "#0c8540" }}
    >
      <ArrowBackIos
        style={{ color: "white", backgroundColor: "#0c8540", fontSize: "30px" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ backgroundColor: "#0c8540" }}
    >
      <ArrowForwardIos
        style={{ color: "white", backgroundColor: "#0c8540", fontSize: "30px" }}
      />
    </div>
  );
};

const BootstrapMultiCarousel = (props) => {
  const label = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { company, styles } = props;
  return (
    <div
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={props.count}
          slidesToScroll={1}
          dots
        >
          {multiData.map((item) => (
            <Card key={label} item={item} styles={styles} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: 10,
          padding: "0 10px",
          // width: 210,
          boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        {/* <span style={{ float: "right", padding: "5px" }}>
        <FavoriteBorderIcon style={{ color: "gray" }} />
    </span> */}
        <img
          className="multi__image"
          src={item}
          alt=""
          style={{
            width: "100%",
            height: "120px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            padding: "5px 0",
            color: "black",
            fontWeight: 400,
          }}
        >
          Top Pharma Compaines
        </p>
        {/* <Rating precision={0.5} size="small" />
      <p>
      <span
      style={{
          textDecoration: "line-through",
          color: "gray",
          marginRight: 7,
          fontWeight: 300,
        }}
        >
        $7170
        </span>
        <span style={{ color: "gray", fontWeight: 700 }}>$7071</span>
    </p> */}
        <Link to="/company">
          <button>View More</button>
        </Link>
      </div>
    </>
  );
};

export default BootstrapMultiCarousel;
