const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const CourseModel = mongoose.Schema({

    name: { type: String, trim: true },
    desc: { type: String },

}, {
    timestamps: true
})

UserModel.pre('save', async function(next) {
    if (!this.isModified) { next() }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
const Course = mongoose.model("Course", CourseModel);
module.exports = Course;