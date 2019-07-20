const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express(); // Create an express app

// MongoDB connetion
mongoose.connect("mongodb://localhost:27017/myblogapp");
const db = mongoose.connection;
// Mongo error
db.on("error", console.error.bind(console, "connection error:"));

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve statis files from /public
app.use(express.static(__dirname + "/public"));

// View engine setup (Pug)
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// Include routes
const routes = require("./routes/index");
app.use("/", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
