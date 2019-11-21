const express = require('express');
const router = express.Router();

const {ITEMS_RESOURCE} = require("../constants/resources");
const {handleError, handleResponse} = require("../services/utils");

const itemsService = require('../services/items');
const searchService = require('../services/search');

const itemsMiddleware = require('../middleware/items');
const { formatItemsResults, formatItemResult } = itemsMiddleware;

router.get('/', async function(req, res, next) {
  const { q } = req.query;
  const results = await searchService.getResults(q || '');

  res.json(!results.error ? handleResponse(formatItemsResults(results)) : results);
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const item = await itemsService.getItem(id);

  res.json(!item.error ? handleResponse({ item: formatItemResult({...item} ) }) : handleError(item, ITEMS_RESOURCE, id));
});

module.exports = router;
