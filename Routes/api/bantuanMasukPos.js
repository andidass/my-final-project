const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanMasukPos = require("../../Model/BantuanMasukPos");

// @route   GET pos/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let bantuanMasukPos = await BantuanMasukPos.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanMasukPos) {
      return res.status(400).json({
        msg: "Pos tidak memiliki data bantuan masuk",
      });
    }
    res.json(bantuanMasukPos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET pos/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/", async (req, res) => {
  try {
    let bantuanMasukPos = await BantuanMasukPos.find().populate("user", [
      "name",
    ]);
    if (!bantuanMasukPos) {
      return res.status(400).json({
        msg: "Tidak ada data bantuan masuk",
      });
    }
    res.json(bantuanMasukPos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST pos/bantuan-masuk
// #desc    POST create data bantuan-masuk
// @access  Private

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // build profile obj
  const bantuanMasukPosFields = {};
  bantuanMasukPosFields.user = req.user.id;

  try {
    let bantuanMasukPos = await BantuanMasukPos.findOne({
      user: req.user.id,
    });
    //   create profile
    bantuanMasukPos = new BantuanMasukPos(bantuanMasukPosFields);
    await bantuanMasukPos.save();
    res.json(bantuanMasukPos);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Put pos/bantuan-masuk/input-bantuan-masuk
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
    const newBantuanMasukPos = {};
    if (kodeTransaksi) newBantuanMasukPos.kodeTransaksi = kodeTransaksi;
    if (tanggal) newBantuanMasukPos.tanggal = tanggal;
    if (namaDonatur) newBantuanMasukPos.namaDonatur = namaDonatur;
    if (sumberDana) newBantuanMasukPos.sumberDana = sumberDana;
    if (alamatDonatur) newBantuanMasukPos.alamatDonatur = alamatDonatur;

    newBantuanMasukPos.dataItemBantuan = [
      {
        jenisBantuan,
        namaBarang,
        satuan,
        banyaknya,
        nilainya,
      },
    ];

    newBantuanMasukPos.dataItemBantuan = dataItemBantuan;

    try {
      const bantuanMasukPos = await BantuanMasukPos.findOne({
        user: req.user.id,
      });
      bantuanMasukPos.dataBantuanMasuk.unshift(newBantuanMasukPos);

      await bantuanMasukPos.save();
      res.json(bantuanMasukPos);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   Get pos/bantuan-masuk
// #desc    Get all bantuan masuk data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let bantuanMasukPos = await BantuanMasukPos.find().populate("user", [
      "name",
    ]);
    res.json(bantuanMasukPos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get pos/bantuan-masuk/:user_id
// #desc    Get data bantuan masuk by user_id
// @access  Public

router.get("/:user_id", async (req, res) => {
  try {
    let bantuanMasukPos = await BantuanMasukPos.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!bantuanMasukPos)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(bantuanMasukPos);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
