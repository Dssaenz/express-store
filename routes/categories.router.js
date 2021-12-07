const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  res.json([
    {
      id: '1',
      name: 'Games'
    },
    {
      id: '2',
      name: 'Divices'
    },
  ])
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Games',
  });
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
