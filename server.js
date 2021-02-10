const express = require("express");
const connectDB = require("./Config/db");

const app = express();

// mengkoneksikan database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// * define router

// pos
app.use("/pos/registrasi", require("./Routes/api/poskoUser"));
app.use("/pos/login", require("./Routes/api/authposko"));
app.use("/pos/profile", require("./Routes/api/profilePosko"));
app.use("/pos/pengungsi", require("./Routes/api/pengungsi"));
// app.use("/posko/bantuan-masuk", require("./Routes/api/bantuanMasuk"));
app.use("/pos/fasilitas-pos", require("./Routes/api/fasilitasPosko"));
app.use("/pos/permintaan-bantuan", require("./Routes/api/permintaanBantuan"));
app.use("/pos/bantuan-masuk", require("./Routes/api/bantuanMasukPos"));

// petugas
app.use("/petugas/login", require("./Routes/api/authPetugas"));
app.use("/petugas/registrasi", require("./Routes/api/petugas"));
app.use("/petugas/profile", require("./Routes/api/profilePetugas"));
app.use("/petugas/data-bencana", require("./Routes/api/dataBencana"));

// admin
app.use("/admin/login", require("./Routes/api/authAdmin"));
app.use("/admin/registrasi", require("./Routes/api/admin"));
app.use("/admin/bantuan-utama", require("./Routes/api/setBantuanUtama"));
app.use("/admin/bantuan-masuk", require("./Routes/api/bantuanMasuk"));
app.use("/admin/bantuan-keluar", require("./Routes/api/bantuanKeluar"));
// app.use("/api/users", require("./Routes/api/user"));
// app.use("/api/auth", require("./Routes/api/auth"));
// app.use("/api/profile", require("./Routes/api/profile"));
// app.use("/api/post", require("./Routes/api/Post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running di port ${PORT}`));
