const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
  //   * `Tag`

  // * `id`
  
  //   * Integer.
  
  //   * Doesn't allow null values.
  
  //   * Set as primary key.
  
  //   * Uses auto increment.

  // * `tag_name`
  
  //   * String.
  // > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
