const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
require('dotenv').config();

const clienteRoutes = require('./cliente');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la DB
sequelize.authenticate()
  .then(() => {
    console.log("✅ Conectado a PostgreSQL");
  })
  .catch(err => {
    console.error("❌ Error al conectar a la DB:", err);
  });

// Rutas
app.use('/api/cliente', clienteRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API funcionando ✅ Usa /api/cliente para ver los datos.');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en: http://localhost:${PORT}`);
  console.log(`📡 API disponible en:     http://localhost:${PORT}/api/cliente`);
});
