const mongoose = require("mongoose");

const BoxsSchema = new mongoose.Schema({
  BoxName: {
    type: String,
  },
  Location: {
    type: String,
  },
});

const Boxs = mongoose.model("Boxs", BoxsSchema);
module.exports = Boxs;
