'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            title: {
              type: Sequelize.STRING,
              allowNull: false
            },
            body: {
              type: Sequelize.TEXT,
              allowNull: false
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            }
          });
        },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Posts');
    }
};
