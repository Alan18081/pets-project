'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      address: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
