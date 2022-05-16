const mongoose = require("mongoose");

const MedtechStudentSchema = new mongoose.Schema({
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

const MedtechStudent = mongoose.model("MedtechStudent", MedtechStudentSchema);
module.exports = MedtechStudent;
