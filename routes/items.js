const express = require('express');
const router = express.Router();
const itemsService = require('../services/items');
const searchService = require('../services/search');

router.get('/', async function(req, res, next) {
  const { q } = req.query;
  const results = await searchService.getResults(q || '');

  res.json(results);
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const item = await itemsService.getItem(id);

  res.json(item);
});

module.exports = router;
