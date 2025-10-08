const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");
const protect = require("../middleware/auth"); // middleware that verifies JWT

/* ---------------------- USER ROUTES ---------------------- */

// Public routes
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);

// Protected route
router.get("/user/me", protect, authController.getCurrentUser);

/* ---------------------- ADMIN ROUTES ---------------------- */

// Public routes
router.post("/admin/register", authController.registerAdmin);
router.post("/admin/login", authController.loginAdmin);

// Protected route
router.get("/admin/me", protect, authController.getCurrentAdmin);

module.exports = router;
