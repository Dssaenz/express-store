const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset,
    });
  };
  res.send('there is not limit or offset');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Darwin',
  });
});


module.exports = router;