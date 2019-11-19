const fetch = require('node-fetch');
const ITEMS_API_URL = 'items';

function getItemDescription(itemId) {
	return new Promise((resolve, reject) => {
		fetch(`${process.env.API_URL}/${ITEMS_API_URL}/${itemId}/description`)
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

const itemsService = {
	getItem(itemId) {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.API_URL}/${ITEMS_API_URL}/${itemId}`)
				.then(response => {
					const res = response.json();

					if (res.error) {
						reject(res)
					} else {
						res.then(async res => {
							const description = await getItemDescription(itemId);

							resolve({
								...res,
								description
							});
						})
					}
				}).catch(error => {
					reject(error)
				})
		})
	}
};

module.exports = itemsService;