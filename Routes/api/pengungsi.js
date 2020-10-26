const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const Pengungsi = require("../../Model/Pengungsi");

// @route   Get api/profile
// #desc    Get all users profile
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

// @route   POST api/pengungsi
// #desc    Create or update pengungsi
// @access  Private

router.post(
  "/",
  [
    auth,
    [
      check("namaPengungsi", "Nama pengungsi harus diisi").not().isEmpty(),
      check("jenisKelamin", "Jenis kelamin harus diisi").not().isEmpty(),
      check("umur", "Umur harus diisi").not().isEmpty(),
      check("keadaan", "Keadaan harus diisi").not().isEmpty(),
      check("alamat", "Alamat harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { namaPengungsi, jenisKelamin, umur, keadaan, alamat } = req.body;

    // build profile obj
    const pengungsiFields = {};
    pengungsiFields.user = req.user.id;
    pengungsiFields.allPengungsi = {};
    if (namaPengungsi)
      pengungsiFields.allPengungsi.namaPengungsi = namaPengungsi;
    if (jenisKelamin) pengungsiFields.allPengungsi.jenisKelamin = jenisKelamin;
    if (umur) pengungsiFields.allPengungsi.umur = umur;
    if (keadaan) pengungsiFields.allPengungsi.keadaan = keadaan;
    if (alamat) pengungsiFields.allPengungsi.alamat = alamat;

    try {
      let pengungsi = await Pengungsi.findOne({ user: req.user.id });

      // jika profile existed, lakukan update profile
      // if (pengungsi) {
      //   // update
      //   pengungsi = await Pengungsi.findOneAndUpdate(
      //     { user: req.user.id },
      //     { $set: pengungsiFields },
      //     { new: true }
      //   );
      //   return res.json(pengungsi);
      // }

      //   create profile
      pengungsi = new Pengungsi(pengungsiFields);
      // pengungsi.semuaPengungsi.unshift(pengungsiFields.allPengungsi);
      await pengungsi.save();
      res.json(pengungsi);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route   POST api/pengungsi
// #desc    Create or update pengungsi
// @access  Private

// router.put(
//   "/",
//   [
//     auth,
//     [
//       check("namaPengungsi", "Nama pengungsi harus diisi").not().isEmpty(),
//       check("jenisKelamin", "Jenis kelamin harus diisi").not().isEmpty(),
//       check("umur", "Umur harus diisi").not().isEmpty(),
//       check("keadaan", "Keadaan harus diisi").not().isEmpty(),
//       check("alamat", "Alamat harus diisi").not().isEmpty(),
//     ],
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { namaPengungsi, jenisKelamin, umur, keadaan, alamat } = req.body;
//     // const newPengungsi = { namaPengungsi, jenisKelamin, umur, keadaan, alamat };

//     const pengungsiFields = {};
//     pengungsiFields.user = req.user.id;
//     pengungsiFields.allPengungsi = {};
//     if (namaPengungsi)
//       pengungsiFields.allPengungsi.namaPengungsi = namaPengungsi;
//     if (jenisKelamin) pengungsiFields.allPengungsi.jenisKelamin = jenisKelamin;
//     if (umur) pengungsiFields.allPengungsi.umur = umur;
//     if (keadaan) pengungsiFields.allPengungsi.keadaan = keadaan;
//     if (alamat) pengungsiFields.allPengungsi.alamat = alamat;

//     try {
//       const pengungsi = await Pengungsi.findOne({ user: req.user.id });

//       pengungsi.allPengungsi.unshift(pengungsiFields);
//       await pengungsi.save();
//       res.json(pengungsi);
//     } catch (err) {
//       console.error(err.message);
//       res.status(400).send("Server Error");
//     }
//   }
// );

// @route   POST api/pengungsi
// #desc    Create or update pengungsi
// @access  Private

module.exports = router;
