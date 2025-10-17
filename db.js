// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Verifica que la URL esté definida
if (!process.env.DB_URL) {
  throw new Error('❌ La variable de entorno DB_URL no está definida en el archivo .env');
}

// Crea la instancia de Sequelize con PostgreSQL
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false, // opcional: desactiva los logs de SQL en consola
});

// Exporta la instancia para usar en modelos
module.exports = sequelize;
