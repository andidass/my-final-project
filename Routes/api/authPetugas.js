const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../Middleware/auth");

const Petugas = require("../../Model/Petugas");

// @route   Get petugas/login
// #desc    Test route
// @access  Auth

router.get("/", auth, async (req, res) => {
  try {
    const petugas = await Petugas.findById(req.user.id).select("-password");
    res.json(petugas);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route       POST petugas/login
// @desc        Login user with email & password
// @access      Authenticated
router.post(
  "/",
  [
    check("email", "email wajib diisi").isEmail(),
    check("password", "password harus berisi minimal 6 karakter").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // jika terjadi error
      return res.status(400).json({ errors: errors.array() }); // bad request 400, dengan errors.array utk menampilkan error yg terjadi
    }

    const { email, password } = req.body;

    try {
      // apakah email benar?
      let petugas = await Petugas.findOne({ email });
      if (!petugas) {
        return res.status(400).json({
          errors: [{ msg: "email / password salah" }],
        });
      }

      //   apakah password benar?
      const isMatch = await bcrypt.compare(password, petugas.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "email / password salah" }],
        });
      }
      // return jsonwebtoken for access protected route
      // res.send("User berhasil terdaftar");
      const payload = {
        user: {
          id: petugas.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, // expiresIn set ke 3600 second / 1 jam expired.
        (err, token) => {
          if (err) throw err;
          // tampilkan token
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
