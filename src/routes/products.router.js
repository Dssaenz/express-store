const express = require('express');
const ProductsServices = require('../services/products.services');
const validatorHandler = require('../middlewares/validator.handler');

const {
  getProductScheme,
  createProductScheme,
  updateProductScheme,
  deleteProductScheme
} = require('../schemes/product.scheme');

const router = express.Router();

const service = new ProductsServices();

// Endpoint to get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  };
});

// Endpoint to get product by id
router.get('/:id',
  validatorHandler(getProductScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    };
  });

// Endpoint to create a product
router.post('/',
  validatorHandler(createProductScheme, 'body'),
  async (req, res) => {
  try {
    const body = req.body;
    const products = await service.createProduct(body);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

// Endpoint to update an especific value of product
router.patch('/:id',
  validatorHandler(getProductScheme, 'params'),
  validatorHandler(updateProductScheme, 'body'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.updateProduct(id, body);

    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

// Endpoint to delete a product
router.delete('/:id',
  validatorHandler(deleteProductScheme, 'params'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.deleteProduct(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;