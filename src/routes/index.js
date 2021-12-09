const express = require('express');
const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoriesRuter = require('./categories.router');

function routerApi(app) {
  const routeVersion = express.Router();

  app.use('/api/v1', routeVersion);
  routeVersion.use('/users', usersRouter);
  routeVersion.use('/products', productsRouter);
  routeVersion.use('/categories', categoriesRuter);
}

module.exports = routerApi;
