const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

//Read what was searched by name
router.post("/", async (req, res) => {
  const searchedName = req.body.searched_name; //<~~~ get name from search form
  try {
    const GotUrl = `https://www.anapioficeandfire.com/api/characters?name=${searchedName}`;
    const response = await axios.get(GotUrl);
    const characters = await response.data //<~~~ characters is an array! example: characters[0].name
    res.render("results/results.ejs", { characters: characters });
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
  }
});





module.exports = router;
