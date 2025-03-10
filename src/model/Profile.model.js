const mongoose = require("mongoose")


const contactSchema = mongoose.Schema({
    number: {
        type: Number,
        default: 1234567890
    },
    address: {
        type: String,
        default: "xyz"
    },
    birthDay: {
        type: String,
        default: "DOB"
    }
}, { timestamps: true })

const profileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    backGroundImg: {
        type: String,
        default: "https://thingscareerrelated.com/wp-content/uploads/2021/10/default-background-image.png"
    },
    profileImg: {
        type: String,
        default: "https://images.unsplash.com/photo-1706696951106-b400c3808043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
    },
    hedline: {
        type: [String],
        default: "headline"
    },
    about: {
        type: String,
        maxLength: [200, "Abour must be less than 200 characters"],
        default: "write somting about you for grow your network"
    },
    post: {
        type: String,
        default: "post"
    },
    skills: {
        type: String,
        default: "skills"
    },
    gender: {
        type: String,
        default: "male, felmale,other"
    },
    contact: contactSchema

}, { timestamps: true })

const profileModel = mongoose.model("profile", profileSchema)

module.exports = profileModel