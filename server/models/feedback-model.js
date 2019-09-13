const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Feedback = new Schema({
  content: { type: String, required: true }
});

module.exports = mongoose.model("users", Feedback);
