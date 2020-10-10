const express = require("express");
const connectDB = require("./Config/db");

const app = express();

// mengkoneksikan database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// define router
app.use("/posko/registrasi", require("./Routes/api/user"));
app.use("/posko/login", require("./Routes/api/auth"));
app.use("/posko/profile", require("./Routes/api/profile"));
// app.use("/api/users", require("./Routes/api/user"));
// app.use("/api/auth", require("./Routes/api/auth"));
// app.use("/api/profile", require("./Routes/api/profile"));
// app.use("/api/post", require("./Routes/api/Post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running di port ${PORT}`));
