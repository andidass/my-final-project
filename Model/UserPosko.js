const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usernameposko: {
    type: String,
    required: true,
  },
  petugas: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    default: "posko",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserPosko = mongoose.model("account", UserSchema);
