const fetch = require('node-fetch');
const SEARCH_API_URL = 'sites/MLA';
const SEARCH_QUERY = 'search?q=';

const searchService = {
	getResults(query) {
		return new Promise((resolve, reject) => {
			fetch(`${process.env.API_URL}/${SEARCH_API_URL}/${SEARCH_QUERY}${query}`)
				.then(response => {
					const res = response.json();

					if (res.error) {
						reject(res)
					} else {
						resolve(res);
					}
				}).catch(error => { reject(error) })
		});
	},
};

module.exports = searchService;