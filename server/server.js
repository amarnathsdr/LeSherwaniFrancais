const express = require("express");
const db = require("./db");
const feedbackRouter = require("./routes/feedback-router");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", feedbackRouter);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
