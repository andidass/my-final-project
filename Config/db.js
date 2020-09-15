const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("database connected...");
  } catch (err) {
    console.error(err.message);
    // exit proses jika gagal
    process.exit(1);
  }
};
module.exports = connectDB;
