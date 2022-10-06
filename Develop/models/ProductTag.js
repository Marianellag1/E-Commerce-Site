const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

//   * `ProductTag`
ProductTag.init(
  {
    // define columns
    // * `id`
    productTag_id: {
      //   * Integer.
      type: DataTypes.INTEGER,
      //   * Set as primary key.
      primaryKey: true,
      //   * Uses auto increment.
      autoIncrement: true
                                     //act5 ins
    },


  //   * Doesn't allow null values.????????



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
