const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");
const uniqid = require("uniqid");

const BantuanKeluarPosSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  dataBantuanKeluar: [
    {
      kodeTransaksi: {
        type: String,
        default: uniqid("bpbd-ntb-"),
      },
      tanggal: {
        type: Date,
        default: Date.now,
      },
      namaPenerima: {
        type: String,
      },
      jabatan: {
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

module.exports = BantuanKeluar = mongoose.model(
  "bantuankeluarpos",
  BantuanKeluarPosSchema
);
