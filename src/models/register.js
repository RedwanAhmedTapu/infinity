const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // confirmpassword: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
  },
});

const Register = mongoose.model("Register", employeeSchema);

module.exports = Register;
