const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const PermintaanBantuanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  dataPermintaanBantuan: [
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
    },
  ],
});

module.exports = PermintaanBantuan = mongoose.model(
  "RequestAid",
  PermintaanBantuanSchema
);
