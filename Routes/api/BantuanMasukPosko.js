const express = require('express');
const router = express.Router();
const {check, validationResult} = require("express-validator");

const auth = require("../../Middleware/auth");
const BantuanMasuk = require("../../Model/BantuanMasuk");

// @route   GET posko/bantuan-masuk/me
// #desc    GET data bantuan-masuk account
// @access  Private

router.get('/me', auth, async(req,res)=>{
    try {
        let bantuanMasuk = awit BantuanMasuk.findOne({
            user: req.user.id,
        }).populate("user", ["name"]);
        if(!bantuanMasuk){
            return res.status(400).json({msg:"Posko tidak memiliki data bantuan masuk"})
        }
        res.json(bantuanMasuk);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

// @route   POST posko/bantuan-masuk
// #desc    Post data bantuan-masuk
// @access  Private

router.post(
    "/",
    [auth,
    [
      check("namaDonatur", "Nama/Instansi donatur harus diisi").not().isEmpty(),
      check("sumberDana", "Sumber Dana harus diisi").not().isEmpty(),
      check("alamatDOnatur", "Alamat Donatur harus diisi").not().isEmpty(),
      check("jenisBantuna", "Jenis Barang harus diisi").not().isEmpty(),
      check("namaBarang", "Nama Barang Bantuan harus diisi").not().isEmpty(),
      check("satuan", "Satuan Barang harus diisi").not().isEmpty(),
      check("banyaknya", "Banyaknya barang harus diisi").not().isEmpty(),
      check("nilainya", "Nilai barang harus diisi").not().isEmpty(),
    ],],
  
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