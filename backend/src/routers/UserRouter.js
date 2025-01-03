const express = require("express");
const router = express.Router();

const UserSchema = require("../models/UserModel");
const { createUser } = require("../controller/user");

router.post("/register", createUser);


module.exports = router;  