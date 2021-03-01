# GameOfThronesAPI-P2

## Current name ideas: "Westeros' Public Library", "Vary's Little Birds" or "The Citadel's Library"

### An API of Ice And Fire: https://anapioficeandfire.com/

# Overview:

Overall, this website should read as an interactive and social media platform. Users can personalize their info, see other's profiles, as well as enjoy access to Game of Thrones data, quizzes and perhaps even be able to build their own character. My styling, if stretch is reached, will be a fun clash of medieval and high fantasy contrasting against the cartoonish bright colors of websites like Buzzfeed.

# MVP:

➡ Let user's create a profile, & login/logout.

➡ Save user's content: username, hashed password, email & additional info from site use.

➡ Make characters searchable, display info about them, and let users same them to their profile page.

➡ Let users post on their user page.

➡ Create a very simple buzzfeed style quiz, that will be a few questions long, have multiple choice answers that will determine 1 of 3 endpoints.

# Stretch Goals:

➡ Let other users comment on other users' posts.

➡ Create a few quizzes.

➡ Let users create quizzes.

➡ Let users create their own characters that are saved to their profile & the database.

➡ Extra CSS styling to make the website look more like Buzzfeed.

# Schematic/ERD:

![schema](/images/schema1.png)

# Wireframe:

![logOnPage](/images/loginPage.png)

![homePage](/images/homePage.png)

![searchPage](/images/searchPage.png)

![quizPage](/images/quizPage.png)

![createCharacterPage](/images/createCharPage.png)

# User Story:

1. Login Page: this is the first page the user will see. It will simply have 2 options...
   A. Log in to an existing account.
   B. Create an account.
2. Home Page: this page is your home base. It has all of your info., saved characters & comments.
3. At the top of all pages, after being logged on, there will be a navigation bar that offers: Home, Logout, Quizzes, Search & Create a Character
4. Quiz Page: It will feature a quiz that's answer appears on the same page.
5. Search Page: Allows you to search the API database by specific values. Shows results on the same page. Allows you to favorite on this page. Once favorite has been selected it send you back to the home page so you can see that its been added.
6. Create a Character Page: Allows you create a new row in the character's database. Once entered you are returned to your homepage where the data will be displayed.
7. If logout has been selected from any page, it will take you to the original blank log in page.
