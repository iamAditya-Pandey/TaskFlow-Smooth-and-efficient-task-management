const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ _id: user.id, token: generateToken(user._id) });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({ _id: user.id, token: generateToken(user._id) });
  } else { res.status(401).json({ message: 'Invalid credentials' }); }
};
module.exports = { registerUser, loginUser };