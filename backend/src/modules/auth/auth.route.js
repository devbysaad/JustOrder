const express = require("express");
const {
  registerController,
  loginController,
  meController,
  logoutController,
} = require("./auth.controller");
const authMiddleware = require("../../middleware/auth");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/me", authMiddleware, meController);
router.post("/logout", logoutController);

module.exports = router;
