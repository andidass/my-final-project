const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const Profile = require("../../Model/Profile");
const UserPosko = require("../../Model/UserPosko");

// @route   Get posko/profile/me
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

// @route   POST posko/profile
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

    const { nohp, alamat, status, facebook, twitter } = req.body;

    // build profile obj
    const profileFields = {};
    profileFields.user = req.user.id;
    if (nohp) profileFields.nohp = nohp;
    if (alamat) profileFields.alamat = alamat;
    if (status) profileFields.status = status;

    profileFields.sosmed = {};
    if (facebook) profileFields.sosmed.facebook = facebook;
    if (twitter) profileFields.sosmed.twitter = twitter;

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

// @route   Get posko/profile
// #desc    Get all users profile
// @access  Public

router.get("/", async (req, res) => {
  try {
    let profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get posko/profile/user/:user_id
// #desc    Get profile by user_id
// @access  Public

router.get("/user/:user_id", async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   Delete posko/profile
// #desc    delete user and profile
// @access  Private

router.delete("/", auth, async (req, res) => {
  try {
    // remove profile
    await Profile.findOneAndDelete({ user: req.user.id });
    // remove user
    await UserPosko.findOneAndDelete({ _id: req.user.id });

    res.json({ msg: "user deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Put posko/profile/experience
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
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE posko/profile/experience/:exp_id
// #desc    delete experience profile
// @access  Private

router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // get removed index
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
