const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "category_id",
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "category_name",
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
    }
  };
  const options = {
    tableName: "categories",
    comment: "",
    indexes: []
  };
  const CategoriesModel = sequelize.define("categories_model", attributes, options);
  return CategoriesModel;
};