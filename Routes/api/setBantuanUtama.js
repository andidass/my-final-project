const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanUtama = require("../../Model/BantuanUtama");

// @route   Get admin/bantuan-utama/me
// #desc    Get data bantuan utama
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let bantuanUtama = await BantuanUtama.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanUtama) {
      return res.status(400).json({ msg: "admin belum membuat bantuan utama" });
    }
    res.json(bantuanUtama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get admin/bantuan-utama
// #desc    Get all data permintaan bantuan
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

// @route   POST admin/bantuan-utama
// #desc    Create data permintaan bantuan
// @access  Private

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const bantuanUtamaFields = {};
  bantuanUtamaFields.user = req.user.id;
  try {
    let bantuanUtama = await BantuanUtama.findOne({
      user: req.user.id,
    });
    bantuanUtama = new BantuanUtama(bantuanUtamaFields);
    await bantuanUtama.save();
    res.json(bantuanUtama);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Put admin/bantuan-utama
// #desc    add data permintaan bantuan
// @access  Private

router.put(
  "/",
  [
    auth,
    [
      check("jenisBantuan", "jenis barang harus diisi").not().isEmpty(),
      check("namaBarang", "nama barang harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { jenisBantuan, namaBarang, jmlBarang } = req.body;
    const newBantuanUtama = {
      jenisBantuan,
      namaBarang,
      jmlBarang,
    };

    try {
      const bantuanUtama = await BantuanUtama.findOne({
        user: req.user.id,
      });
      bantuanUtama.dataBantuanUtama.unshift(newBantuanUtama);

      await bantuanUtama.save();
      res.json(bantuanUtama);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE admin/bantuan-utama/:data_id
// #desc    delete data permintaan bantuan profile
// @access  Private

router.delete("/:data_id", auth, async (req, res) => {
  try {
    const bantuanUtama = await BantuanUtama.findOne({
      user: req.user.id,
    });

    // get removed index
    const removeIndex = bantuanUtama.dataBantuanUtama
      .map((item) => item.id)
      .indexOf(req.params.data_id);

    bantuanUtama.dataBantuanUtama.splice(removeIndex, 1);

    await bantuanUtama.save();

    res.json(bantuanUtama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
