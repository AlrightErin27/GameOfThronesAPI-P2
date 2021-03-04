const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

// router.get("/", async (req, res) => {
//     const searchedName = req.body.searched_name;
//     try{
//         const GotUrl = `https://www.anapioficeandfire.com/api/characters?name=${searchedName}`;
//         const response = await axios.get(GotUrl);
//         const character = response.data
//     } catch(err){
//         console.log("🐞 ", err)
//     }
// });




module.exports = router;
// <% if (searchResults) { %> 
//     <%= searchResults %>
//      <% } %>