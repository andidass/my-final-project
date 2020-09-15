const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const Profile = require("../../Model/Profile");
const UserPosko = require("../../Model/UserPosko");

// @route   Get api/profile/me
// #desc    Test route
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "user tidak memiliki profile" });
    }
    res.json(profile);
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
      check("nohp", "No Hp Harus diisi").not().isEmpty(),
      check("alamat", "Alamat harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nohp, alamat, status } = req.body;

    // build profile obj
    const profileFields = {};
    profileFields.user = req.user.id;
    if (nohp) profileFields.nohp = nohp;
    if (alamat) profileFields.alamat = alamat;
    if (status) profileFields.status = status;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      // jika profile existed, lakukan update profile
      if (profile) {
        // update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //   create profile
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

module.exports = router;
