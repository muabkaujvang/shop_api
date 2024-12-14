const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Images = sequelize.define("tb_Images", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
},
  url: {
    type: DataTypes.STRING(500),
    allowNull: false,
  }
});

module.exports = Images;
