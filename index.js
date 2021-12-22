const express = require('express');
const routerApi = require('./src/routes');
const { logErrors, handleError, boomErrorHandler } = require('./src/middlewares/error.handler');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('My server is working');
});

app.get('/new-route', (req, res) => {
  res.send('My server is working');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(handleError);

app.listen(port, () => {
  console.log(`my port ${port}`);
});