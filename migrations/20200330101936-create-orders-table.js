'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: { primaryKey: true, autoIncrement: true, type: Sequelize.INTEGER },
      postedDate: { allowNull: false, type: Sequelize.DATE },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Customers',
            key: 'id',
          },
        },
        onDelete: 'cascade',
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};
