const mongoose = require("mongoose");

const MsbStudentSchema = new mongoose.Schema({
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

const MsbStudent = mongoose.model("MsbStudent", MsbStudentSchema);
module.exports = MsbStudent;
