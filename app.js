const express = require("express");
const connectDB = require("./config/db");

const app = express(); // Create an express app

// Connect MongoDB
connectDB();

// Init middleware: this will allow us to get the data sent with req.body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running...");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
// @todo - Add route for blog posts
// @todo - Add route for profiles

const PORT = process.env.PORT || 5000;

// Listen on port 5000
app.listen(PORT, () => {
  console.log(`The application is running on port ${PORT}`);
});
