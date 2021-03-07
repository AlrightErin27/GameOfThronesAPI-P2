const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

//POSTS from form in Results.ejs to userfavorite DB//
//redirects to userhomepage//
router.post("/", async (req, res) => {
  try {
    const usersFavs = await db.userfavorite.findOrCreate({
      where: {
        name: req.body.name,
        userId: req.cookies.userId,
      },
    });
    console.log("Hi Bitch")
    res.redirect(`/userhome`, { favList : [] });
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
  }
});

module.exports = router;
