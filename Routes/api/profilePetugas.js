const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const ProfilePetugas = require("../../Model/ProfilePetugas");
const Petugas = require("../../Model/Petugas");

// @route   Get petugas/profile/me
// #desc    Test route
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    let petugasProfile = await ProfilePetugas.findOne({
      petugas: req.user.id,
    }).populate("petugas", ["name", "avatar"]);
    if (!petugasProfile) {
      return res.status(400).json({ msg: "petugas tidak memiliki profile" });
    }
    res.json(petugasProfile);
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
      // check("nohp", "No Hp Harus diisi").isNumeric(),
      check("jobdesc", "Job Deskripsi harus diisi").not().isEmpty(),
      check("kecDesa", "Kecamatan / Desa-Dusun harus diisi").not().isEmpty(),
      check("kelurahan", "kelurahan harus diisi").not().isEmpty(),
      check("kabupaten", "Kabupaten harus diisi").not().isEmpty(),
      // check("regdesc", "Deskripsi wilayah harus diisi").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nohp, jobdesc, kecDesa, kelurahan, kabupaten, regdesc } = req.body;

    // build profile obj
    const profileFields = {};
    profileFields.petugas = req.user.id;
    if (nohp) profileFields.nohp = nohp;
    if (jobdesc) profileFields.jobdesc = jobdesc;
    if (kecDesa) profileFields.kecDesa = kecDesa;
    if (kelurahan) profileFields.kelurahan = kelurahan;
    if (kabupaten) profileFields.kabupaten = kabupaten;
    if (regdesc) profileFields.regdesc = regdesc;

    try {
      let profile = await ProfilePetugas.findOne({ petugas: req.user.id });

      // jika profile existed, lakukan update profile
      if (profile) {
        // update
        profile = await ProfilePetugas.findOneAndUpdate(
          { petugas: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //   create profile
      profile = new ProfilePetugas(profileFields);
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
    let petugas = await ProfilePetugas.find().populate("petugas", [
      "name",
      "avatar",
    ]);
    res.json(petugas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Get petugas/profile/:petugas_id
// #desc    Get profile by petugas_id
// @access  Public

router.get("/:petugas_id", async (req, res) => {
  try {
    let petugas = await ProfilePetugas.findOne({
      petugas: req.params.petugas_id,
    }).populate("petugas", ["name", "avatar"]);

    if (!petugas) return res.status(400).json({ msg: "user tidak ditemukan" });

    res.json(petugas);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "user tidak ditemukan" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   Delete petugas/profile
// #desc    delete petugas and profile petugas
// @access  Private

router.delete("/", auth, async (req, res) => {
  try {
    // remove profile
    await ProfilePetugas.findOneAndDelete({ petugas: req.user.id });
    // remove user
    await Petugas.findOneAndDelete({ _id: req.user.id });

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
