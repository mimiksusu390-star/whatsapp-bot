const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WhatsApp bot server aktif!");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan di port ${PORT}`);
});
