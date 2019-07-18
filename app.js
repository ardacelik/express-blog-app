const express = require("express");

const app = express(); // Create an express app

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Developer</h1>");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
}); // Set up the development server
