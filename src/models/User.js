const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
