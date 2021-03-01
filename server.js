//Required Modules and Variables//
require("dotenv").config();
const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const rowdy = require("rowdy-logger");
const axios = require("axios");
const morgan = require("morgan");
const cryptoJS = require("crypto-js");
const db = require("./models");

//Variables//
const app = express();
const rowdyResults = rowdy.begin(app);
const PORT = process.env.PORT || 3000;

//Middleware and config//
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")());

//Routes//
app.get("/", (req, res) => {
  res.send("🌞 Hello World!🌞 ");
});
app.listen(PORT, () => {
  console.log(`Server is listening to port🚢 : ${PORT}`);
});
