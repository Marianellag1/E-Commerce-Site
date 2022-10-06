const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

//   * `Tag`
Tag.init(
  {
    // define columns

  // * `id`
  tag_id: {
    //   * Integer.
    type: DataTypes.INTEGER,
    //   * Set as primary key.
    primaryKey: true,
    //   * Uses auto increment.
    autoIncrement: true,
                               //act5 ins
  },
  
  //   * Doesn't allow null values.?????
  
  

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
