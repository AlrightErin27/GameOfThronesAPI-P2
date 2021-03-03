const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

// //Read Search (by Name) Input//
router.post("/", async (req, res) => {
  const searchedName = req.body.searched_name;
  try {
    console.log("👾 👾 👾", searchedName);
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
  }
});

//GET API INFO//  //in ejs file make squids for 'searchResults'
// router.get("/", async (req, res) => {
//   try {
//     const GotUrl = "https://www.anapioficeandfire.com/api/characters/823";
//     const response = await axios.get(GotUrl);
//     console.log("👾 👾 👾 ", response.data);
//     const searchResults = response.data.name;

//     res.render("/search", { searchResults: searchResults });
//   } catch (err) {
//     console.log("🍎 🍎 🍎", err);
//     res.render("/search", { searchResults: "❗ Invalid search❗ " })
//   }
// });

module.exports = router;
