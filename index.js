const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk membaca JSON dari body request (wajib ada untuk POST/PUT)
app.use(express.json());

// Import router categories dari folder routes
const categoryRoutes = require('./routes/categories');

// Gunakan router tersebut untuk endpoint /categories
app.use('/categories', categoryRoutes);

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});