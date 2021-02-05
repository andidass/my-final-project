const mongoose = require("mongoose");
const Admin = require("./Admin");

const DataBantuanUtamaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Admin,
  },
  AirMineral: {
    namaBarang: {
      type: String,
      default: "Air Mineral 600ml",
    },
    satuan: {
      type: String,
      default: "dus",
    },
    totalBarang: {
      type: Number,
      default: 0,
    },
    totalNilaiBarang: {
      type: Number,
      default: 0,
    },
  },
  Beras: {
    namaBarang: {
      type: String,
      default: "Beras",
    },
    satuan: {
      type: String,
      default: "kg",
    },
    totalBarang: {
      type: Number,
      default: 0,
    },
    totalNilaiBarang: {
      type: Number,
      default: 0,
    },
  },
  MieInstan: {
    namaBarang: {
      type: String,
      default: "Mie Instan",
    },
    satuan: {
      type: String,
      default: "bungkus",
    },
    totalBarang: {
      type: Number,
      default: 0,
    },
    totalNilaiBarang: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = DataBantuanUtama = mongoose.model(
  "BantuanUtama",
  DataBantuanUtamaSchema
);
