const express = require("express")
const User = require("../model/User.model")

const feedRoute = express.Router()


feedRoute.get("/user/feed", async (req, res) => {
   try {
       const users = await User.find()
       res.send(users)
   } catch (err) {
     res.status(400).send(err)
   }
})


module.exports = feedRoute