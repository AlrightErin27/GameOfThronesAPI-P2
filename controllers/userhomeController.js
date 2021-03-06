const router = require("express").Router();
const { default: axios } = require("axios");
const { render } = require("ejs");
const db = require("../models");

router.post("/", async (req, res) => {
  try {
    const [newFav, created] = await db.userfavorite.findOrCreate({
      where: {
        name: req.body.name,
        userId: req.cookies.userId,
      },
    });
    // console.log(created);
    // res.locals.user.addCharacter(newFav);
    res.redirect(`/userhome`);
  } catch (err) {
    console.log("🍎 🍎 🍎", err);
  }
});

module.exports = router;
