const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const BantuanMasukSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  dataBantuanMasuk: [
    {
      kodeTransaksi: {
        type: String,
      },
      tanggal: {
        type: String,
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
            type: Number,
          },
          banyaknya: {
            type: String,
          },
          nilainya: {
            type: String,
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
