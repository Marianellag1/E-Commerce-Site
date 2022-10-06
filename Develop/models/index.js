// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{}); // Products belongsTo Category
Category.hasMany(Product,{}); // Categories have many Products
// as a category can have multiple products 
// but a product can only belong to one category.


Product.belongsToMany(Tag,{}); // Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product,{});// Tags belongToMany Products (through ProductTag)
// Allow products to have multiple tags and tags 
// to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
