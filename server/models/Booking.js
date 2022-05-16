const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
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
  BoxName: {
    type: String,
  },
});

const Booking = mongoose.model("Bookings", BookingSchema);
module.exports = Booking;
