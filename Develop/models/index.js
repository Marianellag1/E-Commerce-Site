// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products
    // * `Product` belongs to `Category`, 
    //and `Category` has many `Product` models, 
    // as a category can have multiple products 
    // but a product can only belong to one category.


// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
    // * `Product` belongs to many `Tag` models, and 
    // `Tag` belongs to many `Product` models. 
    // Allow products to have multiple tags and tags 
    // to have many products by using the `ProductTag` through model.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
