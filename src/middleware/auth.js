const jwt = require("jsonwebtoken");
const User = require("../model/User.model");

const auth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Please login ");
        }
        const decodedMsg = jwt.verify(token, "linkdin")

        if (!decodedMsg) {
            throw new Error("Invalid token");
        }

        const user = await User.findById(decodedMsg.id)

        if (!user) {
            throw new Error("User is not exist");

        }
        req.user = user;

        next()


    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = auth