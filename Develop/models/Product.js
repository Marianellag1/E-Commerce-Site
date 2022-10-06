// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
//   * `Product`
Product.init(
  {
    // define columns
    // * `id`
    product_id: {
      //   * Integer.
      type: DataTypes.INTEGER,
      //   * Set as primary key.
      primaryKey: true,
      //   * Uses auto increment.
      autoIncrement: true
                                           //act5 ins
    },
  
  
  //   * Doesn't allow null values.?????
  
  

  // * `product_name`
  
  //   * String.
  
  //   * Doesn't allow null values.

  // * `price`
  
  //   * Decimal.
  
  //   * Doesn't allow null values.
  
  //   * Validates that the value is a decimal.

  // * `stock`
  
  //   * Integer.
  
  //   * Doesn't allow null values.
  
  //   * Set a default value of `10`.
  
  //   * Validates that the value is numeric.

  // * `category_id`
  
  //   * Integer.
  
  //   * References the `Category` model's `id`.
  // > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
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
