'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderItems', {
      quantity: { allowNull: false, type: Sequelize.INTEGER },
      petId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pets',
            key: 'id',
          },
        },
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders',
            key: 'id',
          },
        },
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderItems');
  }
};
