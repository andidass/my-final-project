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
      return res
        .status(400)
        .json({ msg: "petugas tidak memiliki data bencana" });
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

router.post(
  "/",
  [
    auth,
    [
      check(
        "rumahrb",
        "jumlah data kerusakan berat rumah harus diisi dengan angka"
      ).isNumeric(),
      check(
        "rumahrs",
        "jumlah data kerusakan sedang rumah harus diisi dengan angka"
      ).isNumeric(),
      check(
        "rumahrr",
        "jumlah data kerusakan ringan rumah harus diisi dengan angka"
      ).isNumeric(),
      check(
        "fasum",
        "jumlah data kerusakan fasilitas umum harus diisi dengan angka"
      ).isNumeric(),
      check(
        "faskes",
        "jumlah data kerusakan fasilitas kesehatan harus diisi dengan angka"
      ).isNumeric(),
      check(
        "faspen",
        "jumlah data kerusakan fasilitas pendidikan harus diisi dengan angka"
      ).isNumeric(),
      check(
        "peribadatan",
        "jumlah data kerusakan fasilitas peribadatan harus diisi dengan angka"
      ).isNumeric(),
      check(
        "terdampak",
        "jumlah data korban terdampak harus diisi dengan angka"
      ).isNumeric(),
      check(
        "luka",
        "jumlah data korban luka harus diisi dengan angka"
      ).isNumeric(),
      check(
        "md",
        "jumlah data korban meninggal dunia harus diisi dengan angka"
      ).isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      rumahrb,
      rumahrs,
      rumahrr,
      fasum,
      faskes,
      faspen,
      peribadatan,
      terdampak,
      luka,
      md,
    } = req.body;

    // build profile obj
    const dataBencanaFields = {};
    dataBencanaFields.petugas = req.user.id;
    if (rumahrb) dataBencanaFields.rumahrb = rumahrb;
    if (rumahrs) dataBencanaFields.rumahrs = rumahrs;
    if (rumahrr) dataBencanaFields.rumahrr = rumahrr;
    if (fasum) dataBencanaFields.fasum = fasum;
    if (faskes) dataBencanaFields.faskes = faskes;
    if (faspen) dataBencanaFields.faspen = faspen;
    if (peribadatan) dataBencanaFields.peribadatan = peribadatan;
    if (terdampak) dataBencanaFields.terdampak = terdampak;
    if (luka) dataBencanaFields.luka = luka;
    if (md) dataBencanaFields.md = md;

    try {
      let dataBencana = await DataBencana.findOne({ petugas: req.user.id });

      // jika fasilitas Posko existed, lakukan update fasilitasPosko
      if (dataBencana) {
        // update
        dataBencana = await DataBencana.findOneAndUpdate(
          { petugas: req.user.id },
          { $set: dataBencanaFields },
          { new: true }
        );
        return res.json(dataBencana);
      }

      //   create fasilitas Posko
      dataBencana = new DataBencana(dataBencanaFields);
      await dataBencana.save();
      res.json(dataBencana);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

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
