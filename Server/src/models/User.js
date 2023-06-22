const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(35),
        allowNull: false,
        isEmail: true,
      },
      password: { type: DataTypes.STRING(15) },
    },
    { timestamps: false }
  );
};
