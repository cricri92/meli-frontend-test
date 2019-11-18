const express = require('express');
const router = express.Router();

const itemsService = require('../services/items');
const searchService = require('../services/search');

const itemsMiddleware = require('../middleware/items');

router.get('/', async function(req, res, next) {
  const { q } = req.query;
  const results = await searchService.getResults(q || '');
  const { formatItemsResults } = itemsMiddleware;

  const formattedResults = formatItemsResults(results);

  res.json(formattedResults);
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const item = await itemsService.getItem(id);

  res.json(item);
});

module.exports = router;
