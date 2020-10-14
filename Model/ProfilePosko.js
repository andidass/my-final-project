const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const ProfilePoskoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  nohp: {
    type: String,
  },
  porvinsi: {
    type: String,
  },
  kabupaten: {
    type: String,
  },
  kecamatan: {
    type: String,
  },
  kelurahan: {
    type: String,
  },
  alamatposko: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ProfilePosko = mongoose.model(
  "poskoprofile",
  ProfilePoskoSchema
);
