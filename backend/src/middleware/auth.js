const jwt = require("jsonwebtoken");
const userModel = require("../modules/auth/auth.model");
const { authenticationVerifyToken } = require("../utils/jwt");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = authenticationVerifyToken(token);
    const user = await userModel.findById(decoded.id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;
