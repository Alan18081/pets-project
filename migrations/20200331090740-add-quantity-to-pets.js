'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pets', 'quantity', { type: Sequelize.INTEGER, defaultValue: 0 });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pets', 'quantity');
  }
};
