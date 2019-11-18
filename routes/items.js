const express = require('express');
const router = express.Router();
const itemsService = require('../services/items');
const searchService = require('../services/search');

router.get('/', async function(req, res, next) {
  const { q } = req.query;
  const results = await searchService.getResults(q || '');

  res.json(results);
});

router.get('/:id', function (req, res, next) {
  res.json({ express: req.params })
});

module.exports = router;
