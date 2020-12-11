const { AddAlarmOutlined } = require("@material-ui/icons");
const mongoose = require("mongoose");

const PetugasSchema = new mongoose.Schema({
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
    default: "petugas",
  },
  verified: {
    type: String,
    default: "no",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Petugas = mongoose.model("officeraccount", PetugasSchema);
