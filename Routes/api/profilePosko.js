const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const ProfilePosko = require("../../Model/ProfilePosko");
const UserPosko = require("../../Model/UserPosko");

// @route   Get api/profile/me
// #desc    Test route
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let profilePosko = await ProfilePosko.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!profilePosko) {
      return res.status(400).json({ msg: "user tidak memiliki profile" });
    }
    res.json(profilePosko);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "server error" });
  }
});

// @route   POST api/profile
// #desc    Create or update user profile
// @access  Private

router.post(
  "/",
  [
    auth,
    [
      check("namaPosko", "Nama posko harus diisi").not().isEmpty(),
      check("alamatPosko", "Alamat posko harus diisi").not().isEmpty(),
      check("kecPosko", "Kecamatan posko harus diisi").not().isEmpty(),
      check("kabPosko", "Kabupaten posko harus diisi").not().isEmpty(),
      check("namaPetugas", "Nama petugas harus diisi").not().isEmpty(),
      check("jabatan", "Jabatan harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      namaPosko,
      alamatPosko,
      kecPosko,
      kabPosko,
      namaPetugas,
      jabatan,
    } = req.body;

    // build profile obj
    const profilePoskoFields = {};
    profilePoskoFields.user = req.user.id;
    if (namaPosko) profilePoskoFields.namaPosko = namaPosko;
    if (alamatPosko) profilePoskoFields.alamatPosko = alamatPosko;
    if (kecPosko) profilePoskoFields.kecPosko = kecPosko;
    if (kabPosko) profilePoskoFields.kabPosko = kabPosko;

    profilePoskoFields.petugas = {};
    if (namaPetugas) profilePoskoFields.petugas.namaPetugas = namaPetugas;
    if (jabatan) profilePoskoFields.petugas.jabatan = jabatan;

    try {
      let profilePosko = await ProfilePosko.findOne({ user: req.user.id });

      // jika profile existed, lakukan update profile
      if (profilePosko) {
        // update
        profilePosko = await ProfilePosko.findOneAndUpdate(
          { user: req.user.id },
          { $set: profilePoskoFields },
          { new: true }
        );
        return res.json(profilePosko);
      }

      //   create profile
      profilePosko = new ProfilePosko(profilePoskoFields);
      await profilePosko.save();
      res.json(profilePosko);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route   Get api/profile
// #desc    Get all users profile
// @access  Public

router.get("/", async (req, res) => {
  try {
    let profilesPosko = await ProfilePosko.find().populate("user", ["name"]);
    res.json(profilesPosko);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get api/profile/user/:user_id
// #desc    Get profile by user_id
// @access  Public

router.get("/user/:user_id", async (req, res) => {
  try {
    let profilePosko = await ProfilePosko.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!profilePosko)
      return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(profilePosko);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   Delete api/profile
// #desc    delete user and profile
// @access  Private

router.delete("/", auth, async (req, res) => {
  try {
    // remove profile
    await ProfilePosko.findOneAndDelete({ user: req.user.id });
    // remove user
    await UserPosko.findOneAndDelete({ _id: req.user.id });

    res.json({ msg: "user deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Put api/profile/experience
// #desc    add experience profile
// @access  Private

router.put(
  "/experience",
  [
    auth,
    [
      check("title", "title harus diisi").not().isEmpty(),
      check("company", "company harus diisi").not().isEmpty(),
      // check("from", "from harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, company, location, from, to } = req.body;
    const newExp = { title, company, location, from, to };

    try {
      const profilePosko = await ProfilePosko.findOne({ user: req.user.id });
      profilePosko.experience.unshift(newExp);

      await profilePosko.save();
      res.json(profilePosko);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/profile/experience/:exp_id
// #desc    delete experience profile
// @access  Private

router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profilePosko = await ProfilePosko.findOne({ user: req.user.id });

    // get removed index
    const removeIndex = profilePosko.experience
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    profilePosko.experience.splice(removeIndex, 1);

    await profilePosko.save();

    res.json(profilePosko);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;