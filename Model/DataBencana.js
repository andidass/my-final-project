const mongoose = require("mongoose");
const Petugas = require("./Petugas");

const DataBencanaSchema = new mongoose.Schema({
  petugas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Petugas,
  },
  rumahrb: {
    type: Number,
  },
  rumahrs: {
    type: Number,
  },
  rumahrr: {
    type: Number,
  },
  fasum: {
    type: Number,
  },
  faskes: {
    type: Number,
  },
  faspen: {
    type: Number,
  },
  peribadatan: {
    type: Number,
  },
  terdampak: {
    type: Number,
  },
  luka: {
    type: Number,
  },
  md: {
    type: Number,
  },
});

module.exports = DataBencana = mongoose.model(
  "DisasterData",
  DataBencanaSchema
);
