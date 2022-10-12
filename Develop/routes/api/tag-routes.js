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

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: Product });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);// create a new tag
    
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {

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
  res.status(200).json(tagData);
  } catch {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({// delete on tag by its `id` value
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
