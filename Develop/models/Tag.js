const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init( //   * `Tag`
  {
    // define columns
    tag_id: { // * `id`
      type: DataTypes.INTEGER, //   * Integer.
      allowNull: false, //   * Doesn't allow null values.
      primaryKey: true, //   * Set as primary key.
      autoIncrement: true, //   * Uses auto increment.
    },
    tag_name: { // * `tag_name` 
      type: DataTypes.STRING //   * String.
    },
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

  //act5 ins