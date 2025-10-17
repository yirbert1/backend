const sequelize = require('./db');
const Cliente = require('./models/cliente');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión con la BD exitosa');

    const nuevo = await Cliente.create({ nombre: 'Test', apellido: 'Insert' });
    console.log('✅ Cliente insertado:', nuevo.toJSON());
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
