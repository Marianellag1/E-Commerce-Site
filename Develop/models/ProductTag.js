const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  //   * `ProductTag`

  // * `id`

  //   * Integer.

  //   * Doesn't allow null values.

  //   * Set as primary key.

  //   * Uses auto increment.

  // * `product_id`

  //   * Integer.

  //   * References the `Product` model's `id`.

  // * `tag_id`

  //   * Integer.

  //   * References the `Tag` model's `id`.
  // > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
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
