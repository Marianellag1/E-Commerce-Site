// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{ // Products belongsTo Category
  foreignKey: 'category_id',
}); 

Category.hasMany(Product,{ // Categories have many Products
  foreignKey: 'category_id',
}); 


Product.belongsToMany(Tag,{ // Products belongToMany Tags (through ProductTag)
  through: 'ProductTag',
  foreignKey: 'product_id',
});
  
Tag.belongsToMany(Product,{ // Tags belongToMany Products (through ProductTag)
  through: 'ProductTag',
  foreignKey: 'tag_id',
});

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
