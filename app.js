const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const session = require("express-session");

const app = express(); // Create an express app

// Use sessions for tracking logins
app.use(
  session({
    secret: "Secret",
    resave: true,
    saveUninitialized: false
  })
);

connectDB(); // MongoDB connetion

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
