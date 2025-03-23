import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide the username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please provide the email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide the password"],
  },
  isVerified: {
    type: String,
    default: false,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
