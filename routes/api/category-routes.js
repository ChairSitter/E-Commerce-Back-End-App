const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }]
  });
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async(req, res) => {
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async(req, res) => {
  try {
    const categoriesData = await Category.create(req.body)
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async(req, res) => {
  try {
    const categoriesData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }})
      res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const categoriesData = await Category.destroy({
      where: {
        id: req.params.id
      }})
      res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
