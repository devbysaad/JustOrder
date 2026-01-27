const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const authenticationVerifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

const authenticationSignToken = (payload, expiresIn = "7d") => {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
  } catch (err) {
    throw new Error("Token signing failed");
  }
};

module.exports = {
  authenticationVerifyToken,
  authenticationSignToken,
};
