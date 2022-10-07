const router = require('express').Router();
const { Category, Product } = require('../../models');

// Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

// Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({// find all categories
    // be sure to include its associated Products

  });
  return res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id);// find one category by its `id` value
  // be sure to include its associated Products
  return res.json(categoryData);
});

router.post('/', async (req, res) => {
  const categoryData = await Category.create(req.body); // create a new category

  return res.join(categoryData);
});

router.put('/:id', async (req, res) => {
  const categoryData = await Category.update(// update a category by its `id` value
  {
    category_name: req.body.category_name
  },
  {
    where: {
      category_id: req.params.category_id,
    }
  }
  );
});

router.delete('/:id', async (req, res) => {
  const categoryData = await Category.destroy({ // delete a category by its `id` value
    where: {
      category_id: req.params.category_id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;
