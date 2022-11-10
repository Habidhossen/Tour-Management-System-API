const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db_conn");
const port = process.env.PORT || 4000;
const tourRouter = require("./routes/tour.route");

const app = express();
app.use(express.json());
app.use(cors());

// Listening Server
app.listen(port, () => {
  console.log("listening on port", port);
});

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Travel Management System API Server");
});

// Tour Route
app.use("/api", tourRouter);

// If Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

// if Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something is broke!",
  });
});
