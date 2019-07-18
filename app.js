const express = require("express");

const app = express(); // Create an express app\

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

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
}); // Set up the development server
