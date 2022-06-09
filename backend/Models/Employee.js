const mongoose = require("mongoose");

const employeesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    min: 0,
    required: true,
  },
});

module.exports = mongoose.model("employees", employeesSchema);
