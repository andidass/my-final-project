const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanMasuk = require("../../Model/BantuanMasuk");

// @route   GET admin/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanMasuk) {
      return res.status(400).json({
        msg: "Pos tidak memiliki data bantuan masuk",
      });
    }
    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET admin/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/", async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.find().populate("user", ["name"]);
    if (!bantuanMasuk) {
      return res.status(400).json({
        msg: "Tidak ada data bantuan masuk",
      });
    }
    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",

  auth,

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // build profile obj
    const bantuanMasukFields = {};
    bantuanMasukFields.user = req.user.id;

    try {
      let bantuanMasuk = await BantuanMasuk.findOne({ user: req.user.id });
      //   create profile
      bantuanMasuk = new BantuanMasuk(bantuanMasukFields);
      await bantuanMasuk.save();
      res.json(bantuanMasuk);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route   Put admin/bantuan-masuk/input-bantuan-masuk
// #desc    insert data bantuan masuk
// @access  Private

router.put(
  "/input-bantuan-masuk",
  [
    auth,
    [
      check("namaDonatur", "Nama/Instansi donatur harus diisi").not().isEmpty(),
      check("sumberDana", "Sumber Dana harus diisi").not().isEmpty(),
      check("alamatDonatur", "Alamat Donatur harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      kodeTransaksi,
      tanggal,
      namaDonatur,
      sumberDana,
      alamatDonatur,
      jenisBantuan,
      namaBarang,
      satuan,
      banyaknya,
      nilainya,
      dataItemBantuan,
    } = req.body;

    // build profile obj
    const newBantuanMasuk = {};
    if (kodeTransaksi) newBantuanMasuk.kodeTransaksi = kodeTransaksi;
    if (tanggal) newBantuanMasuk.tanggal = tanggal;
    if (namaDonatur) newBantuanMasuk.namaDonatur = namaDonatur;
    if (sumberDana) newBantuanMasuk.sumberDana = sumberDana;
    if (alamatDonatur) newBantuanMasuk.alamatDonatur = alamatDonatur;

    newBantuanMasuk.dataItemBantuan = [
      {
        jenisBantuan,
        namaBarang,
        satuan,
        banyaknya,
        nilainya,
      },
    ];

    newBantuanMasuk.dataItemBantuan = dataItemBantuan;

    try {
      const bantuanMasuk = await BantuanMasuk.findOne({ user: req.user.id });
      bantuanMasuk.dataBantuanMasuk.unshift(newBantuanMasuk);

      await bantuanMasuk.save();
      res.json(bantuanMasuk);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   Get admin/bantuan-masuk
// #desc    Get all bantuan masuk data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.find().populate("user", ["name"]);
    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get admin/bantuan-masuk/:user_id
// #desc    Get data bantuan masuk by user_id
// @access  Public

router.get("/:user_id", async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!bantuanMasuk)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
