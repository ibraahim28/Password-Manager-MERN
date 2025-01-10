const express = require("express");
const router = express.Router();

const UserSchema = require("../models/UserModel");
const { createUser, loginUser } = require("../controller/user");

router.post("/register", createUser);
router.post("/login", loginUser);

module.exports = router;
