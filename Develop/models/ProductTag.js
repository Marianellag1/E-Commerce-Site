const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init( //   * `ProductTag`
  {
    // define columns
    productTag_id: { // * `id`
      type: DataTypes.INTEGER, //   * Integer.
      allowNull: false, //   * Doesn't allow null values.
      primaryKey: true, //   * Set as primary key.
      autoIncrement: true //   * Uses auto increment.
    },
    product_id: { // * `product_id`
      type: DataTypes.INTEGER, //   * Integer.
      references: { //   * References the `Product` model's `id`.
        model: 'product',
        key: 'id'
      }
    },
    tag_id: { // * `tag_id`
      type: DataTypes.INTEGER, //   * Integer.
      references: {//   * References the `Tag` model's `id`.
        model: 'tag',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

//act5 ins