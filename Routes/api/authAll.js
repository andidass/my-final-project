const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../Middleware/auth");

const UserPosko = require("../../Model/UserPosko");
const Petugas = require("../../Model/Petugas");
const Admin = require("../../Model/Admin");

// @route   Get login
// #desc    login akun pos
// @access  Auth

router.get("/admin", auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   Get login
// #desc    login akun petugas
// @access  Auth

router.get("/petugas", auth, async (req, res) => {
  try {
    const petugas = await Petugas.findById(req.user.id).select("-password");
    res.json(petugas);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   Get login
// #desc    login akun pos
// @access  Auth

router.get("/pos", auth, async (req, res) => {
  try {
    const pos = await UserPosko.findById(req.user.id).select("-password");
    res.json(pos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route       POST login
// @desc        Login user with username / email & password
// @access      public
router.post(
  "/",
  [
    check("usernameemail", "Username / email wajib diisi").not().isEmpty(),
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

    const { usernameemail, password } = req.body;

    try {
      let petugas = await Petugas.findOne({ email: usernameemail });
      let admin = await Admin.findOne({ email: usernameemail });
      let pos = await UserPosko.findOne({ usernameposko: usernameemail });

      if (!petugas && !admin && !pos) {
        return res.status(400).json({
          errors: [{ msg: "email / username anda salah" }],
        });
      }

      if (admin) {
        const isMatchAdmin = await bcrypt.compare(password, admin.password);
        if (!isMatchAdmin) {
          return res.status(400).json({
            errors: [{ msg: "password admin anda salah" }],
          });
        }
        var payload = {
          user: {
            id: admin.id,
            role: "admin",
          },
        };
      }

      if (petugas) {
        const isMatchPetugas = await bcrypt.compare(password, petugas.password);
        if (!isMatchPetugas) {
          return res.status(400).json({
            errors: [{ msg: "password petugas anda salah" }],
          });
        }
        var payload = {
          user: {
            id: petugas.id,
            role: "petugas",
          },
        };
      }

      if (pos) {
        const isMatchPos = await bcrypt.compare(password, pos.password);
        if (!isMatchPos) {
          return res.status(400).json({
            errors: [{ msg: "password pos anda salah" }],
          });
        }
        var payload = {
          user: {
            id: pos.id,
            role: "pos",
          },
        };
      }

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 }, // expiresIn : 3600 second / 1 jam expired.
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
