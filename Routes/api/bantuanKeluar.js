const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanKeluar = require("../../Model/BantuanKeluar");

// @route   GET admin/bantuan-keluar/me
// #desc    GET data bantuan-keluar account
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let bantuanKeluar = await BantuanKeluar.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanKeluar) {
      return res.status(400).json({
        msg: "Posko tidak memiliki data bantuan keluar",
      });
    }
    res.json(bantuanKeluar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET admin/bantuan-keluar/me
// #desc    GET data bantuan-keluar account
// @access  Private

router.get("/", async (req, res) => {
  try {
    let bantuanKeluar = await BantuanKeluar.find().populate("user", ["name"]);
    if (!bantuanKeluar) {
      return res.status(400).json({
        msg: "Tidak ada data bantuan keluar",
      });
    }
    res.json(bantuanKeluar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST admin/bantuan-keluar
// #desc    create data bantuan-keluar
// @access  Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // build profile obj
  const bantuanKeluarFields = {};
  bantuanKeluarFields.user = req.user.id;

  try {
    let bantuanKeluar = await BantuanKeluar.findOne({ user: req.user.id });
    //   create profile
    bantuanKeluar = new BantuanKeluar(bantuanKeluarFields);
    await bantuanKeluar.save();
    res.json(bantuanKeluar);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Put admin/bantuan-keluar/input-bantuan-keluar
// #desc    insert data bantuan keluar
// @access  Private

router.put(
  "/input-bantuan-keluar",
  [
    auth,
    [
      check("namaPenerima", "Nama/Instansi donatur harus diisi")
        .not()
        .isEmpty(),
      check("jabatan", "Sumber Dana harus diisi").not().isEmpty(),
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
      namaPenerima,
      jabatan,
      jenisBantuan,
      namaBarang,
      satuan,
      banyaknya,
      nilainya,
      dataItemBantuan,
    } = req.body;

    // build profile obj
    const newBantuanKeluar = {};
    if (kodeTransaksi) newBantuanKeluar.kodeTransaksi = kodeTransaksi;
    if (tanggal) newBantuanKeluar.tanggal = tanggal;
    if (namaPenerima) newBantuanKeluar.namaPenerima = namaPenerima;
    if (jabatan) newBantuanKeluar.jabatan = jabatan;

    newBantuanKeluar.dataItemBantuan = [
      {
        jenisBantuan,
        namaBarang,
        satuan,
        banyaknya,
        nilainya,
      },
    ];
    newBantuanKeluar.dataItemBantuan = dataItemBantuan;
    try {
      const bantuanMasuk = await BantuanKeluar.findOne({ user: req.user.id });
      bantuanMasuk.dataBantuanKeluar.unshift(newBantuanKeluar);
      await bantuanMasuk.save();
      res.json(bantuanMasuk);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   Get admin/bantuan-keluar
// #desc    Get all bantuan keluar data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let bantuanKeluar = await BantuanKeluar.find().populate("user", ["name"]);
    res.json(bantuanKeluar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get admin/bantuan-keluar/:user_id
// #desc    Get data bantuan keluar by user_id
// @access  Public

router.get("/:user_id", async (req, res) => {
  try {
    let bantuanKeluar = await BantuanKeluar.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!bantuanKeluar)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(bantuanKeluar);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
