const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const Pengungsi = require("../../Model/Pengungsi");

// @route   Get posko/pengungsi/me
// #desc    Get all refugees
// @access  Public

router.get("/me", auth, async (req, res) => {
  try {
    let pengungsi = await Pengungsi.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!pengungsi) {
      return res.status(400).json({ msg: "posko tidak memiliki pengungsi" });
    }
    res.json(pengungsi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get posko/pengungsi
// #desc    Get all refugees
// @access  Public

router.get("/", async (req, res) => {
  try {
    let pengungsi = await Pengungsi.find().populate("user", ["name"]);
    res.json(pengungsi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST posko/pengungsi
// #desc    Create refugee
// @access  Private

router.post(
  "/",

  auth,
  // [
  //   check("namaPengungsi", "Nama pengungsi harus diisi").not().isEmpty(),
  //   check("jenisKelamin", "Jenis kelamin harus diisi").not().isEmpty(),
  //   check("umur", "Umur harus diisi").not().isEmpty(),
  //   check("keadaan", "Keadaan harus diisi").not().isEmpty(),
  //   check("alamat", "Alamat harus diisi").not().isEmpty(),
  // ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const { namaPengungsi, jenisKelamin, umur, keadaan, alamat } = req.body;

    // build profile obj
    const pengungsiFields = {};
    pengungsiFields.user = req.user.id;
    // pengungsiFields.allPengungsi = {};
    // if (namaPengungsi)
    //   pengungsiFields.allPengungsi.namaPengungsi = namaPengungsi;
    // if (jenisKelamin) pengungsiFields.allPengungsi.jenisKelamin = jenisKelamin;
    // if (umur) pengungsiFields.allPengungsi.umur = umur;
    // if (keadaan) pengungsiFields.allPengungsi.keadaan = keadaan;
    // if (alamat) pengungsiFields.allPengungsi.alamat = alamat;

    try {
      let pengungsi = await Pengungsi.findOne({ user: req.user.id });

      //   create profile
      pengungsi = new Pengungsi(pengungsiFields);
      await pengungsi.save();
      res.json(pengungsi);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route   Put posko/pengungsi/input-pengungsi
// #desc    add refugees
// @access  Private

router.put(
  "/input-pengungsi",
  [
    auth,
    [
      check("namaPengungsi", "nama pengungsi harus diisi").not().isEmpty(),
      check("umur", "umur harus diisi").not().isEmpty(),
      check("jenisKelamin", "Jenis kelamin pengungsi harus diisi")
        .not()
        .isEmpty(),
      check("keadaan", "keadaan pengungsi harus diisi").not().isEmpty(),
      check("alamat", "alamat pengungsi harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { namaPengungsi, jenisKelamin, umur, keadaan, alamat } = req.body;
    const newPengungsi = { namaPengungsi, jenisKelamin, umur, keadaan, alamat };

    try {
      const pengungsi = await Pengungsi.findOne({ user: req.user.id });
      pengungsi.allPengungsi.unshift(newPengungsi);

      await pengungsi.save();
      res.json(pengungsi);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE posko/pengungsi/input-pengungsi/:pengungsi_id
// #desc    delete experience profile
// @access  Private

router.delete("/input-pengungsi/:pengungsi_id", auth, async (req, res) => {
  try {
    const pengungsi = await Pengungsi.findOne({ user: req.user.id });

    // get removed index
    const removeIndex = pengungsi.allPengungsi
      .map((item) => item.id)
      .indexOf(req.params.pengungsi_id);

    pengungsi.allPengungsi.splice(removeIndex, 1);

    await pengungsi.save();

    res.json(pengungsi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
