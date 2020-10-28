const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const PengungsiSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  allPengungsi: [
    {
      namaPengungsi: {
        type: String,
      },
      jenisKelamin: {
        type: String,
      },
      umur: {
        type: Number,
      },
      keadaan: {
        type: String,
      },
      alamat: {
        type: String,
      },
    },
  ],
});

module.exports = Pengungsi = mongoose.model("AllRefugee", PengungsiSchema);
