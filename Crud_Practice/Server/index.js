const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const workRoute = require("./route/Workroute");
const port = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use("/worker", workRoute);

mongoose
  .connect("mongodb://localhost:27017/workerDB")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("server started on port " + port);
});

