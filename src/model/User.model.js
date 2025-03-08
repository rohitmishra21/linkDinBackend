const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    unique: true,
    trim: true,
    minLength: [4, "First name must be at least 4 characters"],
    maxLength: [14, "First name must be less than 14 characters"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    minLength: [4, "Last name must be at least 4 characters"],
    maxLength: [14, "Last name must be less than 14 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    maxLength: [64, "Password can't be longer than 64 characters"],
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
