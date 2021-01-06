const mongoose = require("mongoose");
const Petugas = require("./Petugas");

const PetugasProfileSchema = new mongoose.Schema({
  petugas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Petugas,
  },
  nohp: {
    type: String,
  },
  jobdesc: {
    type: String,
  },
  kabupaten: {
    type: String,
  },
  kelurahan: {
    type: String,
  },
  kecDesa: {
    type: String,
  },
  regdesc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ProfilePetugas = mongoose.model(
  "officerprofile",
  PetugasProfileSchema
);
