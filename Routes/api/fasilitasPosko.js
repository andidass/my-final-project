const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const FasilitasPosko = require("../../Model/FasilitasPosko");
const UserPosko = require("../../Model/UserPosko");

// @route   GET posko/fasilitas-posko/me
// desc     Get fasilitas posko
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let fasilitasPosko = await FasilitasPosko.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!fasilitasPosko) {
      return res
        .status(400)
        .json({ msg: "user tidak memiliki data fasilitas posko" });
    }
    res.json(fasilitasPosko);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "server error" });
  }
});

// @route   POST posko/fasilitas-posko
// #desc    Create or update user profile
// @access  Private

router.post(
  "/",
  [
    auth,
    [
      check(
        "fkes",
        "Jumlah fasilitas kesehatan harus diisi dengan angka"
      ).isNumeric(),
      check(
        "fpend",
        "Jumlah fasilitas pendidikan harus diisi dengan angka"
      ).isNumeric(),
      check("mck", "Jumlah fasilitas MCK harus diisi dengan angka").isNumeric(),
      check(
        "musholah",
        "Jumlah fasilitas Ibadah harus diisi dengan angka"
      ).isNumeric(),
      check(
        "dapurUmum",
        "Jumlah fasilitas dapur umum harus diisi dengan angka"
      ).isNumeric(),
      check(
        "tendaUmum",
        "Jumlah fasilitas tenda umum harus diisi dengan angka"
      ).isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fkes, fpend, mck, musholah, dapurUmum, tendaUmum } = req.body;

    // build profile obj
    const fasilitasPoskoFields = {};
    fasilitasPoskoFields.user = req.user.id;
    if (fkes) fasilitasPoskoFields.fkes = fkes;
    if (fpend) fasilitasPoskoFields.fpend = fpend;
    if (mck) fasilitasPoskoFields.mck = mck;
    if (musholah) fasilitasPoskoFields.musholah = musholah;
    if (dapurUmum) fasilitasPoskoFields.dapurUmum = dapurUmum;
    if (tendaUmum) fasilitasPoskoFields.tendaUmum = tendaUmum;

    try {
      let fasilitasPosko = await FasilitasPosko.findOne({ user: req.user.id });

      // jika fasilitas Posko existed, lakukan update fasilitasPosko
      if (fasilitasPosko) {
        // update
        fasilitasPosko = await FasilitasPosko.findOneAndUpdate(
          { user: req.user.id },
          { $set: fasilitasPoskoFields },
          { new: true }
        );
        return res.json(fasilitasPosko);
      }

      //   create fasilitas Posko
      fasilitasPosko = new FasilitasPosko(fasilitasPoskoFields);
      await fasilitasPosko.save();
      res.json(fasilitasPosko);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route   Get posko/fasilitas-posko
// #desc    Get all fasilitas posko data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let fasilitasPosko = await FasilitasPosko.find().populate("user", ["name"]);
    res.json(fasilitasPosko);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get posko/profile/user/:user_id
// #desc    Get profile by user_id
// @access  Public

router.get("/posko/:posko_id", async (req, res) => {
  try {
    let fasilitasPosko = await FasilitasPosko.findOne({
      user: req.params.posko_id,
    }).populate("user", ["name"]);

    if (!fasilitasPosko)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(fasilitasPosko);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
