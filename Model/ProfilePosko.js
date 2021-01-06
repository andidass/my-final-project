const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const ProfilePoskoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  namaPosko: {
    type: String,
  },
  alamatPosko: {
    type: String,
  },
  kecPosko: {
    type: String,
  },
  kelPosko: {
    type: String,
  },
  kabPosko: {
    type: String,
  },
  petugas: {
    namaPetugas: {
      type: String,
    },
    jabatan: {
      type: String,
    },
    noHp: {
      type: Number,
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  allPetugas: [
    {
      tambahanPetugas: {
        type: String,
      },
      jabatan2: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: String,
    default: "no",
  },
});

module.exports = ProfilePosko = mongoose.model(
  "poskoprofile",
  ProfilePoskoSchema
);
