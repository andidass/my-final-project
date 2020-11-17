const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const PermintaanBantuan = require("../../Model/PermintaanBantuan");

// @route   Get posko/permintaan-bantuan/me
// #desc    Get data permintaan bantuan
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let permintaanBantuan = await PermintaanBantuan.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!permintaanBantuan) {
      return res
        .status(400)
        .json({ msg: "posko tidak memiliki permintaan bantuan" });
    }
    res.json(permintaanBantuan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get posko/permintaan-bantuan
// #desc    Get all data permintaan bantuan
// @access  Public

router.get("/", async (req, res) => {
  try {
    let permintaanBantuan = await PermintaanBantuan.find().populate("user", [
      "name",
    ]);
    res.json(permintaanBantuan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST posko/permintaan-bantuan
// #desc    Create data permintaan bantuan
// @access  Private

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const permintaanBantuanFields = {};
  permintaanBantuanFields.user = req.user.id;
  try {
    let permintaanBantuan = await PermintaanBantuan.findOne({
      user: req.user.id,
    });
    permintaanBantuan = new PermintaanBantuan(permintaanBantuanFields);
    await permintaanBantuan.save();
    res.json(permintaanBantuan);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

// @route   Put posko/permintaan-bantuan
// #desc    add data permintaan bantuan
// @access  Private

router.put(
  "/",
  [
    auth,
    [
      check("jenisBantuan", "jenis barang harus diisi").not().isEmpty(),
      check("namaBarang", "nama barang harus diisi").not().isEmpty(),
      check("satuan", "satuan barang harus diisi").not().isEmpty(),
      check(
        "banyaknya",
        "banyaknya barang harus diisi menggunakan angka"
      ).isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { jenisBantuan, namaBarang, satuan, banyaknya } = req.body;
    const newPermintaanBantuan = {
      jenisBantuan,
      namaBarang,
      satuan,
      banyaknya,
    };

    try {
      const permintaanBantuan = await PermintaanBantuan.findOne({
        user: req.user.id,
      });
      permintaanBantuan.dataPermintaanBantuan.unshift(newPermintaanBantuan);

      await permintaanBantuan.save();
      res.json(permintaanBantuan);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE posko/permintaan-bantuan/:permintaan_id
// #desc    delete data permintaan bantuan profile
// @access  Private

router.delete("/:permintaan_id", auth, async (req, res) => {
  try {
    const permintaanBantuan = await PermintaanBantuan.findOne({
      user: req.user.id,
    });

    // get removed index
    const removeIndex = permintaanBantuan.dataPermintaanBantuan
      .map((item) => item.id)
      .indexOf(req.params.permintaan_id);

    permintaanBantuan.dataPermintaanBantuan.splice(removeIndex, 1);

    await permintaanBantuan.save();

    res.json(permintaanBantuan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
