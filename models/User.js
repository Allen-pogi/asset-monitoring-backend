const mongoose = require("mongoose");

// Define roles
const roles = ["admin", "staff", "user", "professor"]; // you can expand as needed

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: roles,
      default: "user",
    },
    // optional: extra info
    department: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false } // remove __v
);

module.exports = mongoose.model("User", userSchema);
