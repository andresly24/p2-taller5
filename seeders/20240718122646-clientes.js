'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'John',
        apellido: 'Doe',
        cedula: '012345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Jane',
        apellido: 'Smith',
        cedula: '112345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Manuel',
        apellido: 'Carcelen',
        cedula: '212345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Maria',
        apellido: 'Andrade',
        cedula: '312345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
