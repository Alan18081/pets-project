'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Orders', 'customerId');
      await queryInterface.addColumn(
          'Customers',
          'orderId',
          { type: Sequelize.INTEGER, references: { model: { tableName: 'Orders', key: 'id' } } }
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Customers', 'orderId');
      await queryInterface.addColumn(
          'Orders',
          'customerId',
          { type: Sequelize.INTEGER, references: { model: { tableName: 'Customers', key: 'id' } } }
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  }
};
