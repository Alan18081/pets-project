'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pets', {
      id: { primaryKey: true, autoIncrement: true, type: Sequelize.INTEGER },
      species: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pets');
  }
};
