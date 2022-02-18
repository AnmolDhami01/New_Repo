import React from "react";
import { render } from "react-dom";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Typography } from "@mui/material";
Chart.register(CategoryScale);
const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Total Generated Leads",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgb(217,247,224,0.6)",
      borderColor: "rgb(12,133,64,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(12,133,64,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(12,133,64,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [8, 10, 9, 5, 8, 12, 8],
    },
  ],
};

//const myRef = React.createRef();
const lineOptions = {
  onClick: (e, element) => {
    if (element.length > 0) {
      var ind = element[0]._index;
      alert(ind);
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        // stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback(value) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(".");
            return `Rp.${value}`;
          },
        },
      },
    ],
  },
};

const styles = {
  fontFamily: "Poppins",
  //   textAlign: "center",
};

const Chartjs = () => (
  <div style={styles}>
    <Typography
      variant="h5"
      sx={{ pb: 2, pt: 2, fontFamily: "Poppins", fontWeight: "800" }}
    >
      Weekly Lead Chart
    </Typography>
    <Line data={data} options={lineOptions} />
  </div>
);

export default Chartjs;
