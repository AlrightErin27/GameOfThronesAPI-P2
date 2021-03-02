//Required Modules and Variables//
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
const PORT = 3000;

//Middleware and config//
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")());

//Routes //
//Test GET Route//
// app.get("/", (req, res) => {
//   res.send("🌞 Hello World!🌞 ");
// });

//GET API INFO//
app.get("/", async (req, res) => {
  try {
    const GotUrl = "https://www.anapioficeandfire.com/api/characters/823";
    const response = await axios.get(GotUrl);
    const characters = response.data.results;

    res.render("index", { characters: characters });
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
    res.render("index", { characters: [] });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port🚢 : ${PORT}`);
});
