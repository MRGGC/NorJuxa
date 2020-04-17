'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("coordinates", {
      lat: {
        type: Sequelize.FLOAT(),
        allowNull: true
      },
      lon: {
        type: Sequelize.FLOAT(),
        allowNull: true
      },
      status: {
        type: Sequelize.TEXT(),
        allowNull: true
      },
      start: {
        type: Sequelize.INTEGER(),
        allowNull: true
      },
      end: {
        type: Sequelize.INTEGER(),
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("coordinates");
  }
};