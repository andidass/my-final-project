const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");
const uniqid = require("uniqid");

const BantuanMasukSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
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
  "BantuanMasukPosko",
  BantuanMasukSchema
);
