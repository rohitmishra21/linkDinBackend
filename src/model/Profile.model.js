const mongoose = require("mongoose")


const contactSchema = mongoose.Schema({
    number: {
        type: Number
    },
    address: {
        type: String
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    birthDay: {
        type: String
    }
}, { timestamps: true })

const profileSchema = mongoose.Schema({
    backGroundImg: {
        type: String,
        default: "https://thingscareerrelated.com/wp-content/uploads/2021/10/default-background-image.png"
    },
    profileImg: {
        type: String,
        default: "https://media.licdn.com/dms/image/v2/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1660833954461?e=1746662400&v=beta&t=XlitujQ34BooVaQhNl1iMyAeKnNl5qoddLztuBpk6XA"
    },
    hedline: {
        type: [String],
    },
    about: {
        type: String,
        maxLength: [200, "Abour must be less than 200 characters"]
    },
    post: {
        type: String
    },
    skills: {
        type: String
    },
    contact: contactSchema

}, { timestamps: true })

const profileModel = mongoose.model("profile", profileSchema)

module.exports = profileModel