const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanUtama = require("../../Model/DataBantuanUtama");

// @route   GET admin/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/me", async (req, res) => {
  try {
    let bantuanUtama = await BantuanUtama.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanUtama) {
      return res.status(400).json({
        msg: "Posko tidak memiliki data bantuan masuk",
      });
    }
    res.json(bantuanUtama);
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
    let bantuanUtama = await BantuanUtama.find().populate("user", ["name"]);
    if (!bantuanUtama) {
      return res.status(400).json({
        msg: "Tidak ada data bantuan masuk",
      });
    }
    res.json(bantuanUtama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST admin/bantuan-masuk/bantuan-utama
// #desc    Get create/update bantuan utama data
// @access  Private

router.post("/bantuan-utama", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { totalBarang, totalNilaiBarang } = req.body;

  // build profile obj
  const dataBantuanUtamaFields = {};
  dataBantuanUtamaFields.user = req.user.id;
  dataBantuanUtamaFields.AirMineral = {};
  if (totalBarang)
    dataBantuanUtamaFields.AirMineral.totalBarang = totalBarangAir;
  if (totalNilaiBarang)
    dataBantuanUtamaFields.AirMineral.totalNilaiBarang = totalNilaiBarangAir;

  dataBantuanUtamaFields.Beras = {};
  if (totalBarang) dataBantuanUtamaFields.Beras.totalBarang = totalBarangBeras;
  if (totalBarang) dataBantuanUtamaFields.Beras.totalBarang = totalBarangBeras;

  try {
    let bantuaUtama = await BantuanUtama.findOne({ user: req.user.id });

    // jika bantuaUtama existed, lakukan update bantuaUtama
    if (bantuaUtama) {
      // update
      bantuaUtama = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: dataBantuanUtamaFields },
        { new: true }
      );
      return res.json(bantuaUtama);
    }

    //   create bantuaUtama
    bantuaUtama = new Profile(dataBantuanUtamaFields);
    await bantuaUtama.save();
    res.json(bantuaUtama);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Get admin/bantuan-masuk
// #desc    Get all bantuan masuk data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let bantuanUtama = await BantuanUtama.find().populate("user", ["name"]);
    res.json(bantuanUtama);
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
    let bantuanUtama = await BantuanUtama.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!bantuanUtama)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(bantuanUtama);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
