const mongoose = require("mongoose");
const Admin = require("./Admin");

const BantuanUtamaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Admin,
  },
  dataBantuanUtama: [
    {
      jenisBantuan: {
        type: String,
      },
      namaBarang: {
        type: String,
      },
    },
  ],
});

module.exports = BantuanUtama = mongoose.model("MainAid", BantuanUtamaSchema);
