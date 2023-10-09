const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// Middleware untuk parsing body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data absensi sementara (gunakan MongoDB jika Anda ingin menyimpan data)
const absensi = [];

// Endpoint untuk melakukan absensi
app.post('/absen', (req, res) => {
  const { id } = req.body;

  // Validasi ID harus 5 karakter
  if (id.length !== 5) {
    return res.status(400).json({ error: 'ID harus terdiri dari 5 karakter' });
  }

  // Tambahkan data absensi
  const timestamp = new Date();
  absensi.push({ id, timestamp });

  return res.json({ message: 'Absensi berhasil', timestamp });
});

app.use(express.static("public"));


// Jalankan server pada port tertentu
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});