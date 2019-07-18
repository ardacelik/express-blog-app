const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express(); // Create an express app

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug"); // Set the view engine to Pug

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    prompt: "dear user",
    hint: "Do not overthink it, just start writing :)"
  });
});

app.post("/blog", (req, res) => {
  res.render("blog");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
}); // Set up the development server
