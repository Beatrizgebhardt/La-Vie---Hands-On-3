const { DataTypes } = require("sequelize");

const db = require("../database");

const Paciente = db.define(
  "paciente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { tableName: "paciente", timestamps: false, underscored: true }
);

module.exports = Paciente;