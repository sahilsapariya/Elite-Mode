import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide password"] },
  isAdmin: { type: Boolean, required: true, default: false },
  isVerified: { type: Boolean, required: true, default: false },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
