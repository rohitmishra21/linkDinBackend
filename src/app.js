const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(cookieParser())
const userRoute = require("./routes/user.route")
const profileRoute = require("./routes/profile.route")
const feedRoute = require("./routes/feed.route")

app.use("/", userRoute)
app.use("/", profileRoute)
app.use("/", feedRoute)

module.exports = app