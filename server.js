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

//Controllers//
app.use("/userhome", require("./controllers/userhomeController"));

//Routes //

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

//Route: render index.ejs//
app.get("/", async (req, res) => {
  res.render("index", { alert: null});
});

//Route: userhome GET//
app.get("/userhome", async (req, res) => {});

// Route: Create new user OR login -in user's table//
app.post("/", async (req, res) => {
  try {
    //Make sure they have entered text into the inputs
    if (req.body.username === "" || req.body.password === "") {
      console.log("no go 😢");
      return res.redirect("/");
    }
    //find or create users
    const [user, created] = await db.user.findOrCreate({
      where: { username: req.body.username, password: req.body.password },
    });
    if (created) {
      res.render("userhome", {
        user: `❇ Welcome ${req.body.username}. You've created a new account.❇ `,
      });
    } else if (!created) {
      console.log(`🐟 🐟 🐟  Welcome back ${req.body.username}! `);
      res.render("userhome", {
        user: `😍  Welcome back ${req.body.username}!😍  `,
      });
    }
  } catch (err) {
    console.log("🚒  🚒  🚒 ", err);
  }
});

//PORT//
app.listen(PORT, () => {
  console.log(`Server listening to 🚢 PORT${PORT}`);
  rowdyResults.print();
});
