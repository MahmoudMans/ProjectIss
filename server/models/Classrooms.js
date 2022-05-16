const mongoose = require("mongoose");

const ClassroomsSchema = new mongoose.Schema({
  ClassName: {
    type: String,
  },
  Location: {
    type: String,
  },
  Size: {
    type: String,
  },
  TypeOfClassrooms: {
    type: String,
  },
});

const Classrooms = mongoose.model("Classrooms", ClassroomsSchema);
module.exports = Classrooms;
