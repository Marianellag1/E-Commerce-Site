const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  //   * `Category`
  {
    // define columns

    // * `id`
    category_id: {
      //   * Integer.
      type: DataTypes.INTEGER,
      //   * Set as primary key.
      primaryKey: true,
      //   * Uses auto increment.
      autoIncrement: true
                                //act5 ins
    },

  //   * Doesn't allow null values. ????



  // * `category_name`

  //   * String.

  //   * Doesn't allow null values.
  // > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
