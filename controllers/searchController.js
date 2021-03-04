const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

//Read what was searched by name
router.post("/", async (req, res) => {
  const searchedName = req.body.searched_name;
  try {
    const GotUrl = `https://www.anapioficeandfire.com/api/characters?name=${searchedName}`;
    const response = await axios.get(GotUrl);
    const characters = await response.data
    console.log("👾",  characters[0].name );
    res.render("results/results.ejs", { characters:characters });
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
  }
});

//GET API INFO//  //in ejs file make squids for 'searchResults'
// router.get("/", async (req, res) => {
//   try {
//     const GotUrl = "https://www.anapioficeandfire.com/api/characters/823";
//     const response = await axios.get(GotUrl);
//     console.log(response.data);
//     const characters = response.data.name;
//     console.log("👾 👾 👾 ", response.data);
//     const searchResults = response.data.name;

//     res.render("index", { characters: characters });
//     res.render("/search", { searchResults: searchResults });
//   } catch (err) {
//     console.log("🍎 🍎 🍎", err);
//     res.render("/search", { searchResults: "❗ Invalid search❗ " })
//   }
// });

module.exports = router;