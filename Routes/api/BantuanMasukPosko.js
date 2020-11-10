const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanMasuk = require("../../Model/BantuanMasuk");

// @route   GET posko/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.find({
      // change to findOne after fix bug
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!bantuanMasuk) {
      return res.status(400).json({
        msg: "Posko tidak memiliki data bantuan masuk",
      });
    }
    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST posko/bantuan-masuk
// #desc    Post data bantuan-masuk
// @access  Private

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

// @route   Put posko/bantuan-masuk/input-bantuan-masuk
// #desc    add bantuan masuk
// @access  Private

router.put(
  "/input-bantuan-masuk",
  [
    auth,
    [
      check("namaDonatur", "Nama/Instansi donatur harus diisi").not().isEmpty(),
      check("sumberDana", "Sumber Dana harus diisi").not().isEmpty(),
      check("alamatDonatur", "Alamat Donatur harus diisi").not().isEmpty(),
      check("jenisBantuan", "Jenis Barang harus diisi").not().isEmpty(),
      check("namaBarang", "Nama Barang Bantuan harus diisi").not().isEmpty(),
      check("satuan", "Satuan Barang harus diisi").not().isEmpty(),
      check("banyaknya", "Banyaknya barang harus diisi").isNumeric(),
      check("nilainya", "Nilai barang harus diisi").isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      namaDonatur,
      sumberDana,
      alamatDonatur,
      jenisBantuan,
      namaBarang,
      satuan,
      banyaknya,
      nilainya,
    } = req.body;

    const newBantuanMasuk = {
      namaDonatur,
      sumberDana,
      alamatDonatur,
      jenisBantuan,
      namaBarang,
      satuan,
      banyaknya,
      nilainya,
    };

    newBantuanMasuk.dataItemBantuan = {};
    if (jenisBantuan)
      newBantuanMasuk.dataItemBantuan.jenisBantuan = jenisBantuan;
    if (namaBarang) newBantuanMasuk.dataItemBantuan.namaBarang = namaBarang;
    if (satuan) newBantuanMasuk.dataItemBantuan.satuan = satuan;
    if (banyaknya) newBantuanMasuk.dataItemBantuan.banyaknya = banyaknya;
    if (nilainya) newBantuanMasuk.dataItemBantuan.nilainya = nilainya;
    // newBantuanMasuk.dataItemBantuan.jenisBantuan = jenisBantuan;
    // newBantuanMasuk.dataItemBantuan.namaBarang = namaBarang;
    // newBantuanMasuk.dataItemBantuan.satuan = satuan;
    // newBantuanMasuk.dataItemBantuan.banyaknya = banyaknya;
    // newBantuanMasuk.dataItemBantuan.nilainya = nilainya;

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

// router.post(
//   "/",
//   [
//     auth,
//     [
//       check("namaDonatur", "Nama/Instansi donatur harus diisi").not().isEmpty(),
//       check("sumberDana", "Sumber Dana harus diisi").not().isEmpty(),
//       check("alamatDonatur", "Alamat Donatur harus diisi").not().isEmpty(),
//       check("jenisBantuan", "Jenis Barang harus diisi").not().isEmpty(),
//       check("namaBarang", "Nama Barang Bantuan harus diisi").not().isEmpty(),
//       check("satuan", "Satuan Barang harus diisi").not().isEmpty(),
//       check("banyaknya", "Banyaknya barang harus diisi").isNumeric(),
//       check("nilainya", "Nilai barang harus diisi").isNumeric(),
//     ],
//   ],

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: errors.array(),
//       });
//     }

//     const {
//       namaDonatur,
//       sumberDana,
//       alamatDonatur,
//       jenisBantuan,
//       namaBarang,
//       satuan,
//       banyaknya,
//       nilainya,
//     } = req.body;

//     // build profile obj
//     const bantuanMasukFields = {};
//     bantuanMasukFields.user = req.user.id;
// if (namaDonatur)
//   bantuanMasukFields.dataBantuanMasuk.namaDonatur = namaDonatur;
// if (sumberDana) bantuanMasukFields.sumberDana = sumberDana;
// if (alamatDonatur) bantuanMasukFields.alamatDonatur = alamatDonatur;
// bantuanMasukFields.dataItemBantuan = {};
// if (jenisBantuan)
//   bantuanMasukFields.dataItemBantuan.jenisBantuan = jenisBantuan;
// if (namaBarang) bantuanMasukFields.dataItemBantuan.namaBarang = namaBarang;
// if (satuan) bantuanMasukFields.dataItemBantuan.satuan = satuan;
// if (banyaknya) bantuanMasukFields.dataItemBantuan.banyaknya = banyaknya;
// if (nilainya) bantuanMasukFields.dataItemBantuan.nilainya = nilainya;

//     try {
//       let bantuanMasuk = await BantuanMasuk.findOne({
//         user: req.user.id,
//       });

//       // jika data existed, lakukan update data
//       if (bantuanMasuk) {
//         // update
//         bantuanMasuk = await BantuanMasuk.findOneAndUpdate(
//           { user: req.user.id },
//           { $set: bantuanMasukFields },
//           { new: true }
//         );
//         return res.json(bantuanMasuk);
//       }

//       //   create data bantuan-masuk
//       bantuanMasuk = new BantuanMasuk(bantuanMasukFields);
//       await bantuanMasuk.save();
//       res.json(bantuanMasuk);
//     } catch (err) {
//       console.error(err.message);
//       res.status(400).send("Server Error");
//     }
//   }
// );
module.exports = router;
