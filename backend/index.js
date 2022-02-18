const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
connectToMongo();
const app = express();
const path = require("path");
const fileRoutes = require("./routes/file-upload-routes");
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/company", require("./routes/company"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/company/upload", fileRoutes.routes);

var parse = require("./routes/contact");
app.use("/api", parse);

// app.use("/api/contact", require("./routes/contact"));

app.listen(process.env.PORT || port, () => {
  console.log(`PharamaWeb backend listening at http://localhost:${port}`);
});
