const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "user_product_id",
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "product_id",
      autoIncrement: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "users_model"
      }
    },
    product_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "product_qty",
      autoIncrement: false
    },
    product_weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "product_weight",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "modified_at",
      autoIncrement: false
    },
    extra_field1: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "extra_field1",
      autoIncrement: false
    },
    extra_field2: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "extra_field2",
      autoIncrement: false
    },
    extra_field3: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "extra_field3",
      autoIncrement: false
    },
    extra_field4: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "extra_field4",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_products",
    comment: "",
    indexes: []
  };
  const UserProductsModel = sequelize.define("user_products_model", attributes, options);
  return UserProductsModel;
};