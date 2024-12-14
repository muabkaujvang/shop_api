const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Sales = sequelize.define("tb_Sales", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
},
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Sales;
