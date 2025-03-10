const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
const userRoute = require("./routes/user.route")
const profileRoute = require("./routes/profile.route")
const feedRoute = require("./routes/feed.route")

app.use("/", userRoute)
app.use("/", profileRoute)
app.use("/", feedRoute)

module.exports = app