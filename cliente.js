const express = require('express');
const router = express.Router();
const Cliente = require('./models/Cliente');

// 🔄 GET /api/cliente – Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    console.error('❌ Error al obtener clientes:', err);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

// 🆕 POST /api/cliente – Registrar un nuevo cliente
router.post('/', async (req, res) => {
  try {
    console.log('📦 Datos recibidos:', req.body); // <- Esto imprime lo que llega
    const { nombre, telefono, correo, direccion } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, telefono, correo, direccion });
    res.json(nuevoCliente);
  } catch (err) {
    console.error('❌ Error al registrar cliente:', err);
    res.status(500).json({ error: 'Error al registrar cliente' });
  }
});

module.exports = router;
