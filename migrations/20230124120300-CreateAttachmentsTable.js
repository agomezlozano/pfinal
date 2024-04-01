'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'Attachments',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          mime: {
            type: Sequelize.STRING
          },
          url: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        },
        {
          sync: {force: true}
        }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Attachments');
  }
};
