const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

//GET API INFO//  //in ejs file make squids for 'characters'
// app.get("/", async (req, res) => {
//   try {
//     const GotUrl = "https://www.anapioficeandfire.com/api/characters/823";
//     const response = await axios.get(GotUrl);
//     console.log(response.data);
//     const characters = response.data.name;

//     res.render("index", { characters: characters });
//   } catch (err) {
//     console.log("🍎 🍎 🍎", err);
//   }
// });
module.exports = router;
