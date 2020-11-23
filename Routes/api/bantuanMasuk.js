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
    let bantuanMasuk = await BantuanMasuk.findOne({
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
    const newBantuanMasuk = {};
    if (namaDonatur) newBantuanMasuk.namaDonatur = namaDonatur;
    if (sumberDana) newBantuanMasuk.sumberDana = sumberDana;
    if (alamatDonatur) newBantuanMasuk.alamatDonatur = alamatDonatur;

    newBantuanMasuk.dataItemBantuan = [
      {
        jenisBantuan,
        namaBarang,
        satuan,
        banyaknya,
        nilainya,
      },
    ];

    newBantuanMasuk.dataItemBantuan = dataItemBantuan;

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

// @route   Get posko/bantuan-masuk
// #desc    Get all bantuan masuk data
// @access  Public

router.get("/", async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.find().populate("user", ["name"]);
    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get posko/bantuan-masuk/:user_id
// #desc    Get data bantuan masuk by user_id
// @access  Public

router.get("/:user_id", async (req, res) => {
  try {
    let bantuanMasuk = await BantuanMasuk.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!bantuanMasuk)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(bantuanMasuk);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   POST posko/bantuan-masuk
// #desc    Post data bantuan-masuk
// @access  Private

// router.post(
//   "/",
//   [
//     auth,
//     [
//       check("namaDonatur", "Nama/Instansi donatur harus diisi").not().isEmpty(),
//       check("sumberDana", "Sumber Dana harus diisi").not().isEmpty(),
//       check("alamatDonatur", "Alamat Donatur harus diisi").not().isEmpty(),
//   check("jenisBantuan", "Jenis Barang harus diisi").not().isEmpty(),
//   check("namaBarang", "Nama Barang Bantuan harus diisi").not().isEmpty(),
//   check("satuan", "Satuan Barang harus diisi").not().isEmpty(),
//   check("banyaknya", "Banyaknya barang harus diisi").isNumeric(),
//   check("nilainya", "Nilai barang harus diisi").isNumeric(),
//     ],
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
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
//       dataItemBantuan,
//     } = req.body;

//     // dataItemBantuan=[
//     //     {jenisBantuan:req.body.num1, jenisBantuan:req.body.sub1},
//     // {
//     //     jenisBantuan:req.body.num2, jenisBantuan:req.body.sub2
//     // }]

//     // build profile obj
//     const bantuanMasukFields = {};
//     bantuanMasukFields.user = req.user.id;
//     bantuanMasukFields.dataBantuanMasuk = {};
//     if (namaDonatur)
//       bantuanMasukFields.dataBantuanMasuk.namaDonatur = namaDonatur;
//     if (sumberDana) bantuanMasukFields.dataBantuanMasuk.sumberDana = sumberDana;
//     if (alamatDonatur)
//       bantuanMasukFields.dataBantuanMasuk.alamatDonatur = alamatDonatur;

//     bantuanMasukFields.dataBantuanMasuk.dataItemBantuan = [
//       {
//         jenisBantuan,
//         namaBarang,
//         satuan,
//         banyaknya,
//         nilainya,
//       },
//       //   {
//       //     jenisBantuan: req.body.num,
//       //     namaBarang: req.body.sub,
//       //     satuan: req.body.sat,
//       //     banyaknya: req.body.bnyk,
//       //     nilainya: req.body.nil,
//       //   },
//     ];
//     bantuanMasukFields.dataBantuanMasuk.dataItemBantuan = dataItemBantuan;
//     // if (jenisBantuan)
//     //   bantuanMasukFields.dataBantuanMasuk.dataItemBantuan.jenisBantuan = jenisBantuan;
//     // if (namaBarang)
//     //   bantuanMasukFields.dataBantuanMasuk.dataItemBantuan.namaBarang = namaBarang;
//     // if (satuan)
//     //   bantuanMasukFields.dataBantuanMasuk.dataItemBantuan.satuan = satuan;
//     // if (banyaknya)
//     //   bantuanMasukFields.dataBantuanMasuk.dataItemBantuan.banyaknya = banyaknya;
//     // if (nilainya)
//     //   bantuanMasukFields.dataBantuanMasuk.dataItemBantuan.nilainya = nilainya;

//     try {
//       let bantuanMasuk = await BantuanMasuk.find({ user: req.user.id });

//       //   create fasilitas Posko
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
