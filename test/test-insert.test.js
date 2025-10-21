const Cliente = require('../models/cliente');

// Simulamos (mockeamos) el modelo para evitar acceso real a la BD
jest.mock('../models/cliente');

describe('Modelo Cliente', () => {
  it('debería crear un cliente con nombre y apellido', async () => {
    const mockCliente = {
      toJSON: () => ({
        id: " ",
        nombre: 'Test',
        apellido: 'Insert'
      })
    };

    Cliente.create.mockResolvedValue(mockCliente);

    const nuevo = await Cliente.create({ nombre: 'Test', apellido: 'Insert' });

    expect(Cliente.create).toHaveBeenCalledWith({ nombre: 'Test', apellido: 'Insert' });
    expect(nuevo.toJSON()).toEqual({
      id: " ",
      nombre: 'Test',
      apellido: 'Insert'
    });
  });
});
