const mongoose = require("mongoose");
const Admin = require("./Admin");
const uniqid = require("uniqid");

const BantuanMasukSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Admin,
  },
  dataBantuanMasuk: [
    {
      kodeTransaksi: {
        type: String,
        default: uniqid("bpbd-ntb-"),
      },
      tanggal: {
        type: Date,
        default: Date.now,
      },
      namaDonatur: {
        type: String,
      },
      sumberDana: {
        type: String,
      },
      alamatDonatur: {
        type: String,
      },
      dataItemBantuan: [
        {
          jenisBantuan: {
            type: String,
          },
          namaBarang: {
            type: String,
          },
          satuan: {
            type: String,
          },
          banyaknya: {
            type: Number,
          },
          nilainya: {
            type: Number,
          },
        },
      ],
    },
  ],
});

module.exports = BantuanMasuk = mongoose.model(
  "disasterrelief",
  BantuanMasukSchema
);
