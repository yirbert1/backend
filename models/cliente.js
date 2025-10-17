const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const cliente = sequelize.define('cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'clientes',
  timestamps: false,
});

module.exports = cliente;
