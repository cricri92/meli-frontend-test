const fetch = require('node-fetch');
const itemsAPIurl = 'sites/MLA';

const itemsService = {
	getItem(itemId) {
		return fetch(`${process.env.API_URL}/${itemsAPIurl}/${itemId}`);
	}
};

module.exports = itemsService;