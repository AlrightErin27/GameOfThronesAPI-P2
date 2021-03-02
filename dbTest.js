const db = require("./models");

// Create User Test//
const createUserTest = async () => {
  const newUser = await db.user.create({
    username: "Lara Croft",
    password: "llamas",
    aboutMe: "I like the Starks and jumping rope at night",
  });
  console.log(`Create ${newUser.username}`);
};
// createUserTest();
