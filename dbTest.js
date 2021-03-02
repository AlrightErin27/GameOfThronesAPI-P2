const db = require("./models");

// Create User Test//
const createUserTest = async () => {
  const newUser = await db.user.create({
    username: "Lara Croft",
    password: "llamas",
    aboutMe: "I like the Starks and jumping rope at night",
  });
  console.log(`Create ${newUser.username} ✅ `);
};
// createUserTest();

//Create Quiz Result Test//
const createQuizTest = async () => {
  const newResult = await db.quizresult.create({
    userId: 1,
    result: true,
  });
  console.log(`Did you win? 🎲 Answer: ${newResult.result}`);
};
// createQuizTest();

//Create User Fav Test//
const createUserFavTest = async () => {
  const newFav = await db.userfavorite.create({
    userId: 1,
    name: "Janet Snow",
    titles: "Lady Commander of Llamas",
    culture: "North Pole Women's Watch",
  });
  console.log(`New Favorite: ${newFav.name}! 🎁 🎁 🎁 `);
};
// createUserFavTest();
