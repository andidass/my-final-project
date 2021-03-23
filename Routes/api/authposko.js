const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../Middleware/auth");

const UserPosko = require("../../Model/UserPosko");

// @route   Get posko/login
// #desc    login akun pos
// @access  Auth

router.get("/", auth, async (req, res) => {
  try {
    const user = await UserPosko.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   Get posko/login/all-accounts-pos
// #desc    get all accounts pos
// @access  Auth

router.get("/all-accounts-pos", auth, async (req, res) => {
  try {
    const user = await UserPosko.find().select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route       POST posko/login
// @desc        Login user with username posko & password
// @access      Authenticated
router.post(
  "/",
  [
    check("usernameposko", "Username posko wajib diisi").not().isEmpty(),
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

    const { usernameposko, password } = req.body;

    try {
      // apakah username posko benar?
      let user = await UserPosko.findOne({ usernameposko });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "usernameposko / password salah" }],
        });
      }

      //   apakah password benar?
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "usernameposko / password salah" }],
        });
      }
      // return jsonwebtoken for access protected route
      // res.send("User berhasil terdaftar");
      const payload = {
        user: {
          id: user.id,
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
