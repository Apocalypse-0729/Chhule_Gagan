const express = require("express");
const router = express.Router();

const { Registeruser, LoginUser, } = require("../controllers/usercontroller")
const { Protect } = require("../middleware/authmiddleware")

router.route('/').post(Registeruser);
router.post('/login', LoginUser);

module.exports = router