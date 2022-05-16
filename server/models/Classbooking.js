const mongoose = require("mongoose");

const ClassBookingSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  Email: {
    type: String,
  },
  StudentID: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  Date: {
    type: Date,
  },
  Timein: {
    type: String,
  },
  Timeout: {
    type: String,
  },
  Reason: {
    type: String,
  },
  ClassName: {
    type: String,
  },
});

const ClassBooking = mongoose.model("ClassBooking", ClassBookingSchema);
module.exports = ClassBooking;
