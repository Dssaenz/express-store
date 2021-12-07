const express = require('express');
const faker = require('faker')

const router = express.Router();

// Endpoint to get all products using 'faker'
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  };

  res.status(200).json(products);
});

// Endpoint to get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '000') {
    res.status(404).json({
      message: 'Not found',
    });
  } else {
    res.status(200).json({
      id,
      name: 'Vr ps4',
      price: 3000,
    });
  };
});

// Endpoint to create a product
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Product created',
    data: body,
  });
});

// Endpoint to update an especific value of product
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.status(200).json({
    message: 'Product updated',
    data: body,
    id,
  });
});


// Endpoint to delete a product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'Product deleted',
    id,
  });
});

module.exports = router;