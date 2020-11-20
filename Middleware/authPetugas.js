const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // cek jika tidak ada token
  if (!token) {
    return res.status(401).json({ msg: "Token tidak ada, Izin ditolak!" });
  }

  // verify token (jika token ada dan benar)
  try {
    //   decoded token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // ambil data user dari decoded token
    req.petugas = decoded.petugas;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token salah" }); // jika token salah
  }
};
