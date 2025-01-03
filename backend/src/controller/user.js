const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email,password)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserSchema.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).send({ success: true, data: user });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ success: true, data: [token, user] });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
};
