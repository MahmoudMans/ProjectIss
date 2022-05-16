const mongoose = require("mongoose");

const LciStudentSchema = new mongoose.Schema({
  FullName: {
    type: String,
  },
  Email: {
    type: String,
  },

  AmountToPay: {
    type: Number,
  },

  AmountPaied: {
    type: Number,
  },
  RemainingAmount: {
    type: Number,
  },
  FinalDeadline: {
    type: Date,
  },
});

const LciStudent = mongoose.model("LciStudent", LciStudentSchema);
module.exports = LciStudent;
