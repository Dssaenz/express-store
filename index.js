const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`my port ${port}`);
});

app.get('/', (req, res) => {
  res.send('My server is working');
});

app.get('/new-route', (req, res) => {
  res.send('My server is working');
});


routerApi(app);