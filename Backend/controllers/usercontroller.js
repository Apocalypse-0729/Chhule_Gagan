const asyncHandler = require("express-async-handler");
const User = require("../model/usermodel");
const GenerateToken = require("./generatetoken");
const brcypt = require("bcryptjs");

const Registeruser = asyncHandler(async(req, res) => {
    const { name, age, gender, qualification, mobileNo, email, password, pic } = req.body
    const userexist = await User.findOne({ email })
    if (userexist) {
        return res.status(400).send("user already exist");

    }
    const user = await User.create({ name, age, gender, qualification, mobileNo, email, password, pic });
    if (user) {
        return res.status(201).json({ _id: user._id, name: user.name, email: user.email, token: GenerateToken(user._id), })
    } else {
        return res.status(400).send("User not found");
    }


})

const LoginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const ismatch = await brcypt.compare(password, user.password)

    if (user && ismatch) {
        return res.status(201).json({ _id: user._id, name: user.name, email: user.email, pic: user.pic, token: GenerateToken(user._id), })

    } else {
        return res.status(401).send("Invalid Credentials")
    }
})


module.exports = { Registeruser, LoginUser }