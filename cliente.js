const express = require('express');
const router = express.Router();
const Cliente = require('./models/cliente.js'); // Asegúrate de que la ruta esté bien

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    console.error('❌ Error al obtener clientes:', err);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nombre, apellido } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, apellido });
    res.json(nuevoCliente);
  } catch (err) {
    console.error('❌ Error al registrar cliente:', err);
    res.status(500).json({ error: 'Error al registrar cliente' });
  }
});

module.exports = router;
