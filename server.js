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
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")());

//Controllers//
app.use("/userhome", require("./controllers/userhomeController"));
app.use("/quiz", require("./controllers/quizController"));
app.use("/search", require("./controllers/searchController"));

//Routes //
//Route: render index.ejs//
app.get("/", async (req, res) => {
  res.render("index");
});

// Route: Create new user OR login -in user's table//
app.post("/", async (req, res) => {
  try {
    //Make sure they have entered text into the inputs
    if (
      req.body.username === "" ||
      req.body.password === ""
      // || req.body.username === db.user.username
    ) {
      console.log("no go 😢");
      return res.redirect("/");
    }
    //find or create users
    const [user, created] = await db.user.findOrCreate({
      where: { username: req.body.username, password: req.body.password },
    });
    if (created) {
      res.cookie("userId", user.id);
      res.render("./userhome/userhome", {
        user: `❇ Welcome ${req.body.username}. You've created a new account.❇ `,
      });
    } else if (!created) {
      res.cookie("userId", user.id);
      console.log(`🐟 🐟 🐟  Welcome back ${req.body.username}! `);
      res.render("./userhome/userhome", {
        user: `Welcome back ${req.body.username}!`,
      });
    }
  } catch (err) {
    console.log("🚒  🚒  🚒 ", err);
  }
});

//Route: userhome GET//
app.get("/userhome", async (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    console.log("no go 😢");
    return res.redirect("/");
  }
  const currentUser = await db.user.findOne({
    where: {
      id: userId,
    },
  });
  res.render("./userhome/userhome", {
    user: `${currentUser.dataValues.username} is logged on.`,
  });
});

///~~~~~~~~~~///Routes to Other Browser Pages///~~~~~~~~~~///
//Route: quiz GET//
app.get("/quiz", async (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    console.log("no go 😢. No cookies! 🍪 ");
    return res.redirect("/");
  }
  res.render("./quiz/quiz");
});
//Route: search GET//
app.get("/search", async (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    console.log("no go 😢. No cookies 🍪 !");
    return res.redirect("/");
  }
  res.render("./search/search");
});

///~~~~~~~~~~///Logout///~~~~~~~~~~///
//& remove cookies
app.get("/logout", async (req, res) => {
  res.clearCookie("userId");
  res.redirect("/");
});

//PORT//
app.listen(PORT, () => {
  console.log(`Server listening to 🚢 PORT${PORT}`);
  rowdyResults.print();
});
