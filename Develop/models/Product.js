// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init( //   * `Product`
  {
    // define columns
    product_id: { // * `id`
      type: DataTypes.INTEGER, //   * Integer.
      allowNull: false,//   * Doesn't allow null values.
      primaryKey: true, //   * Set as primary key.
      autoIncrement: true //   * Uses auto increment.
    },
    product_name: { // * `product_name`
      type: DataTypes.STRING, //   * String.
      allowNull: false,//   * Doesn't allow null values.
    },
    price: { // * `price`
      type: DataTypes.DECIMAL, //   * Decimal.
      allowNull: false, //   * Doesn't allow null values.
      validate: {
        isDecimal: true, //   * Validates that the value is a decimal.
      }
    },
    stock: { // * `stock`
      type: DataTypes.INTEGER, //   * Integer.
      allowNull: false, //   * Doesn't allow null values.
      defaultValue: 10, //   * Set a default value of `10`.
      validate: {
        isNumeric: true, //   * Validates that the value is numeric.
      }
    },
    category_id: { // * `category_id`
      type: DataTypes.INTEGER, //   * Integer.
      references: { //   * References the `Category` model's `id`.
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,//set false to remove "created_at" and "updated_at" fields **from notes
    freezeTableName: true,
    underscored: true,//sets anything camel case to underscore = _
    modelName: 'product',
  }
);

module.exports = Product;

  //act5 ins