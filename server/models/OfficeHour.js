const mongoose = require("mongoose");

const OfficeHourSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  Email: {
    type: String,
  },
  StudentID: {
    type: String,
  },

  Date: {
    type: Date,
  },
  Duration: {
    type: Number,
  },

  Reason: {
    type: String,
  },
});

const OfficeHourBooking = mongoose.model("OfficeHours", OfficeHourSchema);
module.exports = OfficeHourBooking;
