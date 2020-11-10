const mongoose = require("mongoose");
const UserPosko = require("./UserPosko");

const FasilitasFoskoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: UserPosko,
  },
  fkes: {
    type: Number,
  },
  fpend: {
    type: Number,
  },
  mck: {
    type: Number,
  },
  musholah: {
    type: Number,
  },
  dapurUmum: {
    type: Number,
  },
  tendaUmum: {
    type: Number,
  },
});

module.exports = FasilitasFosko = mongoose.model(
  "PostFacility",
  FasilitasFoskoSchema
);
