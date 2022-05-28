"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("atendimentos", {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pacientes", key: "Id" },
        onUpdate: "CASCADE",
      },
      psicologo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "psicologos", key: "Id" },
        onUpdate: "CASCADE",
      },
      data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("atendimentos");
  },
};
