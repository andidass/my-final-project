const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const DataBencana = require("../../Model/DataBencana");
const Petugas = require("../../Model/Petugas");

// @route   GET petugas/data-bencana/me
// desc     Get data bencana
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let dataBencana = await DataBencana.findOne({
      petugas: req.user.id,
    }).populate("petugas", ["name", "avatar"]);
    if (!dataBencana) {
      return res.status(400).json({ msg: "petugas tidak memiliki profile" });
    }
    res.json(dataBencana);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "server error" });
  }
});

// @route   POST petugas/data-bencana
// #desc    Create or update data bencana
// @access  Private

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    jenisBencana,
    tglKejadian,
    waktuKejadian,
    penyebab,
    desc,
    cuaca,
    provinsi,
    kabupaten,
    kelurahan,
    kec,
    cakupan,
    lat,
    lng,
    namaPengungsi,
    jenisKelamin,
    umur,
    keadaan,
    alamat,
    ket,
    jenisBidang,
    bidang,
    wilayah,
    jenisKerusakan,
    rusakBerat,
    rusakSedang,
    rusakRingan,
    total,
    satuan,
    aksesKeLokasi,
    saranaTransportasi,
    jalurKomunikasi,
    keadaanJaringanListrik,
    keadaanJaringanAir,
    fasKes,
    upayaPenanganan,
  } = req.body;

  // build profile obj
  const dataBencanaFields = {};
  dataBencanaFields.petugas = req.user.id;
  if (jenisBencana) dataBencanaFields.jenisBencana = jenisBencana;
  if (tglKejadian) dataBencanaFields.tglKejadian = tglKejadian;
  if (waktuKejadian) dataBencanaFields.waktuKejadian = waktuKejadian;
  if (penyebab) dataBencanaFields.penyebab = penyebab;
  if (desc) dataBencanaFields.desc = desc;
  if (cuaca) dataBencanaFields.cuaca = cuaca;

  dataBencanaFields.lokasiBencana = {};
  if (provinsi) dataBencanaFields.lokasiBencana.provinsi = provinsi;
  if (kabupaten) dataBencanaFields.lokasiBencana.kabupaten = kabupaten;
  if (kelurahan) dataBencanaFields.lokasiBencana.kelurahan = kelurahan;
  if (kec) dataBencanaFields.lokasiBencana.kec = kec;
  if (cakupan) dataBencanaFields.lokasiBencana.cakupan = cakupan;
  if (lat) dataBencanaFields.lokasiBencana.lat = lat;
  if (lng) dataBencanaFields.lokasiBencana.lng = lng;

  dataBencanaFields.dataKorban = {};
  if (namaPengungsi) dataBencanaFields.dataKorban.namaPengungsi = namaPengungsi;
  if (jenisKelamin) dataBencanaFields.dataKorban.jenisKelamin = jenisKelamin;
  if (umur) dataBencanaFields.dataKorban.umur = umur;
  if (keadaan) dataBencanaFields.dataKorban.keadaan = keadaan;
  if (alamat) dataBencanaFields.dataKorban.alamat = alamat;
  if (ket) dataBencanaFields.dataKorban.ket = ket;

  dataBencanaFields.dataKerusakan = {};
  if (jenisBidang) dataBencanaFields.dataKerusakan.jenisBidang = jenisBidang;
  if (bidang) dataBencanaFields.dataKerusakan.bidang = bidang;
  if (wilayah) dataBencanaFields.dataKerusakan.wilayah = wilayah;
  if (jenisKerusakan)
    dataBencanaFields.dataKerusakan.jenisKerusakan = jenisKerusakan;
  if (rusakBerat) dataBencanaFields.dataKerusakan.rusakBerat = rusakBerat;
  if (rusakSedang) dataBencanaFields.dataKerusakan.rusakSedang = rusakSedang;
  if (rusakRingan) dataBencanaFields.dataKerusakan.rusakRingan = rusakRingan;
  if (total) dataBencanaFields.dataKerusakan.total = total;
  if (satuan) dataBencanaFields.dataKerusakan.satuan = satuan;

  dataBencanaFields.fasum = {};
  if (aksesKeLokasi) dataBencanaFields.fasum.aksesKeLokasi = aksesKeLokasi;
  if (saranaTransportasi)
    dataBencanaFields.fasum.saranaTransportasi = saranaTransportasi;
  if (jalurKomunikasi)
    dataBencanaFields.fasum.jalurKomunikasi = jalurKomunikasi;
  if (keadaanJaringanListrik)
    dataBencanaFields.fasum.keadaanJaringanListrik = keadaanJaringanListrik;
  if (keadaanJaringanAir)
    dataBencanaFields.fasum.keadaanJaringanAir = keadaanJaringanAir;
  if (fasKes) dataBencanaFields.fasum.fasKes = fasKes;
  if (upayaPenanganan)
    dataBencanaFields.fasum.upayaPenanganan = upayaPenanganan;

  try {
    let dataBencana = await DataBencana.findOne({ petugas: req.user.id });

    // jika data bencana existed, lakukan update data bencana
    if (dataBencana) {
      // update
      dataBencana = await DataBencana.findOneAndUpdate(
        { petugas: req.user.id },
        { $set: dataBencanaFields },
        { new: true }
      );
      return res.json(dataBencana);
    }

    //   create data bencana
    dataBencana = new DataBencana(dataBencanaFields);
    await dataBencana.save();
    res.json(dataBencana);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Get petugas/data-bencana
// #desc    Get all data bencana
// @access  Public

router.get("/", async (req, res) => {
  try {
    let dataBencana = await DataBencana.find().populate("petugas", [
      "name",
      "avatar",
    ]);
    res.json(dataBencana);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get petugas/data-bencana/petugasId
// #desc    Get data bencana by petugasId
// @access  Public

router.get("/:petugasId", async (req, res) => {
  try {
    let dataBencana = await DataBencana.findOne({
      petugas: req.params.petugasId,
    }).populate("petugas", ["name", "avatar"]);

    if (!dataBencana)
      return res.status(400).json({ msg: "petugas tidak ditemukan" });

    res.json(dataBencana);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
