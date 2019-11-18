const fetch = require('node-fetch');
const itemsAPIurl = 'items';

const itemsService = {
	getItem(itemId) {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.API_URL}/${itemsAPIurl}/${itemId}`)
				.then(response => {
					resolve(response.json());
				});
		})
	}
};

module.exports = itemsService;