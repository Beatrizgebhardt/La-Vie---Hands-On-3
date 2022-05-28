const { Model, DataTypes } = require("sequelize");

class Atendimentos extends Model {
  static init(connection) {
    super.init(
      {
        data_atendimento: DataTypes.DATEONLY,
        observacao: DataTypes.TEXT,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pacientes, { foreignKey: "paciente_id", as: "pacientes" });
    this.belongsTo(models.Psicologos, { foreignKey: "psicologo_id", as: "psicologos" });
  }
}
module.exports = Atendimentos;
