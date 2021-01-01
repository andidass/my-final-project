const mongoose = require("mongoose");
const Petugas = require("./Petugas");

const DataBencanaSchema = new mongoose.Schema({
  petugas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Petugas,
  },
  jenisBencana: {
    type: String,
  },
  tglKejadian: {
    type: String,
  },
  waktuKejadian: {
    type: String,
  },
  penyebab: {
    type: String,
  },
  desc: {
    type: String,
  },
  cuaca: {
    type: String,
  },
  lokasiBencana: {
    provinsi: {
      type: String,
    },
    kabupaten: {
      type: String,
    },
    kelurahan: {
      type: String,
    },
    kec: {
      type: String,
    },
    cakupan: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  dataKorban: {
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
    ket: {
      type: String,
    },
  },
  dataKerusakan: {
    jenisBidang: {
      type: String,
    },
    bidang: {
      type: String,
    },
    wilayah: {
      type: String,
    },
    jenisKerusakan: {
      type: String,
    },
    rusakBerat: {
      type: Number,
    },
    rusakSedang: {
      type: Number,
    },
    rusakRingan: {
      type: Number,
    },
    total: {
      type: Number,
    },
    satuan: {
      type: String,
    },
  },
  fasum: {
    aksesKeLokasi: {
      type: String,
    },
    saranaTransportasi: {
      type: String,
    },
    jalurKomunikasi: {
      type: String,
    },
    keadaanJaringanListrik: {
      type: String,
    },
    keadaanJaringanAir: {
      type: String,
    },
    fasKes: {
      type: String,
    },
    upayaPenanganan: {
      type: String,
    },
  },
});

module.exports = DataBencana = mongoose.model("DataBencana", DataBencanaSchema);
