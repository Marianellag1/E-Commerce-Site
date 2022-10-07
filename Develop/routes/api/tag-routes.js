const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

// Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll(// find all tags
    {
      include: { // be sure to include its associated Product data
        model: Product
      },
    },

  );
  return res.json(tagData);
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findOne(req.params.id);// find a single tag by its `id`
  include: {// be sure to include its associated Product data
    model: Product
  };
  return res.json(tagData);
});

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body);// create a new tag

  return res.json(tagData);
});

router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(// update a tag's name by its `id` value
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  return res.json(tagData)
});

router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({// delete on tag by its `id` value
    where: {
      id: req.params.id,
    },
  });
  return res.json(tagData);
});

module.exports = router;
