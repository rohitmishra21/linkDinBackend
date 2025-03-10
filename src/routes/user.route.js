const express = require("express");
const User = require("../model/User.model");
const userRoute = express.Router()
const bycrpt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const profileModel = require("../model/Profile.model");

// signUp api
userRoute.post("/signUp", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough");
    }

    const hashPassword = await bycrpt.hash(password, 10)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword
    })

    await profileModel.create({
      userId: user._id,
      contact: { email: user.email }
    })

    const token = await jwt.sign({ id: user._id }, "linkdin")
    res.cookie("token", token)

    res.send(user)
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send({ message: "Validation failed", errors: err.errors });
    } else {
      res.status(500).send({ message: err.message });
    }
  }
})

// signIn api 

userRoute.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body

    const isUserExist = await User.findOne({ email: email })
    if (!isUserExist) {
      throw new Error("Invalid credential");
    }
    const isMatch = await bycrpt.compare(password, isUserExist.password)
    if (!isMatch) {
      throw new Error("Invalid credential");
    }

    const token = await jwt.sign({ id: isUserExist._id }, "linkdin")

    res.cookie("token", token)

    res.send(isUserExist)

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})


// user logout

userRoute.post("/logOut", (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) })
  res.send("User LogOut")
})

module.exports = userRoute