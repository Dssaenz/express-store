const express = require('express');
const faker = require('faker')

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`my port ${port}`);
});

app.get('/', (req, res) => {
  res.send('My server is working');
});

app.get('/new-route', (req, res) => {
  res.send('My server is working');
});

app.get('/products', (req, res) => {
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

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Vr ps4',
    price: 3000,
  })
});


app.get('/categories', (req, res) =>{
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

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Games',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.get('/users', (req, res) =>{
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset,
    });
  };
  res.send('there is not limit or offset');
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Darwin',
  });
});
