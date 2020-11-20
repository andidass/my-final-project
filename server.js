const express = require("express");
const connectDB = require("./Config/db");

const app = express();

// mengkoneksikan database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// * define router

// posko
app.use("/posko/registrasi", require("./Routes/api/poskoUser"));
app.use("/posko/login", require("./Routes/api/authposko"));
app.use("/posko/profile", require("./Routes/api/profilePosko"));
app.use("/posko/pengungsi", require("./Routes/api/pengungsi"));
app.use("/posko/bantuan-masuk", require("./Routes/api/BantuanMasukPosko"));
app.use("/posko/fasilitas-posko", require("./Routes/api/fasilitasPosko"));
app.use("/posko/permintaan-bantuan", require("./Routes/api/permintaanBantuan"));

// petugas
app.use("/petugas/login", require("./Routes/api/authPetugas"));
app.use("/petugas/registrasi", require("./Routes/api/petugas"));
app.use("/petugas/profile", require("./Routes/api/profilePetugas"));

// app.use("/api/users", require("./Routes/api/user"));
// app.use("/api/auth", require("./Routes/api/auth"));
// app.use("/api/profile", require("./Routes/api/profile"));
// app.use("/api/post", require("./Routes/api/Post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running di port ${PORT}`));
