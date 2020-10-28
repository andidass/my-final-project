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
});

module.exports = ProfilePosko = mongoose.model(
  "poskoprofile",
  ProfilePoskoSchema
);
