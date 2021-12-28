const express = require('express');
const routerApi = require('./src/routes');
const cors = require('cors');
const { logErrors, handleError, boomErrorHandler } = require('./src/middlewares/error.handler');

const app = express();
const port = 8080;

app.use(express.json());

const whitelist = ['http://localhost:8080/', 'https://myapp.com.co'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not permissions'));
    }
  }
};

app.use(cors(options));

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