const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    default: "admin",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("adminaccount", AdminSchema);
