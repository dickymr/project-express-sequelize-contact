const inventory = (sequelize, DataTypes) => {
  return sequelize.define('inventory', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    expiredDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}

module.exports = inventory