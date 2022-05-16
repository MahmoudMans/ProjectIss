const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  Id: {
    type: Number,
  },
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Course: {
    type: String,
  },
  Freeday: {
    type: String,
  },
  RoomId: {
    type: Number,
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
