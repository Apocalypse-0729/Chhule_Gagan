const asyncHandler = require("express-async-handler");
const User = require("../model/usermodel");
const GenerateToken = require("./generatetoken");
const bcrypt = require("bcryptjs")
const nodemailer = require('nodemailer');
//const emailjs = require('emailjs');
const brcypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

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

const SendOTP = asyncHandler(async(req, res) => {
    const email = req.body.email;
    const otp = (Math.floor(Math.random() * 900000) + 100000).toString();
    const user = await User.findOne({ email })
    if (user) {
        return res.status(201).json({ name: user.name, otp: otp })


    } else { return res.status(501).send("not registered") }

});
const ResetPassword = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const Password = await bcrypt.hash(password, salt)

    const filter = { email: email }
    const update = { password: Password }
    const user = await User.findOneAndUpdate(filter, update, { new: true });
    if (user) {
        return res.status(201).json({ data: "success" })

    } else {
        return res.status(500).send("failed to update")
    }


})

module.exports = { Registeruser, LoginUser, SendOTP, ResetPassword }