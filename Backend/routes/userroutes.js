const express = require("express");
const router = express.Router();

const { Registeruser, LoginUser, SendOTP, ResetPassword } = require("../controllers/usercontroller")
    //const { Protect } = require("../middleware/authmiddleware")

router.route('/').post(Registeruser);
router.post('/login', LoginUser);
router.post('/sendotp', SendOTP);
router.post('/changepassword', ResetPassword);

module.exports = router