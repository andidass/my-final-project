const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  nohp: {
    type: String,
  },
  alamat: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sosmed: {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
    },
  ],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
