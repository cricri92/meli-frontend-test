const fetch = require('node-fetch');
const ITEMS_API_URL = 'items';

const itemsService = {
	getItem(itemId) {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.API_URL}/${ITEMS_API_URL}/${itemId}`)
				.then(response => {
					const res = response.json();

					if (res.error) {
						reject(res)
					} else {
						resolve(res);
					}
				}).catch(error => {
					reject(error)
				})
		})
	}
};

module.exports = itemsService;