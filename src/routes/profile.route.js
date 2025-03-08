const express = require("express")
const auth = require("../middleware/auth")
const profileModel = require("../model/Profile.model")
const profileRoute = express.Router()

profileRoute.patch("/profile/create", auth, async (req, res) => {
    try {
        const { backGroundImg, profileImg, headline, about, post, skills, contact } = req.body
        const Profile = new profileModel({
            backGroundImg, profileImg, headline, about, post, skills, contact
        })
        await Profile.save()
        res.send(Profile)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = profileRoute
