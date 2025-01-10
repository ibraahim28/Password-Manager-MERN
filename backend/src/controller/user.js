const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const JWT_SECRET = 'IamSecret';

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email,password)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({id : user._id},JWT_SECRET, {expiresIn : '1h'} )
    console.log(token)

    res.status(200).send({ success: true, data: user, token });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });


    res.status(200).send({ success: true, token });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
  loginUser
};
