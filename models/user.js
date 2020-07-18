'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "user_id",
      autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,

  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.user_products, { foreignKey: 'user_id', as: 'Products' })
  };
  return user;
};