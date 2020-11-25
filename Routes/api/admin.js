const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Admin = require("../../Model/Admin");

// @route       POST api/admin
// @desc        Register Admin Posko
// @access      Public
router.post(
  "/",
  [
    check("name", "nama lengkap wajib diisi").not().isEmpty(),
    check("position", "jabatan wajib diisi").not().isEmpty(),
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

    const { name, email, password, position } = req.body;

    try {
      // apakah email exist?
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res.status(400).json({
          errors: [{ msg: "email sudah terdaftar, silahkan lakukan login" }],
        });
      }

      // get gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      admin = new Admin({
        name,
        position,
        email,
        avatar,
        password,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      // save to db
      await admin.save();

      // return jsonwebtoken for access protected route
      // res.send("admin berhasil terdaftar");
      const payload = {
        user: {
          id: admin.id,
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
