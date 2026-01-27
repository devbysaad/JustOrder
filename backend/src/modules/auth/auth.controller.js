const userModel = require("./auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { authenticationSignToken } = require("../../utils/jwt");

async function registerController(req, res) {
  try {
    const { username, password, role } = req.body;

    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "This name is already taken" });
    }

    const user = await userModel.create({
      username,
      password: await bcrypt.hash(password, 10),
      role: role || "customer",
    });

    const token = authenticationSignToken({ id: user._id, role: user.role });

    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    const safeUser = await userModel.findById(user._id).select("-password");

    res.status(201).json({
      message: "User created successfully",
      user: safeUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = authenticationSignToken({ id: user._id, role: user.role });

    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    const safeUser = await userModel.findById(user._id).select("-password");

    res.status(200).json({
      message: "User logged in",
      user: safeUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

async function meController(req, res) {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

async function logoutController(req, res) {
  try {
    res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  registerController,
  loginController,
  meController,
  logoutController,
};
