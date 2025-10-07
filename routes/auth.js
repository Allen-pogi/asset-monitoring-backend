const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const protect = require("../middleware/auth");

// Public routes
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);

// Protected route
router.get("/user/me", protect, authController.getCurrentUser);

module.exports = router;
