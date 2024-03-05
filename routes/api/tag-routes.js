const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async(req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }]
  });
    res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async(req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async(req, res) => {
  try {
    const tagsData = await Tag.create(req.body)
    res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async(req, res) => {
  try {
    const tagsData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }})
      res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }})
      const productTagsData = await ProductTag.destroy({
        where: {
          tag_id: req.params.id
        }})
      res.status(200).json(tagsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
