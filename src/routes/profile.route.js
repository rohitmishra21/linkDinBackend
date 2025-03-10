const express = require("express")
const auth = require("../middleware/auth")
const profileModel = require("../model/Profile.model")
const profileRoute = express.Router()


profileRoute.get("/profile/view", auth, async (req, res) => {
    try {

        const id = req.user.id
        if (!id) {
            throw new Error("Please log in first");

        }
        const profile = await profileModel.findOne({ userId: id })
        if (!profile) {
            throw new Error("Profile is not found");

        }
        res.send(profile)
    } catch (err) {
        res.status(400).send(err)
    }
})


profileRoute.patch("/profile/update", auth, async (req, res) => {
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
