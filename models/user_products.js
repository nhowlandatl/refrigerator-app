'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_products = sequelize.define('user_products', {
    user_product_id: DataTypes.INTEGER,
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: null,
    },
    product_qty: DataTypes.INTEGER,
    product_weight: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    product_image: DataTypes.STRING
  }, {});
  user_products.associate = function (models) {
    // associations can be defined here
    user_products.belongsTo(models.user, { targetkey: 'user_id', foreignKey: 'user_id' })
  };
  return user_products;
};